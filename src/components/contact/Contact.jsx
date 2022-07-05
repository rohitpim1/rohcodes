import React from 'react'
import { Button } from 'react-bootstrap'
import './contact.css'
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className='header'>
        Get In Touch
      </div>
      <h5 style={{paddingTop:"5px", color:"#141c3a"}}>I’m always open to discussing product design work or opportunities.</h5>
      <div className='butt mt-3'>
        <a href="mailto:rohitpimpalkar052@gmail.com">Start a conversation</a>
      </div>
    </div>
  )
}

export default Contact