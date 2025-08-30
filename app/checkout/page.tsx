"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { readCart, CART_KEY } from "@/app/lib/cart"

const THEME_KEY = "theme"

export default function CheckoutPage() {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setTheme((localStorage.getItem(THEME_KEY) as "dark" | "light") || "light")
    const items = readCart()
    setSubtotal(items.reduce((s, i) => s + i.unitPrice * i.quantity, 0))
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) {
        const items = readCart()
        setSubtotal(items.reduce((s, it) => s + it.unitPrice * it.quantity, 0))
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const coupon = Math.round(subtotal * 0.1)
  const total = Math.max(0, subtotal - coupon)

  const pageBg = theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-900"
  const ring = theme === "dark" ? "ring-white/10" : "ring-black/10"
  const border = theme === "dark" ? "border-white/10" : "border-black/10"

  return (
    <main className={`min-h-screen ${pageBg}`}>
      <header className={`px-4 py-3 border-b ${border}`}>
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/cart" className="text-sm opacity-80 hover:opacity-100">
            ← Return to cart
          </Link>
          <Link href="/" className="ml-auto font-semibold">
            ADOPLE AI
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className={`md:col-span-8 rounded-xl ring-1 ${ring} p-4 shadow-sm`}>
          <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

          <div className={`rounded-lg ring-1 ${ring} p-4 mb-4`}>
            <h2 className="font-medium mb-1">Create an account</h2>
            <p className="text-sm opacity-80 mb-3">
              You’re oh‑so‑close to saving on software — create an account so we can email you the goods!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline">Continue with Google</Button>
              <Button variant="outline">Continue with Facebook</Button>
            </div>

            <div className="my-4 text-center text-xs opacity-60">OR</div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Email" />
              <div />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Password" type="password" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Confirm password" type="password" />
            </form>

            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">
              Continue to billing information
            </Button>
          </div>

          <details className={`mb-4 rounded-lg ring-1 ${ring} p-4`} open>
            <summary className="font-medium cursor-pointer">Billing information</summary>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Full name" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Company (optional)" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Address line 1" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Address line 2" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="City" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Postal code" />
            </div>
          </details>

          <details className={`rounded-lg ring-1 ${ring} p-4`}>
            <summary className="font-medium cursor-pointer">Payment method</summary>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Cardholder name" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Card number" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="Expiry" />
              <input className={`rounded border px-3 py-2 ${border}`} placeholder="CVC" />
            </div>
          </details>
        </div>

        <aside className={`md:col-span-4 rounded-xl ring-1 ${ring} p-4 h-fit sticky top-4 shadow-sm`}>
          <h2 className="font-semibold mb-2">Order summary</h2>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-500">
            <span>Coupon savings</span>
            <span>- ${coupon.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Sales tax</span>
            <span>$0.00</span>
          </div>
          <div className="border-t my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button disabled className="mt-3 w-full">
            Place order now
          </Button>

          <div className={`rounded-lg p-3 text-xs mt-3 ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
            Important: All transactions are processed in USD. Currency conversions are approximate.
          </div>

          <ul className="text-xs space-y-2 opacity-80 mt-3">
            <li>60‑day money‑back promise</li>
            <li>Exceptional customer support</li>
            <li>Directly connect with founders</li>
            <li>Purchase protection on Select deals</li>
          </ul>
        </aside>
      </section>

      <footer className={`px-4 py-12 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"} border-t ${border}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">ADOPLE AI</h4>
            <p className="opacity-70">High‑quality lifetime software deals.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Account</h4>
            <ul className="space-y-1 opacity-80">
              <li>
                <Link href="#">Join Plus</Link>
              </li>
              <li>
                <Link href="#">Help center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 opacity-80">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Learn</h4>
            <ul className="space-y-1 opacity-80">
              <li>
                <Link href="#">What is the creator economy?</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
