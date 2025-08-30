export default function StartBusinessPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">How to start an online business</h1>
        <p className="mt-2 text-muted-foreground">
          A practical, step‑by‑step guide to validate your idea, launch quickly, and iterate toward product‑market fit.
        </p>
      </header>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Step 1 — Validate your idea</h2>
        <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Interview 5–10 potential customers to understand pains and jobs‑to‑be‑done.</li>
          <li>Draft a simple value proposition and run a landing page smoke test.</li>
          <li>Measure interest via signups, replies, or preorders—not likes.</li>
        </ul>
      </section>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Step 2 — Choose a model</h2>
        <p className="text-sm text-muted-foreground">
          Pick a business model aligned with your capabilities: services, productized services, subscriptions, or
          digital products.
        </p>
      </section>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Step 3 — Brand and web presence</h2>
        <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Name, simple brand kit, and clear messaging.</li>
          <li>Launch a fast, focused landing page with a lead form and basic analytics.</li>
          <li>Set up an email list and welcome sequence.</li>
        </ul>
      </section>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Step 4 — Go to market</h2>
        <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Pick 1–2 channels: SEO, partnerships, social, or communities.</li>
          <li>Publish useful content and collect feedback every week.</li>
          <li>Refine positioning and offers based on real conversations.</li>
        </ul>
        <img
          alt="Getting started with an online business"
          src="/start-an-online-business.png"
          className="rounded border"
        />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Launch checklist</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Clear problem statement and ICP.</li>
          <li>Working checkout or intake form.</li>
          <li>Onboarding and first value delivered within 24–48 hours.</li>
          <li>Simple metrics: signups, activations, revenue, and churn.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">How much budget do I need?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Many founders launch with a few hundred dollars using no‑code tools and preorders. Focus on validation
              before scaling spend.
            </p>
          </details>
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">When should I hire?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Hire when you have repeatable revenue and a clear bottleneck that is not your unique advantage.
            </p>
          </details>
        </div>
      </section>
    </main>
  )
}
