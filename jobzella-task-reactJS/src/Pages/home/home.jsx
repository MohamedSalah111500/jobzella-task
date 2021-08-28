import React, { Component } from "react";
import CardList from "../../components/PresentList/CardList";
import "./home.scss";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="home-body">
          <div className="container">
            <div className="row">
              <CardList viewCol="4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
