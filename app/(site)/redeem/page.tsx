export default function RedeemPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">Redeem your code</h1>
        <p className="mt-2 text-muted-foreground">
          Enter your redemption code to claim your ADOPLE AI deal. If you need help, follow the steps below.
        </p>
      </header>

      <section className="mt-8">
        <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
          <li>Locate your redemption code from your purchase email or account.</li>
          <li>Enter the code exactly as shown, including dashes if present.</li>
          <li>Click Redeem to apply the deal to your account.</li>
          <li>Follow any on‑screen steps to activate with the partner app.</li>
        </ol>
      </section>

      <section aria-labelledby="redeem-form" className="mt-8">
        <h2 id="redeem-form" className="sr-only">
          Redemption form
        </h2>
        <form className="rounded-lg border bg-card shadow-sm p-6 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="code" className="text-sm font-medium">
              Redemption code
            </label>
            <input
              id="code"
              name="code"
              inputMode="text"
              autoComplete="one-time-code"
              className="rounded border bg-background px-3 py-2"
              placeholder="e.g., ADO-PL3-2025-XYZ"
              aria-describedby="code-help"
              required
            />
            <p id="code-help" className="text-xs text-muted-foreground">
              Codes are case-insensitive. Having issues? See FAQ below.
            </p>
          </div>
          <button
            type="submit"
            className="rounded bg-amber-400 px-4 py-2 font-semibold text-black"
            aria-label="Redeem code"
          >
            Redeem
          </button>
        </form>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Redemption terms</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Codes are single‑use and tied to the purchasing account.</li>
          <li>Unless otherwise stated, codes expire 12 months after purchase.</li>
          <li>Some deals require creating an account with the partner product.</li>
          <li>Abuse, resale, or sharing of codes may void eligibility.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 grid gap-3">
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">My code isn’t working—what should I check?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Verify there are no leading/trailing spaces, try a different browser, and confirm you’re logged into the
              correct account. If the issue persists, contact support with your order ID.
            </p>
          </details>
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">Where can I find my code?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Your code appears on your order confirmation page and in the confirmation email. You can also check your
              account’s Purchases section.
            </p>
          </details>
          <details className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">Can I transfer a redeemed deal?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Most deals are non‑transferable once redeemed. Some partners may allow changing the linked email—check the
              specific deal terms.
            </p>
          </details>
        </div>
      </section>
    </main>
  )
}
