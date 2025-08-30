"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { addToCart, type CartTier } from "@/app/lib/cart"

const THEME_KEY = "theme"

export default function AiTestPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const router = useRouter()
  
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(THEME_KEY)) as "dark" | "light" | null
    if (saved) setTheme(saved)
  }, [])

  return (
    <main className={cn("min-h-screen", theme === "dark" ? "bg-[#0b0e0c] text-white" : "bg-white text-[#0b0e0c]")}>
      <Header theme={theme} />
      <Hero theme={theme} />
      <SectionContainer>
        <TrustBar />
        <FeatureAndVideo theme={theme} />
      </SectionContainer>
      <PricingComparison theme={theme} />
      <StoryBlock theme={theme} />
      <Testimonials theme={theme} />
      <StoriesYoullLove theme={theme} />
      <InsiderKnowledge theme={theme} />
      <BottomCTA theme={theme} />
      <SiteFooter theme={theme} />
    </main>
  )
}

function Header({ theme }: { theme: "dark" | "light" }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70",
        theme === "dark" ? "border-white/10 bg-black/40" : "border-black/10 bg-white/70",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold tracking-wide">
          ADOPLE AI
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/deals" className="hover:text-foreground">
            Deals
          </Link>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link className="rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground" href="/deals">
            Browse all deals
          </Link>
          <Link href="/cart" className="text-sm hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero({ theme }: { theme: "dark" | "light" }) {
  return (
    <section
      className={cn(
        "mx-4 mt-6 rounded-2xl p-6 md:p-10",
        "bg-gradient-to-r from-slate-600 to-gray-500",
        theme === "dark" ? "text-white" : "text-white",
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium bg-black/30 rounded-full px-3 py-1 mb-4">
            <span className="opacity-90">ADOPLE AI SELECT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
            Automate image QA and boost your site's SEO performance
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-90 max-w-prose">
            Automated QA for images to improve your site's SEO, accessibility, and performance. 
            Stop losing traffic due to broken images and poor optimization.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="rounded-full bg-yellow-400 text-black font-semibold px-5 py-2">
              Starting at $69
            </a>
            <Link href="/deals" className="rounded-full bg-white/15 hover:bg-white/25 text-white px-5 py-2">
              View all deals
            </Link>
          </div>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="AiTest.ai overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

function SectionContainer({ children }: { children: React.ReactNode }) {
  return <section className="max-w-7xl mx-auto px-4 py-10">{children}</section>
}

function TrustBar() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <span>ADOPLE AI</span>
      <span className="text-yellow-400">★★★★★</span>
      <span>4.9/5 from 38 reviews</span>
    </div>
  )
}

function FeatureAndVideo({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-pretty">
          Automated image optimization that actually works
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="border rounded-lg p-4">
            <details open>
              <summary className="font-medium cursor-pointer">Automated image QA testing</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Automatically detect broken images, missing alt text, and optimization issues across your entire website.
              </p>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">SEO performance monitoring</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Track Core Web Vitals improvements</li>
                <li>Monitor search ranking changes</li>
                <li>Get alerts for critical issues</li>
              </ul>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">Accessibility compliance</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Ensure your images meet WCAG guidelines with automated alt text generation and compliance checking.
              </p>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">Performance optimization</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Automatically compress and optimize images for faster loading times and better user experience.
              </p>
            </details>
          </li>
        </ul>
      </div>
      <div
        className={cn(
          "rounded-xl p-3 ring-1",
          theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
        )}
      >
        <img
          src="/web-design-tool-interface-blue-gradient.png"
          alt="AiTest.ai screenshot"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

function PricingComparison({ theme }: { theme: "dark" | "light" }) {
  const router = useRouter()
  const tiers = [
    { name: "License Tier 1" as CartTier, price: 69, credits: 0 },
    { name: "License Tier 2" as CartTier, price: 189, credits: 200 },
    { name: "License Tier 3" as CartTier, price: 389, credits: 400 },
    { name: "License Tier 4" as CartTier, price: 589, credits: 800 },
  ]
  const features = [
    "Images tested per month",
    "Websites monitored",
    "Automated QA reports",
    "SEO performance tracking",
    "Accessibility compliance",
    "Image optimization",
    "Alt text generation",
    "Performance monitoring",
    "Core Web Vitals tracking",
    "Automated alerts",
    "API access",
  ]

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Choose the plan that's right for you</h2>
      <div className={cn("rounded-xl overflow-x-auto ring-1", theme === "dark" ? "ring-white/10" : "ring-black/10")}>
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-4"></th>
              {tiers.map((t) => (
                <th key={t.name} className="p-4 text-left">
                  <div className="text-sm">{t.name}</div>
                  <div className="text-2xl font-semibold">${t.price}</div>
                  <button
                    onClick={() => {
                      addToCart({
                        slug: "aitest-ai",
                        name: "AiTest.ai",
                        image: "/web-design-tool-interface-blue-gradient.png",
                        tier: t.name,
                        unitPrice: t.price,
                        quantity: 1,
                      })
                      router.push("/cart")
                    }}
                    className="mt-2 rounded-full bg-yellow-400 text-black font-semibold px-4 py-1.5"
                  >
                    Buy now
                  </button>
                  <div className="text-xs mt-1 opacity-70">One-time payment</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={f} className={i % 2 ? "bg-black/5 dark:bg-white/5" : undefined}>
                <td className="p-3 whitespace-pre-wrap">{f}</td>
                {tiers.map((t, idx) => (
                  <td key={idx} className="p-3">
                    {renderFeatureValue(f, t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Deal terms & conditions. One-time payment. Ability to upgrade between license tiers within 60 days of purchase.
      </p>
    </section>
  )
}

function renderFeatureValue(name: string, t: { price: number; credits: number }) {
  switch (name) {
    case "Images tested per month":
      return t.credits === 0 ? 1000 : "Unlimited"
    case "Websites monitored":
      return t.credits === 0 ? 2 : t.credits >= 400 ? "Unlimited" : 10
    case "Automated QA reports":
      return t.credits === 0 ? 5 : t.credits >= 400 ? "Unlimited" : 50
    case "SEO performance tracking":
      return t.credits === 0 ? 1 : t.credits >= 400 ? "Unlimited" : 5
    case "Accessibility compliance":
      return <span className="text-emerald-500">✓</span>
    case "Image optimization":
      return <span className="text-emerald-500">✓</span>
    case "Alt text generation":
      return t.credits === 0 ? "Limited" : <span className="text-emerald-500">✓</span>
    case "Performance monitoring":
      return <span className="text-emerald-500">✓</span>
    case "Core Web Vitals tracking":
      return t.credits >= 200 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Automated alerts":
      return t.credits >= 200 ? <span className="text-emerald-500">✓</span> : "✗"
    case "API access":
      return t.credits >= 400 ? <span className="text-emerald-500">✓</span> : "✗"
    default:
      return <span className="text-emerald-500">✓</span>
  }
}

function StoryBlock({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8">
      <aside
        className={cn(
          "rounded-xl p-4 ring-1",
          theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
        )}
      >
        <div className="text-sm">Founded March 15, 2023</div>
        <div className="mt-3 text-sm">San Francisco, United States</div>
        <div className="mt-3 text-sm">Team size: 5–15</div>
        <div className="mt-3 text-sm">Funding: Series A</div>
        <a className="mt-4 inline-block text-primary underline" href="#">
          aitest.ai
        </a>
      </aside>
      <article>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Revolutionizing image QA with AI</h3>
        <p className="text-muted-foreground">
          AiTest.ai was born from the frustration of losing traffic due to broken images and poor optimization. 
          Our AI-powered platform automatically detects, fixes, and optimizes images across your entire website, 
          ensuring better SEO performance and user experience. With integrations to OpenAI and Slack, 
          we provide real-time monitoring and automated fixes that actually work.
        </p>
      </article>
    </section>
  )
}

function Testimonials({ theme }: { theme: "dark" | "light" }) {
  const items = [
    { title: "Fixed our image issues overnight", name: "Sarah Chen", date: "Jun 15, 2025" },
    { title: "SEO rankings improved significantly", name: "Marcus Rodriguez", date: "Jun 12, 2025" },
    { title: "Automated QA saves hours every week", name: "Emily Watson", date: "Jun 8, 2025" },
    { title: "Accessibility compliance made easy", name: "David Kim", date: "Jan 25, 2025" },
    { title: "Core Web Vitals optimization", name: "Lisa Thompson", date: "Feb 3, 2025" },
    { title: "Real-time monitoring is game-changing", name: "Alex Johnson", date: "Feb 18, 2025" },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-6">See what customers are saying</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl p-4 ring-1",
              theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
            )}
          >
            <div className="text-yellow-400">★★★★★</div>
            <h4 className="mt-2 font-medium">{t.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              {i % 2
                ? "The automated QA system caught issues we never would have found manually."
                : "Our Core Web Vitals improved by 40% within the first month of using AiTest.ai."}
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              {t.date} — {t.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StoriesYoullLove({ theme }: { theme: "dark" | "light" }) {
  const items = [
    { title: "How to Optimize Images for Better SEO Performance", date: "Jul 12, 2025" },
    { title: "NEW FEATURE — Automated Alt Text Generation", date: "Jun 14, 2025" },
    { title: "Core Web Vitals: The Complete Guide", date: "Apr 28, 2025" },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold">Stories you'll love</h3>
      <div className="mt-5 grid md:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl p-4 ring-1",
              theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
            )}
          >
            <div className="aspect-video rounded-lg bg-black/20 dark:bg-white/10 mb-3" />
            <h4 className="font-medium">{s.title}</h4>
            <div className="text-xs text-muted-foreground mt-1">{s.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function InsiderKnowledge({ theme }: { theme: "dark" | "light" }) {
  const faqs = [
    "How does the automated QA system work?",
    "Which image formats are supported?",
    "Can I integrate with my existing workflow?",
    "How accurate is the alt text generation?",
    "What SEO metrics do you track?",
    "Can I customize the QA rules?",
    "How often are reports generated?",
    "Do you support bulk image processing?",
  ]
  return (
    <section id="faq" className="px-4 py-12">
      <div
        className={cn("max-w-7xl mx-auto rounded-2xl p-6 md:p-10", theme === "dark" ? "bg-[#0f1311]" : "bg-neutral-50")}
      >
        <h3 className="text-2xl font-semibold mb-4">Insider Knowledge</h3>
        <div className="flex items-center gap-2">
          <input
            placeholder="Search"
            className={cn(
              "w-full rounded-full px-4 py-2 ring-1 outline-none",
              theme === "dark"
                ? "bg-black/30 ring-white/10 placeholder:text-white/60"
                : "bg-white ring-black/10 placeholder:text-black/50",
            )}
          />
          <button className={cn("px-4 py-2 rounded-full text-sm", theme === "dark" ? "bg-white/10" : "bg-black/10")}>
            Search
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm">
          <span className="rounded-md px-3 py-1 font-medium ring-1 ring-black/10 dark:ring-white/10">FAQs</span>
          <span className="text-muted-foreground">Questions</span>
          <span className="text-muted-foreground">Reviews</span>
          <span className="text-muted-foreground">News & Updates</span>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((q, i) => (
            <details
              key={i}
              className={cn(
                "rounded-lg p-4 ring-1",
                theme === "dark" ? "ring-white/10 bg-black/30" : "ring-black/10 bg-white",
              )}
            >
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                {i % 2
                  ? "Our AI scans your website for image issues, generates missing alt text, and optimizes performance automatically."
                  : "We support JPG, PNG, WebP, SVG, and GIF formats with automatic conversion for better performance."}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className={cn("mt-6 py-14 text-center", theme === "dark" ? "bg-[#0a0d0b]" : "bg-neutral-950 text-white")}>
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold">Stop losing traffic to broken images</h3>
        <p className="mt-2 text-sm opacity-80">Automate your image QA and boost SEO performance.</p>
        <a href="#pricing" className="inline-block mt-5 rounded-full bg-yellow-400 text-black font-semibold px-6 py-2">
          Get AiTest.ai now
        </a>
      </div>
    </section>
  )
}

function SiteFooter({ theme }: { theme: "dark" | "light" }) {
  return (
    <footer
      className={cn(
        "px-4 py-12 border-t",
        theme === "dark" ? "bg-[#0b0e0c] border-white/10" : "bg-gray-100 border-black/10",
      )}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">ADOPLE AI</h4>
          <p className="opacity-70">High‑quality lifetime software deals.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              <Link href="/redeem">Redeem</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/affiliates">Affiliates</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal & Learn</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/learn/start-business">Start an online business</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
