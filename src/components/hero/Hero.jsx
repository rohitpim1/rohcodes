import React from "react";
import "./hero.css";
import Image from "react-bootstrap/Image";
import profilePic from "../../images/profilePic.jpg";
import { LightSpeed, Flip,Bounce } from "react-reveal";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className="container hero" id="hero">
      <div className="row">
	  {/*  <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <div className="home__social" style={{transform: "rotate(180deg) skew(360deg, 0deg),opacity: 1"}}>
					<a href="https://www.instagram.com/rohcodes/" target="_blank" rel="noreferrer" className="home__social-link">instagram</a>
					<a href="https://www.linkedin.com/in/rohit-pimpalkar-rocodes" rel="noreferrer" target="_blank" className="home__social-link">linkedIn</a>
					<a href="https://github.com/rohitpim1/" target="_blank" rel="noreferrer" className="home__social-link">github</a>
				</div>
       </div> */ }
        <div className="col-lg-6 col-md-6 col-sm-10 col-10">
				<div className="home__title">
        <LightSpeed>
					<h2>
						<span className="heading" id="create" >Hi, I´m</span>
					</h2>
					<h2>
						<span id="create"  style={{transform: "translate(0px, 0%)"}}>Frontend</span>
					</h2>
					<h2>
						<span id="create"  style={{transform: "translate(0px, 0%)"}}>Designer</span>
					</h2>
					<h2>
						<span id="create"  style={{transform: "translate(0px, 0%)"}}>&amp; MERN</span>
					</h2>
					<h2>
						<span id="create"  style={{transform: "translate(0px, 0%)"}}>Developer</span>
					</h2>
         </LightSpeed>
					<span className="create-p"  style={{transform: "translate(0px, 0%)",opacity:1}}>Developer + Designer</span>
				</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 col-10">
          <div className="home__img" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
					<img src={profilePic} alt="profile" style={{clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)"}}/>
				</div>
        </div>

        
				

				<Link to="#contact" className="home__button" style={{transform: "translate(0px, 0px), opacity: 1"}}>Lets Connect <AiOutlineArrowRight/></Link>
          </div>
    </div>
  );
};

export default Hero;
