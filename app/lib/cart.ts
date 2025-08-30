"use client"

export type CartTier = "License Tier 1" | "License Tier 2" | "License Tier 3" | "License Tier 4"

export type CartItem = {
  slug: string
  name: string
  image?: string
  tier: CartTier
  unitPrice: number
  quantity: number
}

export const CART_KEY = "adople-cart"

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function addToCart(item: CartItem) {
  const items = readCart()
  const idx = items.findIndex((i) => i.slug === item.slug && i.tier === item.tier)
  if (idx >= 0) {
    items[idx].quantity += item.quantity
  } else {
    items.push(item)
  }
  writeCart(items)
}

export function updateQuantity(slug: string, tier: CartTier, qty: number) {
  const items = readCart()
  const idx = items.findIndex((i) => i.slug === slug && i.tier === tier)
  if (idx >= 0) {
    items[idx].quantity = Math.max(1, qty)
    writeCart(items)
  }
}

export function removeFromCart(slug: string, tier: CartTier) {
  const items = readCart().filter((i) => !(i.slug === slug && i.tier === tier))
  writeCart(items)
}

export function clearCart() {
  writeCart([])
}

export function cartCount(): number {
  try {
    return readCart().reduce((n, i) => n + i.quantity, 0)
  } catch {
    return 0
  }
}

export function cartSubtotal(): number {
  try {
    return readCart().reduce((s, i) => s + i.unitPrice * i.quantity, 0)
  } catch {
    return 0
  }
}
