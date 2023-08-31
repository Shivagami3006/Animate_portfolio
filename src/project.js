import React from "react";
import './project.css';
import { FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  return (
    <div className="portfolio" id="project">
      <div className="main-text" id="project">
        <h2>
          Latest<span>Project</span>
        </h2>
        <div className="portfolio-content">
          <div className="row">
            <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>
                lorem ipsum100Include popular icons in your React projects
                easily with react-icons, which utilizes ES6 imports that allows
                you to include only the icons that your project is using.
              </p>
              <a href="#">
                <FaExternalLinkAlt className="i" />
              </a>
            </div>
           </div>
          <div className="row">
            <img src="https://img.freepik.com/premium-vector/mobile-apps-creation-mobile-application_451939-58.jpg?size=626&ext=jpg" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>
                lorem ipsum100Include popular icons in your React projects
                easily with react-icons, which utilizes ES6 imports that allows
                you to include only the icons that your project is using.
              </p>
              <a href="#">
                <FaExternalLinkAlt className="i" />
              </a>
            </div>
           </div>
          <div className="row">
            <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051556.jpg?size=626&ext=jpg&ga=GA1.2.972480032.1693391616&semt=ais" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>
                lorem ipsum100Include popular icons in your React projects
                easily with react-icons, which utilizes ES6 imports that allows
                you to include only the icons that your project is using.
              </p>
              <a href="#">
                <FaExternalLinkAlt className="i" />
              </a>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
