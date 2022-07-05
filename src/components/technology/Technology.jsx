import React from 'react'
import './technology.css'
import { LightSpeed, Flip } from "react-reveal";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.jpg";
import react from "../../images/react.png";
import node from "../../images/node.png";
import mongo from "../../images/mongo.jpg";
import Image from "react-bootstrap/Image";





const Technology = () => {
   
      

  return (
    <div className="technology" style={{boxShadow: "0px 7px 9px 1px rgba(222,207,207,0.75)"}}>
        <div className="header" ><Flip bottom>
        Experty In (Technology Stack)

        </Flip>
            </div>
        <div className='img-carousel d-flex justify-space-between'>
  <div className="mx-2 techimg"><Image src={html} rounded width="100px" height="100px"/></div>
  <div className="mx-2 techimg"><Image src={css} width="100px" height="100px"/></div>
  <div className="mx-2 techimg"><Image src={js} width="100px" height="100px"/></div>
  <div className="mx-2 techimg"><Image src={react} width="100px" height="100px"/></div>
  <div className="mx-2 techimg"><Image src={node} width="100px" height="100px"/></div>
  <div className="mx-2 techimg"><Image src={mongo} width="100px" height="100px"/></div>

        </div>
    </div>
  )
}

export default Technology