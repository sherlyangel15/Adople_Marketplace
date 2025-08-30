export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">Contact us</h1>
        <p className="mt-2 text-muted-foreground">
          Reach out for support, partnership inquiries, or general questions. We typically reply within 1–2 business
          days.
        </p>
      </header>

      <section className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Support channels</h2>
        <ul className="mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            Email:{" "}
            <a className="underline" href="mailto:support@example.com">
              support@example.com
            </a>
          </li>
          <li>Hours: Mon–Fri, 9:00–17:00 (local time)</li>
          <li>Address: 123 Market Street, Suite 100, Remote City</li>
        </ul>
      </section>

      <section aria-labelledby="contact-form" className="mt-8">
        <h2 id="contact-form" className="text-xl font-semibold">
          Send us a message
        </h2>
        <form className="mt-4 rounded-lg border bg-card shadow-sm p-6 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>
            <input id="name" name="name" className="rounded border bg-background px-3 py-2" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input id="email" name="email" type="email" className="rounded border bg-background px-3 py-2" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded border bg-background px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="rounded bg-amber-400 px-4 py-2 font-semibold text-black">
            Send message
          </button>
        </form>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">When will I hear back?</summary>
            <p className="mt-2 text-sm text-muted-foreground">We reply within 1–2 business days in most cases.</p>
          </details>
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">Do you offer phone support?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              We handle support via email to provide detailed, trackable responses. For urgent issues, mention “urgent”
              in your subject line.
            </p>
          </details>
        </div>
      </section>
    </main>
  )
}
