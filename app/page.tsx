import Header from '@/components/layout/header'
import HeroSection from '@/components/sections/hero-section'
import FeaturedVehicles from '@/components/sections/featured-vehicles'
import BrandShowcase from '@/components/sections/brand-showcase'
import ServicesOverview from '@/components/sections/services-overview'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import ContactCTA from '@/components/sections/contact-cta'
import Footer from '@/components/layout/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Vehicles */}
      <FeaturedVehicles />
      
      {/* Brand Showcase */}
      <BrandShowcase />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Contact CTA */}
      <ContactCTA />
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 