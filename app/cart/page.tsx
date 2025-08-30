"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { products } from "@/lib/products"
import {
  CART_KEY,
  type CartItem,
  type CartTier,
  readCart,
  writeCart,
  updateQuantity,
  removeFromCart,
} from "@/app/lib/cart"
import { Button } from "@/components/ui/button"

const THEME_KEY = "theme"

const TIERS: CartTier[] = ["License Tier 1", "License Tier 2", "License Tier 3", "License Tier 4"]

export default function CartPage() {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as "dark" | "light" | null) || "light"
    setTheme(saved)
    setItems(readCart())
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) setItems(readCart())
      if (e.key === THEME_KEY && e.newValue) setTheme(e.newValue as "dark" | "light")
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.unitPrice * i.quantity, 0), [items])
  const coupon = Math.round(subtotal * 0.1) // 10% first purchase
  const total = Math.max(0, subtotal - coupon)

  const themeRing = theme === "dark" ? "ring-white/10" : "ring-black/10"
  const pageBg = theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-900"

  const setQty = (i: CartItem, q: number) => {
    updateQuantity(i.slug, i.tier, q)
    setItems(readCart())
  }

  const changeTier = (i: CartItem, tier: CartTier) => {
    // simple remap price by tier index
    const base = products.find((p) => p.slug === i.slug)?.price ?? i.unitPrice
    const idx = TIERS.indexOf(tier)
    const newPrice = [base, base + 120, base + 320, base + 440][idx] ?? base
    const newItems = items
      .filter((it) => !(it.slug === i.slug && it.tier === i.tier))
      .concat([{ ...i, tier, unitPrice: newPrice }])
    writeCart(newItems)
    setItems(readCart())
  }

  return (
    <main className={`min-h-screen ${pageBg}`}>
      <header className={`px-4 py-3 border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}>
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/deals" className="text-sm opacity-80 hover:opacity-100">
            ← Back to browse
          </Link>
          <Link href="/" className="ml-auto font-semibold">
            ADOPLE AI
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className={`md:col-span-8 rounded-xl p-4 ring-1 shadow-sm ${themeRing}`}>
          <h1 className="text-2xl font-semibold mb-4">Cart</h1>

          {items.length === 0 ? (
            <div className="py-10 text-sm opacity-80">
              Your cart is empty.{" "}
              <Link href="/deals" className="text-green-500 underline">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((i) => {
                const p = products.find((p) => p.slug === i.slug)
                return (
                  <div
                    key={`${i.slug}-${i.tier}`}
                    className={`grid grid-cols-[1fr,160px,140px,100px] gap-3 items-center border-b pb-3`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p?.image || "/placeholder.svg"}
                        alt={p?.name}
                        className="w-14 h-10 rounded object-cover"
                      />
                      <div>
                        <Link href={`/products/${i.slug}`} className="font-medium hover:underline">
                          {p?.name}
                        </Link>
                        <div className="text-xs opacity-70">{i.tier}</div>
                        <button
                          onClick={() => {
                            removeFromCart(i.slug, i.tier)
                            setItems(readCart())
                          }}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div>
                      <select
                        className={`w-full rounded border px-2 py-1 text-sm ${theme === "dark" ? "bg-gray-900 border-white/10" : "bg-white border-black/10"}`}
                        value={i.tier}
                        onChange={(e) => changeTier(i, e.target.value as CartTier)}
                      >
                        {TIERS.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <button onClick={() => setQty(i, i.quantity - 1)} className="h-8 w-8 rounded border">
                        -
                      </button>
                      <span>{i.quantity}</span>
                      <button onClick={() => setQty(i, i.quantity + 1)} className="h-8 w-8 rounded border">
                        +
                      </button>
                    </div>

                    <div className="text-right font-medium">${(i.unitPrice * i.quantity).toFixed(2)}</div>
                  </div>
                )
              })}

              <div className={`rounded-lg p-3 ring-1 ${themeRing}`}>
                <div className="text-sm">Save 10% on this order with Adople AI Plus!</div>
              </div>
            </div>
          )}
        </div>

        <aside className={`md:col-span-4 rounded-xl p-4 ring-1 space-y-3 shadow-sm ${themeRing}`}>
          <h2 className="font-semibold">Order summary</h2>
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
            <span>Pending</span>
          </div>
          <div className="border-t my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total before tax</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className="block">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Proceed to checkout</Button>
          </Link>
          <Link href="/deals" className="block">
            <Button variant="outline" className="w-full bg-transparent">
              Continue shopping
            </Button>
          </Link>

          <div className={`rounded-lg p-3 text-xs ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
            Important: All transactions processed in USD. Conversions are approximate.
          </div>

          <ul className="text-xs space-y-2 opacity-80">
            <li>60‑day money‑back promise on eligible purchases</li>
            <li>Exceptional customer support</li>
            <li>Directly connect with founders</li>
            <li>We Got Your Back purchase protection</li>
          </ul>
        </aside>
      </section>

      <SiteFooter theme={theme} />
    </main>
  )
}

function SiteFooter({ theme }: { theme: "dark" | "light" }) {
  return (
    <footer
      className={`px-4 py-12 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"} border-t ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">ADOPLE AI</h4>
          <p className="opacity-70">Buy lifetime software deals and grow your business.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="#">Sign up</Link>
            </li>
            <li>
              <Link href="#">Log in</Link>
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
              <Link href="#">Affiliates</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Learn</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="#">How to start an online business</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
