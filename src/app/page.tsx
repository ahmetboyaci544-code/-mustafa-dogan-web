import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import ShipmentSection from '@/components/ShipmentSection'
import StatsSection from '@/components/StatsSection'
import ReferencesSection from '@/components/ReferencesSection'
import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ShipmentSection />
        <StatsSection />
        <ReferencesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
