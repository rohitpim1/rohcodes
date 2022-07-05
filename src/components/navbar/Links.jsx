import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Offcanvas,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Flip from 'react-reveal/Flip';
import './links.css'
const Links = () => {
  return (
    <>
  <Navbar  expand="lg" fixed='top' style={{backgroundColor:"#C4DDFF"}}  >
  <Container>
    <Navbar.Brand href="#hero" className="brand"  style={{color:"black",fontSize:"1.5rem",fontWeight:"700"}}><span style={{color:"red"}}>&lt;</span> CodeWithRohit <span style={{color:"red"}}> &gt; </span>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#about" style={{color:"black",fontSize:"1.2rem",fontWeight:"700"}}>AboutMe</Nav.Link>
        <Nav.Link href="#portfolio" style={{color:"black",fontSize:"1.2rem",fontWeight:"700"}}>PortFolio</Nav.Link>
        <Nav.Link href="#contact" style={{color:"black",fontSize:"1.2rem",fontWeight:"700"}}>GetInTouch</Nav.Link>

      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  )
}

export default Links