import React from 'react'
import './portfolio.css'
import { Flip } from "react-reveal";
import img1 from '../../images/hero1.jpg'
import dash from '../../images/dash.png'
import landing from '../../images/landing.jpg'
import social from '../../images/social.jpg'
const arr = [
  {
    id:1,
    title:"card1",
    description:"Social Media landing page technology used React Js.",
    img:social,
    link:"https://rohitpim1.github.io/react-social-media/"
  },
 
  {
    id:2,
    title:"card2",
    description:"Crypto Website technology used HTML,CSS,Bootstrap,Javascript,React js.",
    img:landing,
    link:"https://rohitpim1.github.io/crypto-tracker/"
  },
  {
    id:3,
    title:"card3",
    description:"Sample dashboard technology used HTML,CSS,Bootstrap,Javascript",
    img:dash,
    link:"https://rohitpim1.github.io/dashboard1/"
  },
  {
    id:4,
    title:"card4",
    description:"Sample landing page technology used HTML,CSS,Bootstrap,Javascript.",
    img:landing,
    link:"https://rohitpim1.github.io/easybank-landing-page-master/"
  },
  {
    id:5,
    title:"card5",
    description:"Sample landing page technology used HTML,CSS,Bootstrap,Javascript.",
    img:landing,
    link:"https://rohitpim1.github.io/juniorSkills/"
  },
  {
    id:6,
    title:"card6",
    description:"Crypto Website technology used HTML,CSS,Bootstrap,Javascript,React js.",
    img:landing,
    link:"https://rohitpim1.github.io/CryptoVerse/"
  },
 
]
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="header">My Recent Work</div>
      <h5 className="pb-5" style={{color:"#141c3a",textAlign:"center"}}>Here are a few design projects I've worked on recently. Want to see more? <a href="mailto:rohitpimpalkar052@gmail.com">Email me.</a></h5>
      <div className='projects'>
        <Flip bottom>
   <div className='cardProject'>
  {
    arr?.map((data)=>(
      <a className="card" href={data.link} key={data.id} target="_blank">
      <img className="image" src={data.img} alt=""/>
    
      <p className='text'>{data.description}</p>
      
     
    </a>
    ))
  }
   </div>
   </Flip>
      </div>
    </div>
  )
}

export default Portfolio