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

                <div className="box">
                  <div className="icon"><FaBuilding /></div>
                  <div className="text">
                    <h3>Corporate Office</h3>
                    <p>B/H Khadayata Bhuvan<br />Kapadvanj Road,Arban Nagar Society<br />Dakor-388225<br />Gujarat</p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon"><FaPhone /></div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p><a href="tel:+919714820103">+91 9714820103</a><br /><a href="tel:+919904222841">+91 9904222841</a></p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon"><FaEnvelope /></div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:qualityconsulting04@gmail.com">qualityconsulting04@gmail.com</a>
                      <br /><br />
                      <a href="mailto:Info@qualityconsulting.co.in">Info@qualityconsulting.co.in</a>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="box">
                  <div className="icon"><FaGlobe /></div>
                  <div className="text">
                    <h3>Website</h3>
                    <a target="_blank" className="website" href="https://www.qualityconsulting.co.in"><p>www.qualityconsulting.co.in</p></a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3486230084595!2d72.6726112724347!3d22.93738453333775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8997319bf835%3A0x30cb4a4a45e5eb11!2sVrundavan%20residency!5e0!3m2!1sen!2sin!4v1739388771116!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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
