import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.css";
import service1 from "../assets/Images/service1.png";
import service2 from "../assets/Images/service2.png";
import service3 from "../assets/Images/service3.png";
import service4 from "../assets/Images/service4.svg";
import service5 from "../assets/Images/service5.png";
import service6 from "../assets/Images/service6.png";
import service7 from "../assets/Images/service7.png";
import service8 from "../assets/Images/service8.png";
function Services() {
  return (
    <div
      id="Services"
      className="services-main-container pt-2 custom-landing-container"
    >
      <p className="display-4 text-center">Things I know</p>
      <div className="services-inner-container w-50">
        <div className="services-box-container row h-100">
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="" className="w-50" src={service1} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service2} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service3} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service4} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service5} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service6} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service7} />
          </div>
          <div className="service-box col-md-3 col-6 p-1">
            <img alt="serviceImage" className="w-50" src={service8} />
          </div>
        </div>
      </div>
      <div className="services-footer text-secondary fs-5 text-center p-2">
        <p className="p-1">
          These are programming languages that i know but I always improve
          myself and trying to do my best.
        </p>
        <p className="p-1">
          I aim to become a dynamic and solution-oriented consultant to help
          more people achieve their goals.
        </p>
      </div>
    </div>
  );
}
export default Services;
