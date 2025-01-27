import { 
  FaHome, 
  FaServicestack, 
  FaEnvelope, 
  FaPhone, 
  FaInfoCircle, 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import Footer from "./footer.jsx"
import {Outlet,NavLink} from "react-router-dom"
import React from "react"
import logo from "../assets/logo.jpg"
import "./css/header.css"

function Nav(){
  const [isMobile,setIsMobile] = React.useState(false);

  function tooglenNav(){
    setIsMobile(prev => !prev);
  }
  return(
    <header>
      <section className="container flex flex-center">
        <section className="header-wrapper">
          <section className="logo">
            <img src={logo} />
          </section>
          <nav className={isMobile ? "mobile-open":null}>
            <ul className="head-list">
              <NavLink to="/">
                <FaHome /><p>Home</p>
              </NavLink>
              <NavLink to="/services">
                <FaServicestack /><p>Services</p>
              </NavLink>
              <NavLink to="/enquiry">
                <FaEnvelope /><p>Enquiry</p>
              </NavLink>
              <NavLink to="/contactus">
                <FaPhone /> <p>Contact US</p>
              </NavLink>
              <NavLink to="/aboutus">
                <FaInfoCircle /><p> About Us</p>
              </NavLink>
            </ul>
            <section className="social-media">
              <div className={isMobile ? "social-icons":"none"}>
                <a href="tel:+91 1234567890" target="_blank" rel="noopener noreferrer">
                  <FaPhone />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </section>
          </nav>
          <section className={isMobile?"hamburger rotate":"hamburger"} onClick={tooglenNav}>
            <span></span>
            <span></span>
            <span></span>
          </section>
        </section>
      </section>
    </header>
  )
}

export default function Header(){
  return(
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
