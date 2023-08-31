import React from "react";
import './contact.css';
import {
  BsFillSendFill,
  BsFillTelephoneOutboundFill,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsWhatsapp
} from "react-icons/bs";

function Contact() {

  return (
    <div>
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            Contact<span>Me</span>
          </h2>
          <h4>Let's Work Together</h4>
          <p>
            LoremBootstrap 4 is a newer version of Bootstrap; with new
            components.
          </p>
          <div className="contact-list">
            <ul>
              <BsFillSendFill className="y"/>
              shivagami.shanti@gmail.com
            </ul>
            <ul>
              <BsFillTelephoneOutboundFill className="y"/>
              9025912040
            </ul>
            <div className="contact-icons">
              <a href="#">
                <BsInstagram className="x"/>
              </a>
              <a href="#">
                <BsFacebook className="x" />
              </a>
              <a href="#">
                <BsLinkedin className="x"/>
              </a>
              <a href="#">
                <BsWhatsapp className="x"/>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email id" />
            <input type="" placeholder="Enter Your Subject" />
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
            />
            <input type="submit" value="submit" className="send" />
          </form>
        </div>
      </section>
      <div className="last-text">
        <p></p>
      </div>
    </div>
  );
}

export default Contact;
