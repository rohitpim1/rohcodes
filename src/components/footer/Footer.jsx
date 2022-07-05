import React from 'react'
import './footer.css'
import { AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer mt-5">
     <div className="header">
      <h4 style={{color:"black",fontWeight:"700"}}>Living, learning, & leveling up one day at a time.</h4>
     </div>
     <h6 className="pt-5" style={{color:"black",fontWeight:"500"}}>Handcrafted by me <AiFillCopyrightCircle/> CodeWithRohit</h6>
      </div>
  )
}

export default Footer