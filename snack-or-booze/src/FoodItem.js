import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import { useAdjust } from "./hooks";

function FoodItem() {
  const [item,changeItem] = useState([])
  const { id, type } = useParams();
  const [isLoading,changeLoading] = useAdjust()
  const [found,changeFound] = useState(true)
  
  async function retrieve(){
    let selection = await SnackOrBoozeApi.getItem(type,id)
    if(selection !== "not found"){
      changeItem(selection);
      changeLoading()
    } else {
      changeFound(false)
    }
  }

  useEffect(() => {
    retrieve()
  },[])

  if(!found){
    let route = `/${type}`
    return <Redirect to={route} />
  }

  return (
    <section>
      <Card>
      {isLoading && <di><p>Loading</p></di>}
      {!isLoading &&
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      }
      </Card>
    </section>
  );
}

export default FoodItem;
