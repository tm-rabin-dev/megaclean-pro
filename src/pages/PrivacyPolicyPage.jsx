import PageHero from '../components/PageHero'

const sections = [
  {
    title: '1. Who We Are',
    content: `Clenza Cleaning ("Clenza", "we", "us", "our") is a professional cleaning service based in Sydney, NSW, Australia.

Business name: Clenza Cleaning
ABN: 20 455 980 845
Address: 7 Bennett St, Wentworthville NSW 2145
Email: hello@clenza.com.au
Phone: 0415 410 507
Website: https://clenzaclean.com.au`,
  },
  {
    title: '2. What Information We Collect',
    content: `When you use our website or contact us, we may collect the following personal information:

• Full name
• Email address
• Phone number
• Suburb or postcode
• Details of the service you are enquiring about
• Any additional information you provide in a message or quote request

We collect this information only when you voluntarily submit it through our contact form, quote request form, or chatbot.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use your personal information to:

• Respond to your enquiry or quote request
• Arrange and confirm cleaning appointments
• Send you service-related communications
• Improve our services and website

We do not use your personal information for unsolicited marketing without your consent.`,
  },
  {
    title: '4. How We Store and Protect Your Information',
    content: `Form submissions on our website are processed through Formspree (formspree.io), a secure third-party form service. Your submitted data is transmitted securely and delivered to our business email.

We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access. We do not store payment card details — all payments are handled by trusted third-party processors.`,
  },
  {
    title: '5. Third-Party Services',
    content: `Our website uses the following third-party services which may collect data in accordance with their own privacy policies:

• Formspree — processes contact and quote form submissions (formspree.io/legal/privacy-policy)
• Google Analytics — website traffic analytics (policies.google.com/privacy)
• Vercel — website hosting (vercel.com/legal/privacy-policy)
• Google Maps — embedded map on our contact page (policies.google.com/privacy)

We are not responsible for the privacy practices of these third parties.`,
  },
  {
    title: '6. Cookies',
    content: `Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences.

By continuing to use our website, you consent to the use of cookies in accordance with this policy.`,
  },
  {
    title: '7. Disclosure of Your Information',
    content: `We will not sell, trade, or rent your personal information to third parties. We may disclose your information only:

• To our staff or contractors who need it to deliver a service to you
• Where required by law or a government authority
• With your explicit consent`,
  },
  {
    title: '8. Your Rights (Australian Privacy Act 1988)',
    content: `Under the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs), you have the right to:

• Request access to the personal information we hold about you
• Request correction of inaccurate or outdated information
• Request that we delete your information (subject to any legal obligations)
• Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au

To exercise any of these rights, contact us at hello@clenza.com.au.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us and we will delete it promptly.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:

Email: hello@clenza.com.au
Phone: 0415 410 507
Address: 7 Bennett St, Wentworthville NSW 2145, Sydney NSW, Australia`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Clenza Cleaning collects, uses, and protects your personal information."
        crumb="Privacy Policy"
      />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-slate-500 mb-10">
            Effective date: 16 May 2026 &nbsp;·&nbsp; Last updated: 19 May 2026
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            At Clenza Cleaning, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights under the Australian Privacy Act 1988.
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
