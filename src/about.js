import React from "react";
import "./about.css";
import lightOff from "./images/WhatsApp.jpeg";

function About() {
  return (
    <>
      <span className="home-imgHover"> </span>
      <section className="about" id="about">
        <div className="about-img">
          <img
          src={lightOff}
          // src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_640.jpg"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>
            About<span>Me</span>
          </h2>
          <h4>Frontend Developer</h4>
          <p>
            I am a Frontend developer with experience in HTML, CSS and
            JavaScript. I have worked on projects using the latest technologies and many more...
          </p>
        </div>
      </section>
      <a href="#" className="btn-box">
        More About Me
      </a>

    </>
  );
}

export default About;
