import React from "react";
import "./skills.css";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";

function Skills() {
  return (
    <div>
      <h1 className="sub-tittle">
        My <span>Skills</span>
      </h1>
      <section>
        <div className="container" id="skills">
          <h1 className="heading1">Technical Skills</h1>
          <div className="technical-bars">
            <div className="bar">
              <AiOutlineHtml5 style={{ color: "#c95d2e" }} />
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
              <span className="percentage"></span>
              </div>
            </div>
            <div className="bar">
              <IoLogoCss3 style={{ color: "#147bbc" }} />
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
              <span className="percentage"></span>
              </div>
            </div>
            <div className="bar">
              <IoLogoJavascript style={{ color: "#b0bc1e" }} />
              <div className="info">
                <span>Javascript</span>
              </div>
              <div className="progress-line Javascript">
              <span className="percentage"></span>
              </div>
            </div>

            <div className="bar">
              <FaReact style={{ color: "#69cbc" }} />
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line React">
              <span className="percentage"></span>
              </div>
            </div>
            <div className="bar">
              <IoLogoNodejs style={{ color: "green" }} />
              <div className="info">
                <span>Express</span>
              </div>
              <div className="progress-line Express">
                <span className="percentage"></span>
              </div>
            </div>
            <div className="bar">
              <BiLogoPostgresql style={{ color: "#147bbc" }} />
              <div className="info">
                <span>SQL</span>
              </div>
              <div className="progress-line sql">
              <span className="percentage"></span>
              </div>
            </div>
            <div className="bar">
              <AiFillGithub style={{ color: "white" }} />
              <div className="info">
                <span>Git</span>
              </div>
              <div className="progress-line git">
              <span className="percentage"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <h1 className="heading1">Professional Skills </h1>
          <div className="radial-bar">
          <div className="radial-bars">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage1">90%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bars">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage1">50%</div>
            <div className="text">Communiation</div>
          </div>
          <div className="radial-bars">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage1">80%</div>
            <div className="text">Problem Solving</div>
          </div>
          <div className="radial-bars">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage1">85%</div>
            <div className="text">Team Work</div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
