import React from "react";
import "../styles/about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import facebook from "../assets/Images/facebook.png";
import twitter from "../assets/Images/twitter.png";
import instagram from "../assets/Images/instagram.png";
import "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div
      id="About"
      className="about-main-container pt-2 custom-landing-container"
    >
      <div className="about-header display-4 text-center">About Me</div>
      <div className="about-inner-container container row m-auto gap-1 p-2 justify-content-around">
        <div className="about-box col-md-5 col-12 d-flex flex-column py-1">
          <div className="fs-5">Contact</div>
          <a target="blank" href="tel:+994515630813">
            <div className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon icon={faPhone} />
              <div>(+994) 51 563 0813</div>
            </div>
          </a>
          <a target="blank" href="mailto:emil.sadullazade@gmail.com">
            <div className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon icon={faMessage} />
              <div>emil.sedullazade@gmail.com</div>
            </div>
          </a>
          <a
            target="blank"
            href="https://www.google.com/maps/place/40°33'36.6%22N+49°42'19.0%22E/@40.560178,49.703074,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xfbcfcc61ab5333f6!7e2!8m2!3d40.5601781!4d49.7052679"
          >
            <div className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon icon={faLocationPin} />
              <div>Sumgait city , 17th micro/region</div>
            </div>
          </a>
        </div>
        <div className="about-box col-md-5 col-12 d-flex flex-column">
          <div className="fs-5">Language Skills</div>
          <ul>
            <li>Azerbaijan</li>
            <li>Turkish</li>
            <li>English </li>
          </ul>
        </div>
        <div className="about-box col-md-5 col-12 py-2">
          <div className="fs-5">Educational History</div>
          <div className="d-flex flex-column">
            <p className="p-0 m-0">
              <b>September 2019 - June 2023</b> <br/> Azerbaijan Technical University
              - Bachelor in Information Technologies
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="p-0 m-0 fw-bold">September 2021 - March 2022</p>
            <p className="p-0 m-0">
              Developia - Front End Web Programming course{" "}
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="p-0 m-0 fw-bold">February 2022 - June 2022</p>
            <p className="p-0 m-0">
              Code Academy - Full Stack Web Programming course
            </p>
          </div>
        </div>
        <div className="about-box about-box-social col-md-5 col-12">
          <div className="social-box d-flex gap-3">
            <a target="blank" href="https://www.facebook.com/emil.sadullazade">
              <div className="social-icon">
                <img alt="socialImage" src={facebook} />
              </div>
            </a>
          </div>
          <div className="social-box d-flex gap-3">
            <a target="blank" href="https://www.instagram.com/em1l_zade/">
              <div className="social-icon">
                <img alt="socialImage" src={instagram} />
              </div>
            </a>
          </div>
          <div className="social-box d-flex gap-3">
            <a target="blank" href="https://twitter.com/em_l0813">
              <div className="social-icon">
                <img alt="socialImage" src={twitter} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
