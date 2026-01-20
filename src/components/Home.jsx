import Hero from './Hero'
import AboutSection from './AboutSection'
import ProductsSection from './ProductsSection'
import WhySection from './WhySection'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialsSection from './TestimonialsSection'
import CTASection from './CTASection'
import Footer from './Footer'
import BackgroundClipPath from './BackgroundClipPath'
import './SectionsWithBackground.css'

function Home() {
  return (
    <div className="App">
      <Hero />
      <div className="sections-with-background">
        <BackgroundClipPath />
        <AboutSection />
        <ProductsSection />
        <WhySection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  )
}

export default Home


