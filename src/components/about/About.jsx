import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about" id="about" style={{boxShadow: "0px 7px 9px 1px rgba(222,207,207,0.75)"}}>
      <h2 className="text-center pt-3" style={{color:"#141c3a"}}>Hi, I'm <strong>Rohit Pimpalkar</strong>. Nice to meet you. </h2>
      <h5 className="text-center pt-3" style={{color:"#141c3a"}}>Since beginning my journey as a <strong>Software Developer</strong> nearly 2+ years of experience, I've<br></br>
        worked on various projects with talented people to create digital products <br></br>
        for both business and consumer use.I'm quietly confident, naturally curious, <br></br>
        and perpetually working on improving my chops one design problem at a time.</h5>
    </div>
  )
}

export default About