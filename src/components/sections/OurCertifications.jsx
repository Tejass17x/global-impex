import { Link } from 'react-router-dom'
import './OurCertifications.css'

const OurCertifications = () => {
  return (
    <section className="our-certifications">
      <div className="container">
        <h2 className="section-title">Our Certifications</h2>
        <div className="certifications-content">
          <p className="certifications-text">
            At Global Impex India, we adhere to strict global standards and maintain various international certifications to ensure the highest quality of our products. Our commitment to quality control, sustainable practices, and regulatory compliance makes us a trusted partner in the global export market.
          </p>
          <Link to="/certifications" className="certifications-btn">
            View Certifications
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurCertifications

