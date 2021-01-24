import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks,drinks,found}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          {!found && 
            <CardTitle>
              <h3>Sorry Page Not Found</h3>
            </CardTitle>
          }
          {found && 
            <div>
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome to Silicon Valley's premier dive cafe! We have:
              </h3>
            </CardTitle>
            <h3>{snacks.length} snacks to choose from!</h3>
            <h3>and</h3>
            <h3>{drinks.length} drinks to choose from!</h3>
            </div>
          }
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
