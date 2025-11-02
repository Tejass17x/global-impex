import { Link } from 'react-router-dom'
import './OurProducts.css'

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Safed Musli Roots',
      scientific: '(Chlorophytum borivilianum)',
      description: 'Premium-quality, naturally grown Safed Musli roots valued for their potent properties.'
    },
    {
      id: 2,
      name: 'Moringa Powder',
      description: 'A nutrient-dense superfood powder, sourced from high-quality Moringa leaves.'
    },
    {
      id: 3,
      name: 'Dried Safed Musli Powder',
      scientific: '(Chlorophytum Borivilianum)',
      description: 'Finely milled powder made from dried Safed Musli for easy use and consumption.'
    },
    {
      id: 4,
      name: 'Salem Turmeric Finger',
      description: 'Authentic Salem variety, known for its high curcumin content and rich aroma.'
    }
  ]

  return (
    <section className="our-products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">📦</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product.scientific && (
                  <p className="product-scientific">{product.scientific}</p>
                )}
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="products-cta">
          <Link to="/products" className="cta-button">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurProducts

