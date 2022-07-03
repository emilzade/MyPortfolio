import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service3 from "../Images/service3.png";
import service4 from "../Images/service4.svg";
import service5 from "../Images/service5.png";
import service6 from "../Images/service6.png";
import service7 from "../Images/service7.png";
import service8 from "../Images/service8.png";
function Services(){
    return(
        <div id="Services" className="services-main-container pt-2">
            <p className="display-4 text-center">Things I know</p>
            <div className="services-inner-container container p-md-2">
                <div className="services-box-container row">
                    <div className="service-box col-md-3 col-6">
                        <img className="w-25" src={service1} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service2} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service3} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service4} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service5} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service6} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service7} />
                    </div>
                    <div className="service-box col-md-3 col-6 p-1">
                        <img className="w-25" src={service8} />
                    </div>
                </div>
            </div>
            <div className="services-footer text-secondary fs-4 text-center p-2">
                <p className="p-1">
                    These are programming languages that i know
                    but I always improve myself and trying to do my best.
                </p>
                <p className="p-1">
                    I aim to become a dynamic and solution-oriented
                    consultant to help more people achieve their goals.
                </p>

            </div>
        </div>
    )
}
export default Services;