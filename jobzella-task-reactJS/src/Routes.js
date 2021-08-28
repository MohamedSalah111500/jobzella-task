import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/home/home";
import MohamedSalah from "./Pages/MohamedSalah/MohamedSalah";


import ItemDetails from "./Pages/itemDetails/itemDetails";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details/:id" component={ItemDetails} />
        <Route exact path="/details" component={MohamedSalah} />

        <Route exact path="/courses" component={MohamedSalah} />
        

        
      </>
    );
  }
}
