import React, { Component } from "react";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BsBookmarkFill } from "react-icons/bs";
import "./CardComp.scss";

class Card extends Component {
  state = {
    value: this.props.value
  };


  render() {
    const { title, address, id ,descriptions} = this.state.value;

    return (
      <>
        <div className={"col-lg-" + this.props.viewCol}>
          <div className="card item-card">
            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt={"Card image cap"}
            />
            <div className="card-body">
              <h4
                onClick={() => this.props.showItem}
                className="card-title"
              >
                {title}
              </h4>
              <h5 className="card-subTitle">{address}</h5>
              <p className="card-text">
               { descriptions.substring(1, 150)}
              </p>
            </div>
            <div className="card-footer">
              <div className="social-btn">
                <button className="btn ">
                  <BsBookmarkFill /> Save
                </button>
                <button className="btn " 
               >
                  <FaShareAlt /> Share
                </button>
              </div>
              <Link   onClick={() => this.props.setItem(id)} className="btn btn-primary" to={"/details/" + id}>
                Rent
              
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return {
    setItem: () => dispatch({ type: "SETITEM" ,item:ownProps.value})
  };
}
export default connect(null,mapDispatchToProps)(Card);
