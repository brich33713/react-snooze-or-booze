import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import { useGet,useAdjust } from "./hooks";
import Add from './Add'

function App(props) {
  const [snacks,getSnacks] = useGet("snacks")
  const [drinks,getDrinks] = useGet("drinks")
  const [isLoading,changeLoading] = useAdjust()

  useEffect(() => {
    getSnacks();
    changeLoading()
  }, []);

  useEffect(() => {
    getDrinks();
    changeLoading()
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar pages={props.pages}/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} found={true}/>
            </Route>
            <Route exact path="/not-found">
              <Home snacks={snacks} drinks={drinks} found={false} />
            </Route>
            <Route exact path="/add">
              <Add pages={props.pages}/>
            </Route>
            <Route exact path="/:type">
              <Menu />
            </Route>
            <Route exact path="/:type/:id">
              <Snack />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.defaultProps = {
  pages: ["drinks","snacks","add"]
}