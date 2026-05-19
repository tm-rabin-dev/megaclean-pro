import PageHero from '../components/PageHero'

const sections = [
  {
    title: '1. About These Terms',
    content: `These Terms of Service ("Terms") govern your use of the Clenza Cleaning website at https://clenzaclean.com.au and any services provided by Clenza Cleaning ("Clenza", "we", "us", "our").

Business name: Clenza Cleaning
ABN: 20 455 980 845
Address: 7 Bennett St, Wentworthville NSW 2145
Email: hello@clenza.com.au
Phone: 0415 410 507

By using our website or booking a service, you agree to these Terms. If you do not agree, please do not use our website or services.`,
  },
  {
    title: '2. Our Services',
    content: `Clenza Cleaning provides professional cleaning services in Sydney, NSW, including but not limited to:

• Carpet cleaning
• Couch and upholstery cleaning
• Mattress cleaning
• End of lease cleaning
• Window cleaning
• Rug cleaning
• Curtain cleaning
• Bedframe cleaning
• Flood and water damage cleaning

Service availability is subject to our schedule and geographic coverage area. We reserve the right to decline a booking at our discretion.`,
  },
  {
    title: '3. Bookings and Quotes',
    content: `Quotes provided through our website or by phone are estimates based on the information you provide. Final pricing may vary depending on the actual condition, size, and accessibility of the area to be cleaned.

A booking is confirmed once you receive written or verbal confirmation from Clenza Cleaning. We reserve the right to adjust the quoted price if the actual job requirements differ significantly from what was described.`,
  },
  {
    title: '4. Payment',
    content: `Payment is due upon completion of the service unless otherwise agreed in writing. We accept cash, bank transfer, and other payment methods as advised at the time of booking.

Late payments may incur a follow-up fee. Invoices unpaid after 7 days may be referred to a debt recovery process.`,
  },
  {
    title: '5. Cancellations and Rescheduling',
    content: `We understand plans change. We ask that you provide at least 24 hours notice if you need to cancel or reschedule a booking.

Cancellations made with less than 24 hours notice may incur a cancellation fee of up to $50 to cover the cleaner's travel and time.

Repeated last-minute cancellations may result in us requiring a deposit for future bookings.`,
  },
  {
    title: '6. Access to Property',
    content: `You are responsible for ensuring our cleaners have safe and reasonable access to the property at the agreed time. If our team cannot access the property and we are not notified in advance, a call-out fee may apply.

You warrant that you have the authority to grant access to the property for the purpose of cleaning.`,
  },
  {
    title: '7. Satisfaction Guarantee',
    content: `We stand behind our work. If you are not satisfied with the result, please contact us within 24 hours of the completed service and we will return to re-clean the area at no additional charge.

This guarantee applies to the specific areas and services performed. It does not cover pre-existing damage, stains that cannot be removed with professional cleaning, or issues reported after 24 hours of service completion.`,
  },
  {
    title: '8. Damage and Liability',
    content: `Our cleaners take great care when working in your property. However, in the unlikely event of accidental damage caused by our team, please notify us within 24 hours.

Our liability is limited to the cost of the service performed. We are not liable for:

• Pre-existing damage or wear and tear
• Damage caused by faulty or fragile items not disclosed before the service
• Indirect or consequential losses

We carry public liability insurance for your peace of mind.`,
  },
  {
    title: '9. Your Responsibilities',
    content: `When using our services, you agree to:

• Provide accurate information when requesting a quote or booking
• Ensure the property is safe for our cleaners to work in
• Secure or remove fragile, valuable, or irreplaceable items before the service
• Notify us of any hazards (pests, mould, biohazards, etc.) before we attend
• Not leave children or pets unattended in areas being cleaned`,
  },
  {
    title: '10. Website Use',
    content: `You may use our website for lawful purposes only. You must not:

• Use the site in any way that violates applicable laws or regulations
• Attempt to gain unauthorised access to any part of the website
• Transmit any harmful, offensive, or misleading content through our contact forms

We reserve the right to restrict access to our website at any time without notice.`,
  },
  {
    title: '11. Intellectual Property',
    content: `All content on this website — including text, images, logos, and design — is the property of Clenza Cleaning or its licensors and is protected by Australian copyright law.

You may not reproduce, distribute, or use any content from this website without our prior written permission.`,
  },
  {
    title: '12. Privacy',
    content: `Your use of our website and services is also governed by our Privacy Policy, available at https://clenzaclean.com.au/privacy-policy. By using our services, you consent to the collection and use of your information as described in that policy.`,
  },
  {
    title: '13. Changes to These Terms',
    content: `We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the updated Terms.`,
  },
  {
    title: '14. Governing Law',
    content: `These Terms are governed by the laws of New South Wales, Australia. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts of New South Wales.`,
  },
  {
    title: '15. Contact Us',
    content: `If you have any questions about these Terms, please contact us:

Email: hello@clenza.com.au
Phone: 0415 410 507
Address: 7 Bennett St, Wentworthville NSW 2145, Sydney NSW, Australia`,
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or booking a service."
        crumb="Terms of Service"
      />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-slate-500 mb-10">
            Effective date: 16 May 2026 &nbsp;·&nbsp; Last updated: 19 May 2026
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            These Terms of Service outline the rules and conditions for using Clenza Cleaning's website and services. By booking a service or using this website, you agree to be bound by these terms.
          </p>

          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="text-lg font-extrabold text-slate-900 mb-3">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
