export default function CreatorEconomyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">What is the creator economy?</h1>
        <p className="mt-2 text-muted-foreground">
          A guide to the tools, platforms, and business models powering modern independent creators.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Definition</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The creator economy encompasses individuals building audiences online and monetizing through products,
          services, memberships, sponsorships, and more—often with lightweight tools and platforms.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Pillars</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Audience: consistent, valuable content builds trust.</li>
          <li>Distribution: email, social, communities, and SEO.</li>
          <li>Monetization: diversify revenue to reduce risk.</li>
          <li>Operations: automate and productize where possible.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Monetization models</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Digital products, courses, and templates.</li>
          <li>Memberships, coaching, and services.</li>
          <li>Affiliate revenue and sponsorships.</li>
          <li>Physical products and events.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tools to know</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          From design and editing to commerce and analytics—choose tools that match your format and workflow. Start
          simple, then upgrade as you grow.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Getting started</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-muted-foreground space-y-1">
          <li>Pick a niche and publishing cadence you can sustain.</li>
          <li>Create a simple landing page and email capture.</li>
          <li>Publish consistently for 8–12 weeks before optimizing.</li>
          <li>Identify your first productized offer.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">How big does my audience need to be?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Even small audiences can convert if your offer is specific and valuable. Focus on quality over vanity
              metrics.
            </p>
          </details>
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">What should I sell first?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Start with a low‑scope, high‑value product like a checklist, template, or 60‑minute workshop.
            </p>
          </details>
        </div>
      </section>
    </main>
  )
}
