import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import TransformationsGallery from '../components/TransformationsGallery'
import VideoSection from '../components/VideoSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import PricingEstimator from '../components/PricingEstimator'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
import Pricing from '../components/Pricing'
import Guarantee from '../components/Guarantee'
import FAQ from '../components/FAQ'
import InstagramFeed from '../components/InstagramFeed'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services limit={6} showViewAll />
      <BeforeAfter />
      <TransformationsGallery />
      <VideoSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingEstimator />
      <Testimonials />

      {/* Google Reviews widget alongside testimonials CTA */}
      <section className="pb-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-sm mx-auto">
            <GoogleReviews />
          </div>
        </div>
      </section>

      <Pricing />
      <Guarantee />
      <FAQ limit={5} />
      <InstagramFeed />
      <CTABanner />
    </>
  )
}
