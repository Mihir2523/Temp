import { 
  FaPhone, 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import "./css/footer.css"
export default function Footer(){
  return(
    <footer>
      <section className="container flex flex-center">
        <section className="footer-wrapper">
          <p>&copy;2025 Quality Consulting.All Rights Reserved.</p>
          <section className="icon-wrapper">
            <h2>Reach on Social Media</h2>
            <section className="foot-icons">
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
                  </a>{/*
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>*/}
            </section>
          </section>
        </section>
      </section>
    </footer>
  )
}