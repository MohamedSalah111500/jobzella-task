import React, { Component } from "react";
import CardList from "../../components/PresentList/CardList";
import CardDetails from "../../components/Card-Details/CardDetails";
import "./itemDetails.scss";


// statefull Component just return item selected info

class ItemDetails extends Component {
  state = {card:{}};
  callbackFunction = (card) => {
    this.setState({card: card});
}
  render() {
      const card =  { id: 2, title: 'Cercarold Laboratorise , Inc' , address: 'Maadi , Cairo'  }
    return (
      <>
        <div className="home-body">
          <div className="container">
            <div className="row">
              <div className="col-4 no-padding">
                <div className="scroll">
                  <CardList showItem = {this.callbackFunction} viewCol="12" />
                </div>
              </div>
              <div className="col-8 no-padding">
              <CardDetails  value={card}  />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemDetails;
