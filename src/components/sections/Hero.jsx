import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Global Impex India</h1>
          <p className="hero-subtitle">Your Trusted Global Trade Partner</p>
          <Link to="/products" className="hero-cta">
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

