"use client"

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Safe default to light if no stored preference
  const theme = typeof window === "undefined" ? "light" : (localStorage.getItem("theme") as "light" | "dark") || "light"

  const searchParams = useSearchParams()

  return (
    <html lang="en" data-theme={theme} className="antialiased">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
