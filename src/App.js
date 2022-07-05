import React from 'react'
import './App.css'
import About from './components/about/About.jsx'
import {Button} from 'react-bootstrap'
import Portfolio from './components/portfolio/Portfolio'
import Links from './components/navbar/Links'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Technology from './components/technology/Technology'

const App = () =>{
  return(
    <div className="app">
    <Links/>
    <Hero/>
    <Technology/>
    
  <Portfolio/>
  <About/>
  <Contact/>
  <Footer/>
  
    </div>
  )
}
export default App;