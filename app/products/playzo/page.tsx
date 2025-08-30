"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { addToCart, type CartTier } from "@/app/lib/cart"

const THEME_KEY = "theme"

export default function PlayzoPage() {
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
        "bg-gradient-to-r from-pink-600 to-rose-500",
        theme === "dark" ? "text-white" : "text-white",
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium bg-black/30 rounded-full px-3 py-1 mb-4">
            <span className="opacity-90">ADOPLE AI SELECT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
            Create engaging quizzes and games that convert
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-90 max-w-prose">
            Create quizzes and games to capture leads, drive sales, and enhance learning. 
            Turn passive visitors into engaged customers with interactive content.
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
            title="Playzo overview"
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
      <span>4.7/5 from 45 reviews</span>
    </div>
  )
}

function FeatureAndVideo({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-pretty">
          Interactive content that drives engagement and conversions
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="border rounded-lg p-4">
            <details open>
              <summary className="font-medium cursor-pointer">Quiz builder with templates</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Create engaging quizzes with our drag-and-drop builder and professional templates designed for conversion.
              </p>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">Lead capture automation</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Automatically collect email addresses and contact information</li>
                <li>Integrate with your CRM and email marketing tools</li>
                <li>Segment leads based on quiz results</li>
              </ul>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">Gamification features</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Add points, badges, leaderboards, and rewards to increase engagement and encourage sharing.
              </p>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">Analytics and insights</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Track performance, conversion rates, and user behavior to optimize your interactive content.
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
          src="/streaming-software-interface-dark-purple.png"
          alt="Playzo screenshot"
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
    "Quizzes per month",
    "Lead captures",
    "Quiz templates",
    "Custom branding",
    "Email integrations",
    "Analytics dashboard",
    "Gamification features",
    "Mobile optimization",
    "Social sharing",
    "API access",
    "Priority support",
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
                        slug: "playzo",
                        name: "Playzo",
                        image: "/streaming-software-interface-dark-purple.png",
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
                  <div className="text-xs mt-1 opacity-70">Lifetime access</div>
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
        Deal terms & conditions. Lifetime access. Ability to upgrade between license tiers within 60 days of purchase.
      </p>
    </section>
  )
}

function renderFeatureValue(name: string, t: { price: number; credits: number }) {
  switch (name) {
    case "Quizzes per month":
      return t.credits === 0 ? 10 : "Unlimited"
    case "Lead captures":
      return t.credits === 0 ? 500 : "Unlimited"
    case "Quiz templates":
      return t.credits === 0 ? 20 : t.credits >= 400 ? "Unlimited" : 100
    case "Custom branding":
      return <span className="text-emerald-500">✓</span>
    case "Email integrations":
      return t.credits === 0 ? "Basic" : <span className="text-emerald-500">✓</span>
    case "Analytics dashboard":
      return <span className="text-emerald-500">✓</span>
    case "Gamification features":
      return t.credits >= 200 ? <span className="text-emerald-500">✓</span> : "Limited"
    case "Mobile optimization":
      return <span className="text-emerald-500">✓</span>
    case "Social sharing":
      return <span className="text-emerald-500">✓</span>
    case "API access":
      return t.credits >= 400 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Priority support":
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
        <div className="text-sm">Founded November 8, 2022</div>
        <div className="mt-3 text-sm">Austin, United States</div>
        <div className="mt-3 text-sm">Team size: 10–25</div>
        <div className="mt-3 text-sm">Funding: Series B</div>
        <a className="mt-4 inline-block text-primary underline" href="#">
          playzo.com
        </a>
      </aside>
      <article>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Making learning and lead generation fun</h3>
        <p className="text-muted-foreground">
          Playzo was created to solve the challenge of engaging website visitors and converting them into leads. 
          Our platform combines the power of interactive content with sophisticated lead capture technology, 
          helping businesses create memorable experiences that drive real results. With integrations to Webflow 
          and Zapier, we make it easy to embed quizzes and games into any website.
        </p>
      </article>
    </section>
  )
}

function Testimonials({ theme }: { theme: "dark" | "light" }) {
  const items = [
    { title: "Increased our lead generation by 300%", name: "Jessica Park", date: "Jun 20, 2025" },
    { title: "Quizzes are incredibly engaging", name: "Michael Torres", date: "Jun 16, 2025" },
    { title: "Easy to use and highly effective", name: "Rachel Green", date: "Jun 10, 2025" },
    { title: "Perfect for educational content", name: "Daniel Lee", date: "Jan 28, 2025" },
    { title: "Gamification features are amazing", name: "Sophia Chen", date: "Feb 5, 2025" },
    { title: "Great ROI on our investment", name: "Carlos Rodriguez", date: "Feb 22, 2025" },
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
                ? "The quiz templates are beautiful and our visitors love the interactive experience."
                : "We've seen a dramatic increase in time spent on our website since implementing Playzo."}
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
    { title: "10 Ways to Use Quizzes for Lead Generation", date: "Jul 15, 2025" },
    { title: "NEW FEATURE — Advanced Gamification", date: "Jun 16, 2025" },
    { title: "The Psychology Behind Interactive Content", date: "Apr 25, 2025" },
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
    "How do I create my first quiz?",
    "Can I customize the design?",
    "Which email platforms do you integrate with?",
    "How do I track quiz performance?",
    "Can I embed quizzes on any website?",
    "What types of questions can I ask?",
    "Do you support multiple languages?",
    "How do I export lead data?",
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
                  ? "Choose from our library of templates or start from scratch with our drag-and-drop builder."
                  : "We integrate with Mailchimp, ConvertKit, ActiveCampaign, and most major email platforms."}
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
        <h3 className="text-xl md:text-2xl font-semibold">Turn visitors into engaged customers</h3>
        <p className="mt-2 text-sm opacity-80">Create interactive content that converts.</p>
        <a href="#pricing" className="inline-block mt-5 rounded-full bg-yellow-400 text-black font-semibold px-6 py-2">
          Get Playzo now
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
