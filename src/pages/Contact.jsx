import './Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help. Get in touch with us today!</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper-full">
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form-full" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉️</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="8"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                We'd love to hear from you. Reach out to us through any of the following channels.
              </p>
              <div className="contact-info-full">
                <div className="contact-item-full">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon-large">📍</span>
                  </div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>123 Export Lane, Nashik, Maharashtra, India</p>
                  </div>
                </div>
                <div className="contact-item-full">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon-large">📞</span>
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+91 12345 67890</p>
                  </div>
                </div>
                <div className="contact-item-full">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon-large">✉️</span>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@globalimpexindia.com</p>
                  </div>
                </div>
              </div>
              <div className="business-hours">
                <h3>Business Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM IST</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact

