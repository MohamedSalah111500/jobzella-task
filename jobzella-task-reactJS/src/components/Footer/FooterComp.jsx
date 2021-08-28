import React from "react";
import logoImg from "../../assets/img/logo.png";
import "./FooterComp.scss";


// stateless function return Footer 

const Footer = () =>   {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img src={logoImg} alt="" />
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-4">
                    <h6>GENERAL</h6>
                    <ul>
                      <li><a href="http://">About</a> </li>
                      <li><a href="http://">Mission</a></li>
                      <li><a href="http://">Services</a></li>
                      <li><a href="http://">Social</a></li>
                      <li><a href="http://">Get in touch</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h6>QUICK LINKS</h6>
                    <ul>
                      <li><a href="http://">About</a> </li>
                      <li><a href="http://">Mission</a></li>
                      <li><a href="http://">Services</a></li>
                      <li><a href="http://">Social</a></li>
                      <li><a href="http://">Get in touch</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
              <div className="download-app text-center">
                <h6>Download Jobzella Mobile App</h6>
                <p>Jobzella mobile app for Android and iPhone</p>
               <div className="stors">
              <a href="https://play.google.com/store/apps/details?id=com.jobzella.jobzellapp" target="_blank"> <img src="https://www.jobzella.com/ui-assets/images/icons/mobileapp-badge-android.png" alt=""/></a>
              <a href="https://apps.apple.com/eg/app/jobzella/id1092959138" target="_blank"> <img src="https://www.jobzella.com/ui-assets/images/icons/mobileapp-badge-appstore.svg" alt=""/></a>
               </div>
               <p className="f-bold">DOWNLOAD FREE</p>
               <select  className="form-control">
                    <option>English</option>
                    <option>عربي</option>
                </select>
               </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Footer;
