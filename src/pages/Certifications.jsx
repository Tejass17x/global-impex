import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'ISO Certification',
      description: 'ISO certified for quality management systems ensuring consistent quality in all our operations.',
      icon: '🏆'
    },
    {
      id: 2,
      name: 'Organic Certification',
      description: 'Certified organic products meeting international organic standards and regulations.',
      icon: '🌿'
    },
    {
      id: 3,
      name: 'FSSAI Certification',
      description: 'Food Safety and Standards Authority of India certification for food safety compliance.',
      icon: '✅'
    },
    {
      id: 4,
      name: 'Export License',
      description: 'Authorized export license ensuring compliance with all international trade regulations.',
      icon: '📋'
    },
    {
      id: 5,
      name: 'GMP Certification',
      description: 'Good Manufacturing Practices certification for maintaining high production standards.',
      icon: '🏭'
    },
    {
      id: 6,
      name: 'HACCP Certification',
      description: 'Hazard Analysis and Critical Control Points certification for food safety management.',
      icon: '🔒'
    }
  ]

  return (
    <main className="certifications-page">
      <div className="certifications-hero">
        <div className="container">
          <h1>Our Certifications</h1>
          <p>Quality Assured, Globally Recognized</p>
        </div>
      </div>
      <div className="certifications-content">
        <div className="container">
          <div className="intro-section">
            <p className="intro-text">
              At Global Impex India, we adhere to strict global standards and maintain various international certifications to ensure the highest quality of our products. Our commitment to quality control, sustainable practices, and regulatory compliance makes us a trusted partner in the global export market.
            </p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="quality-commitment">
            <h2>Our Quality Commitment</h2>
            <div className="commitment-points">
              <div className="commitment-item">
                <span className="check-icon">✓</span>
                <p>Regular quality audits and inspections</p>
              </div>
              <div className="commitment-item">
                <span className="check-icon">✓</span>
                <p>Compliance with international standards</p>
              </div>
              <div className="commitment-item">
                <span className="check-icon">✓</span>
                <p>Sustainable and ethical sourcing practices</p>
              </div>
              <div className="commitment-item">
                <span className="check-icon">✓</span>
                <p>Continuous improvement and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Certifications

