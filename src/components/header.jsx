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
  FaTwitter,
  FaTimes, // Import FaTimes for the close icon
} from 'react-icons/fa';
import Footer from "./footer.jsx"
import { Outlet, NavLink } from "react-router-dom"
import React from "react"
import logo from "../assets/work.svg"
import "./css/header.css"

function Nav() {
  const [isMobile, setIsMobile] = React.useState(false);

  function toggleNav() {
    setIsMobile(prev => !prev);
  }

  return (
    <header>
      <section className="container flex flex-center">
        <section className="header-wrapper">
          <section className="logo">
            <img src={logo} alt="Logo" /> {/* Added alt attribute for accessibility */}
          </section>
          <nav className={isMobile ? "mobile-open" : null}>
            {/* Close Button */}
            {isMobile && (
              <section className="close-button-container">
                <FaTimes className="close-button" onClick={toggleNav} />
              </section>
            )}
            <ul className="head-list">
              <NavLink to="/" onClick={() => setIsMobile(false)}>
                <FaHome /><p>Home</p>
              </NavLink>
              <NavLink to="/services" onClick={() => setIsMobile(false)}>
                <FaServicestack /><p>Services</p>
              </NavLink>
              <NavLink to="/enquiry" onClick={() => setIsMobile(false)}>
                <FaEnvelope /><p>Enquiry</p>
              </NavLink>
              <NavLink to="/contactus" onClick={() => setIsMobile(false)}>
                <FaPhone /> <p>Contact US</p>
              </NavLink>
              <NavLink to="/aboutus" onClick={() => setIsMobile(false)}>
                <FaInfoCircle /><p> About Us</p>
              </NavLink>
            </ul>
            <section className="social-media">
              <div className={isMobile ? "social-icons" : "none"}>
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
          <section className={isMobile ? "hamburger rotate" : "hamburger"} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </section>
        </section>
      </section>
    </header>
  )
}

export default function Header() {
  return (
    <>
      <Nav />
      <Outlet/>
      <Footer />
    </>
  )
}
