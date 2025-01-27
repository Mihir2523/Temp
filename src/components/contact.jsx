import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaUser,
  FaGlobe,
  FaBuilding,
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';
import image from "../assets/1.jpg";
import "./css/contact.css";

export default function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-container">
        <section className="contact">
          <div className="content">
            <h2>Contact Us</h2>
            <p>Need Help? Reach out to us. We are always ready to answer your questions.</p>
          </div>
          <div className="in-container">
            <div className="contactinfo">
              <div className="contact-details">
                {/* Contact Person */}
                <div className="box">
                  <div className="icon"><FaUser /></div>
                  <div className="text">
                    <h3>Contact Person</h3>
                    <p>Jaydev Parmar</p>
                  </div>
                </div>

                {/* Address */}
                <div className="box">
                  <div className="icon"><FaMapMarkerAlt /></div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>B-205,Vrundavan Residency<br />Besides Shraddha Pioneer<br />Hathijan,Ahmedabad-382445<br />Gujarat,India</p>
                  </div>
                </div>
{/*
                <div className="box">
                  <div className="icon"><FaBuilding /></div>
                  <div className="text">
                    <h3>Corporate Office</h3>
                    <p>456 Business Avenue<br />Lahore, Punjab<br />Pakistan</p>
                  </div>
                </div>

*/}                {/* Phone */}
                <div className="box">
                  <div className="icon"><FaPhone /></div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>+91 9714820103</p>
                  </div>
                </div>

                {/* Email */}
                <div className="box">
                  <div className="icon"><FaEnvelope /></div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>qualityconsulting04@gmail.com</p>
                  </div>
                </div>

                {/* Website */}
                <div className="box">
                  <div className="icon"><FaGlobe /></div>
                  <div className="text">
                    <h3>Website</h3>
                    <a target="_blank" className="website" href="https://www.qualityconsulting-consultant.business.site"><p>www.qualityconsulting-consultant.business.site</p></a>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-links">
                <h2>Connect with us</h2>
                <ul className="social-icons">
                  <li><FaFacebook /></li>
                  <li><FaTwitter /></li>
                  <li><FaInstagram /></li>
                  <li><FaLinkedin /></li>
                </ul>
              </div>
            </div>
            
            {/* SVG Section with Increased Size */}
            <div className="svg">
              <img src={image} alt="Contact Illustration"/>
            </div>
          </div>
        </section>

        {/* Google Maps Container */}
        <section className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322244!2d74.3453941!3d31.5197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23eff6b5d1d6c3!2sLahore!5e0!3m2!1sen!2s!4v1625079683922!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </main>
  );
}
