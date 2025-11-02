import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Global Impex India</h3>
            <p>Your Trusted Global Trade Partner</p>
            <p className="footer-copyright">© 2024 Global Impex India. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Export Lane, Nashik, Maharashtra, India</p>
            <p>📞 +91 12345 67890</p>
            <p>✉️ info@globalimpexindia.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

