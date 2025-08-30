export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">About ADOPLE AI</h1>
        <p className="mt-2 text-muted-foreground">
          We help entrepreneurs discover world‑class software deals so they can launch faster and grow smarter.
        </p>
      </header>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Our mission</h2>
        <p className="text-sm text-muted-foreground">
          Make powerful software more accessible by curating trustworthy, high‑value deals and sharing practical
          insights on building online businesses.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Our story</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          ADOPLE AI started as a small set of recommendations for founders and creators. Today, we work with partners
          around the world to bring vetted tools directly to your workflow.
        </p>
        <img alt="Team collaborating in an office" className="mt-6 rounded border" src="/team-working-in-office.png" />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Values we live by</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Founder‑first: we optimize for user success, not hype.</li>
          <li>Clarity over noise: honest reviews, clear terms, no surprises.</li>
          <li>Long‑term trust: sustainable deals that stand the test of time.</li>
        </ul>
      </section>

      <section className="mt-10 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Work with us</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Want to feature your product or collaborate on content? We’d love to hear from you.
        </p>
        <a href="/contact" className="mt-4 inline-flex rounded bg-amber-400 px-4 py-2 font-semibold text-black">
          Contact our team
        </a>
      </section>
    </main>
  )
}
