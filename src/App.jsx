import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechSpecs from './components/TechSpecs'
import Features from './components/Features'
import FAQSection from './components/FAQSection'
import Applications from './components/Applications'
import ManufacturingProcess from './components/ManufacturingProcess'
import Testimonials from './components/Testimonials'
import ProductsPortfolio from './components/ProductsPortfolio'
import Resources from './components/Resources'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const Divider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <hr className="border-gray-300/60" />
  </div>
)

export default function App() {
  return (
    <SmoothScroll>
      <div className="font-sans text-near-black bg-white antialiased">
        <Navbar />
        <main>
          <Hero />
          <TechSpecs />
          <Features />
          <Divider />
          <FAQSection />
          <Divider />
          <Applications />
          <Divider />
          <ManufacturingProcess />
          <Divider />
          <Testimonials />
          <Divider />
          <ProductsPortfolio />
          <Divider />
          <Resources />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
