import React from "react";
import './service.css';
import {   BsApple } from "react-icons/bs";
import { BiCode,BiSolidCrop} from "react-icons/bi";

function Service() {
  return (
    <>
      <section style={{alignItems:"center"}}>
        <div className="service" id="service">
          <div className="container">
            <h1 className="sub-tittle">
              My <span>Service</span>
            </h1>
            <div className="service-list">
            <div>
              <BiCode style={{ color: "#00eeff" }} className="icons"/>
              <h2>UI/UX Design</h2>
              <p>
                lorem ipsum30 I am a Frontend developer with experience in HTML,
                CSS and JavaScript.
              </p>
              <a href="#" className="read">
                Learn More
              </a>
            </div>
            <div>
              <BiSolidCrop style={{ color: "#00eeff" }} className="icons"/> 
              <h2>UI/UX Design</h2>
              <p>
                lorem ipsum30 I am a Frontend developer with experience in HTML,
                CSS and JavaScript.
              </p>
              <a href="#" className="read">
                Learn More
              </a>
            </div>
            <div>
              <BsApple style={{ color: "#00eeff" }}className="icons" /> 
              <h2>UI/UX Design</h2>
              <p>
                lorem ipsum30 I am a Frontend developer with experience in HTML,
                CSS and JavaScript.
              </p>
              <a href="#" className="read">
                Learn More
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
