import Hero from '../components/sections/Hero'
import GetToKnowUs from '../components/sections/GetToKnowUs'
import OurProducts from '../components/sections/OurProducts'
import OurCertifications from '../components/sections/OurCertifications'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <GetToKnowUs />
      <OurProducts />
      <OurCertifications />
      <ContactSection />
    </main>
  )
}

export default Home

