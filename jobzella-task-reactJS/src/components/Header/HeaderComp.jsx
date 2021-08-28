import React from "react";
import {NavLink} from 'react-router-dom';
import { FaPowerOff,FaBell } from 'react-icons/fa';
import logoImg from "../../assets/img/logo.png";
import "./HeaderComp.scss";

// stateless function return header incloud routs links
const Header = () =>  {
    return (
      <>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-1">
                <img className="logo" src={logoImg} alt="" />
              </div>
              <div className="col-5 d-flex align-center">
                <ul>
               <NavLink exact to="/">   Projects</NavLink>
               <NavLink exact to="/details">   Community</NavLink>
               <NavLink exact to="/courses">  Courses</NavLink>
                </ul>
              </div>
              <div className="col-3 "></div>
               <div className="col-3 d-flex user-controls align-center justify-content-end">
               <button className="btn"><FaPowerOff /> </button>
               <button className="btn "><FaBell /> </button>
               <h5>USER</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Header;
