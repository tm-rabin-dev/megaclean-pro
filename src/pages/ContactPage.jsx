import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import CTABanner from '../components/CTABanner'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our Sydney team is ready to help. Reach out and we'll respond within the hour."
        crumb="Contact"
      />
      <Contact />
      <CTABanner
        title="Prefer to Book Online?"
        subtitle="Skip the back-and-forth — get an instant quote in under 60 seconds."
      />
    </>
  )
}
