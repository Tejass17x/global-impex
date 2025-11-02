import './Products.css'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Safed Musli Roots',
      scientific: 'Chlorophytum borivilianum',
      description: 'Premium-quality, naturally grown Safed Musli roots valued for their potent properties. Safed Musli is a traditional Indian herb known for its medicinal benefits and has been used in Ayurveda for centuries.',
      benefits: ['Natural energy booster', 'Supports overall wellness', 'High nutritional value', '100% natural and organic']
    },
    {
      id: 2,
      name: 'Moringa Powder',
      description: 'A nutrient-dense superfood powder, sourced from high-quality Moringa leaves. Rich in vitamins, minerals, and antioxidants, Moringa powder is considered one of the most nutritious plants on Earth.',
      benefits: ['High in vitamins A, C, E', 'Rich in antioxidants', 'Supports immune system', 'Easy to incorporate in daily diet']
    },
    {
      id: 3,
      name: 'Dried Safed Musli Powder',
      scientific: 'Chlorophytum Borivilianum',
      description: 'Finely milled powder made from dried Safed Musli for easy use and consumption. This convenient form retains all the natural properties of Safed Musli while being easier to store and use.',
      benefits: ['Easy to use and store', 'Long shelf life', 'Retains all natural properties', 'Convenient for daily consumption']
    },
    {
      id: 4,
      name: 'Salem Turmeric Finger',
      description: 'Authentic Salem variety, known for its high curcumin content and rich aroma. Salem turmeric is renowned for its superior quality, deep color, and exceptional flavor profile.',
      benefits: ['High curcumin content', 'Rich aroma and flavor', 'Premium quality', 'Authentic Salem variety']
    }
  ]

  return (
    <main className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium Quality Agricultural & Herbal Products</p>
        </div>
      </div>
      <div className="products-content">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-detail-card">
                <div className="product-image-large">
                  <div className="product-placeholder-large">📦</div>
                </div>
                <div className="product-details">
                  <h2 className="product-name-large">{product.name}</h2>
                  {product.scientific && (
                    <p className="product-scientific-large">{product.scientific}</p>
                  )}
                  <p className="product-description-large">{product.description}</p>
                  <div className="product-benefits">
                    <h3>Key Benefits:</h3>
                    <ul>
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Products

