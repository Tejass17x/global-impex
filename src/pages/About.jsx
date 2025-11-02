import './About.css'

const About = () => {
  return (
    <main className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Global Impex India</h1>
        </div>
      </div>
      <div className="about-content">
        <div className="container">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Global Impex India was founded by Mr. Sagar Tadvi with a vision to bring India's finest agricultural, herbal, and processed food products to the global market. What started as a passion for quality and authenticity has grown into a trusted export company recognized worldwide.
            </p>
            <p>
              Our journey began with a simple commitment: to source only the best products, maintain the highest standards, and build lasting relationships with our customers. Today, we are proud to export premium-quality products to various countries across the globe.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To establish Global Impex India as a leading exporter of premium agricultural and herbal products by maintaining uncompromising quality standards, fostering sustainable practices, and delivering exceptional value to our customers worldwide.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be a leading name in the global export industry, recognized for our commitment to quality, reliability, and customer satisfaction. We aim to bridge the gap between India's rich agricultural heritage and global markets, bringing authentic and premium products to customers worldwide.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Quality Assurance</h3>
                <p>We maintain strict quality control measures and international certifications to ensure every product meets global standards.</p>
              </div>
              <div className="feature-card">
                <h3>Authentic Products</h3>
                <p>We source directly from trusted farmers and suppliers to guarantee authenticity and premium quality.</p>
              </div>
              <div className="feature-card">
                <h3>Global Standards</h3>
                <p>Our products adhere to international regulations and quality certifications for safe and reliable exports.</p>
              </div>
              <div className="feature-card">
                <h3>Customer Focus</h3>
                <p>We prioritize customer satisfaction and build long-term relationships through excellent service and support.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Founder</h2>
            <div className="founder-info">
              <p>
                <strong>Mr. Sagar Tadvi</strong> is the visionary founder of Global Impex India. With extensive experience in the agricultural export industry and a deep understanding of global markets, Mr. Tadvi has built a company that stands for quality, integrity, and excellence.
              </p>
              <p>
                His commitment to sourcing the finest products and maintaining the highest standards has established Global Impex India as a trusted partner in the global export market.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default About

