import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BrandMarquee from '@/components/BrandMarquee'
import ProductShowcase from '@/components/ProductShowcase'
import WhySantek from '@/components/WhySantek'
import DeliverySection from '@/components/DeliverySection'
import BizKimizSection from '@/components/BizKimizSection'
import CTABanner from '@/components/CTABanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandMarquee />
        <ProductShowcase />
        <WhySantek />
        <DeliverySection />
        <BizKimizSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
