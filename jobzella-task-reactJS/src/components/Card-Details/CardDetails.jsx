import React, { Component } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import {connect} from 'react-redux';
import { BsBookmarkFill } from "react-icons/bs";
import './Card-Details.scss'

class CardDetails  extends Component {
    state = {
        value:this.props.item
    }
    render() {
        const  {title,address,id,descriptions } = this.props.item;
        return (
            <>
        <div className="card item-card card-details">
        <div className="row">
            <div className="col-lg-7">
                    <div className="card-body no-padding">
                        <h4 className="card-title">{title}</h4>
                        <h5 className="card-subTitle">{address}</h5>
                    </div>
            </div>
            <div className="col-lg-5">
        <div className="card-footer no-padding">
            <div className="social-btn">
                <button className="btn "><BsBookmarkFill /> Save</button>
                <button className="btn "><FaShareAlt /> Share</button>
            </div>
            <a href={''} className="btn btn-primary">Rent</a>
         </div>
         </div>
         </div>
            <img className="card-img-top" src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={"Card image cap"} />
            <div className="card-body">
             <p className="card-text">{descriptions}</p>
            </div>
         </div>
            </>
        );
    }
}
function mapStateToProps(state){
    return  {
        item: state.item
    }
}

export default  connect(mapStateToProps)(CardDetails);