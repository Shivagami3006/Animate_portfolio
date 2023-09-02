import React, { useEffect ,useRef} from "react";
import "./home.css";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import Typed from 'typed.js';

function Home() {
  const el =useRef(null);
  useEffect(()=>{
  var typed = new Typed(el.current,{
    strings: ["frontend developer", "web developer",'learner'],
    typeSpeed : 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  })

  })
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h3>Hello It's Me</h3>
          <h1 className='text'>Shivagami.R</h1>
          <h3>And I'm a   <span ref={el}></span></h3>
          <p>
            I'm a web developer fresher
            <br /> frentend designer Learn frentend in login 360 <br />
          </p>
          <div className="home-sci">
            <a href="#"  style={{"--i":1}} > 
              <BsFacebook />
            </a>
            <a href="#" style={{"--i":2 }}>
              <AiOutlineInstagram />
            </a>
            <a href="#" style={{"--i":3}}>
              <AiOutlineWhatsApp />
            </a>
            <a href="#" style={{"--i":4}}>
              <AiOutlineMail />
            </a>
          </div>
          <a href="#" className="btn-box">
            More About Me
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
