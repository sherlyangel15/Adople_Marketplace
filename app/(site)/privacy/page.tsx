export default function PrivacyPage() {
  return (
    <main className="prose prose-neutral mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-center">Privacy Policy</h1>
      <p className="lead mb-1">
        This Privacy Policy explains how <strong>ADOPLE AI</strong> collects, uses, and shares information when you use our services.
      </p>

      <div className="space-y-1">
        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">1. <span className="font-bold">Information We Collect</span></h2>
          <ul className="list-disc pl-6">
            <li>Account information (name, email, password hash).</li>
            <li>Purchase details (order ID, products, transaction timestamps).</li>
            <li>Usage data (pages viewed, device info, approximate location).</li>
            <li>Support data (messages, attachments).</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">2. <span className="font-bold">How We Use Information</span></h2>
          <ul className="list-disc pl-6">
            <li>Provide and improve our services and customer support.</li>
            <li>Process payments and fulfill orders.</li>
            <li>Detect, prevent, and address technical or security issues.</li>
            <li>Communicate updates, promotions, and important notices.</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">3. <span className="font-bold">Cookies and Analytics</span></h2>
          <p>
            We use cookies and similar technologies for authentication, preferences, and analytics. You can control cookies
            through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">4. <span className="font-bold">Data Retention</span></h2>
          <p>
            We retain personal data for as long as necessary to fulfill the purposes outlined in this Policy, comply with
            legal obligations, and resolve disputes.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">5. <span className="font-bold">Your Rights</span></h2>
          <p>
            Subject to applicable law, you may request access, correction, deletion, or portability of your personal data.
            Contact us to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">6. <span className="font-bold">International Transfers</span></h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We take steps to ensure
            appropriate safeguards are in place.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">7. <span className="font-bold">Children’s Privacy</span></h2>
          <p>
            Our services are not directed to children under 13, and we do not knowingly collect data from them.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">8. <span className="font-bold">Changes to This Policy</span></h2>
          <p>
            We may update this Policy periodically. We will indicate the latest effective date below and may notify you of
            significant changes.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-2 font-bold inline-block">9. <span className="font-bold">Contact Us</span></h2>
          <p>
            For questions about privacy, contact{" "}
            <a href="mailto:privacy@example.com" className="underline">
              privacy@example.com
            </a>
            .
          </p>
        </section>
      </div>

      <p className="text-sm mt-12 text-center">Effective date: January 1, 2025</p>
    </main>
  )
}
