export default function AffiliatesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">Affiliate program</h1>
        <p className="mt-2 text-muted-foreground">
          Promote ADOPLE AI deals and earn commissions for every qualified purchase you drive.
        </p>
      </header>

      <section className="mt-8 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-muted-foreground space-y-1">
          <li>Apply to join the program—approval typically within 3 business days.</li>
          <li>Get your unique tracking links and brand assets.</li>
          <li>Share deals with your audience via blog, email, or social.</li>
          <li>Earn commissions on qualified purchases during the cookie window.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Commissions and payouts</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Competitive baseline commission with performance boosts.</li>
          <li>30–60 day attribution window depending on partner product.</li>
          <li>Payouts monthly when you reach the minimum threshold.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Eligibility and compliance</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>No spam, misleading claims, or trademark bidding.</li>
          <li>Always disclose affiliate relationships per local regulations.</li>
          <li>High‑quality content channels are preferred.</li>
        </ul>
      </section>

      <section className="mt-10 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Apply now</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We welcome creators, educators, agencies, and review sites. Tell us about your audience and content strategy.
        </p>
        <a href="/contact" className="mt-4 inline-flex rounded bg-amber-400 px-4 py-2 font-semibold text-black">
          Get in touch
        </a>
      </section>
    </main>
  )
}
