import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import SnackOrBoozeApi from './Api'
import {useAdjust} from './hooks'

function FoodMenu({ snacks }) {
  let {type} = useParams()
  const [items,setItems] = useState([])
  const [isLoading,changeLoading] = useAdjust()
  const [found,changeFound] = useState(true)
  
  const getItems = async () => {
      let data = await SnackOrBoozeApi.getItems(type);
      if(data !== "not found"){
      setItems(data)
      changeLoading()
      } else {
        changeFound(false)
      }
    }
  
    getItems()

  // useEffect(() => {
  //   getItems()
  // },[])
  if(!found){
    let route = `/${type}`
    return <Redirect to="/not-found" />
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            <h1>Food Menu</h1>
          </CardTitle>
          <CardText>
            <h3>Choose From Below: </h3>
          </CardText>
          <ListGroup>
            {isLoading && <p>Loading</p>}
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
