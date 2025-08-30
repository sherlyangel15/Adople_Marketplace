"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, ChevronDown, Sun, Moon, ShoppingCart, Bell } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { products as allProducts, type Product } from "@/lib/products"
import { useRouter, useSearchParams } from "next/navigation"

export default function DealsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPlanType, setPlanType] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [priceRange, setPriceRange] = useState("All")
  const [sortBy, setSortBy] = useState("Recommended")

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
    setQuery(searchParams.get("q") ?? "")
    setSelectedCategory(searchParams.get("category") ?? "All")
    setPlanType(searchParams.get("plan") ?? "All")
    setSelectedStatus(searchParams.get("status") ?? "All")
    setPriceRange(searchParams.get("price") ?? "All")
    setSortBy(searchParams.get("sort") ?? "Recommended")
  }, [searchParams])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const updateParam = (key: string, value: string) => {
    const p = new URLSearchParams(Array.from(searchParams.entries()))
    if (value === "All" || value === "" || value == null) p.delete(key)
    else p.set(key, value)
    router.push(`/deals?${p.toString()}`)
  }

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    cardBg: isDarkMode ? "bg-gray-800" : "bg-white",
    cardBorder: isDarkMode ? "border-gray-700" : "border-gray-200",
    headerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    sidebarBg: isDarkMode ? "bg-gray-800" : "bg-gray-50",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    inputBg: isDarkMode ? "bg-gray-700" : "bg-white",
    inputBorder: isDarkMode ? "border-gray-600" : "border-gray-300",
    footerBg: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    footerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    hoverBg: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100",
  }

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  const filtered: Product[] = useMemo(() => {
    let list = allProducts.slice()

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    if (selectedPlanType !== "All") {
      list = list.filter((p) => (p.plan ?? "").toLowerCase() === selectedPlanType.toLowerCase())
    }
    if (selectedStatus !== "All") {
      list = list.filter((p) => (p.status ?? "").toLowerCase() === selectedStatus.toLowerCase())
    }
    if (priceRange !== "All") {
      list = list.filter((p) => (p.priceRange ?? "") === priceRange)
    }
    const q = (query || "").trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q) ||
          (p.integrations || []).some((i) => i.toLowerCase().includes(q)),
      )
    }

    switch (sortBy) {
      case "Price: Low to High":
        list.sort((a, b) => a.price - b.price)
        break
      case "Price: High to Low":
        list.sort((a, b) => b.price - a.price)
        break
      case "Rating":
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCategory, selectedPlanType, selectedStatus, priceRange, query, sortBy])

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Header */}
      <header className={`border-b ${themeClasses.headerBorder} px-4 py-3`}>
        <div className="max-w-7xl mx-auto">
          {/* Top banner */}
          <div className="bg-blue-600 text-white text-center py-2 px-4 rounded mb-4 text-sm">
            Welcome! 10% off is waiting in your cart—sign up. ↗
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold hover:text-green-400 transition-colors">
                ADOPLE AI
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search products"
                    className={`pl-10 ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text}`}
                    value={query}
                    onChange={(e) => updateParam("q", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${themeClasses.textSecondary}`}>Sell on Adople AI</span>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-black" size="sm" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
              <Bell className="w-5 h-5" />
              <Link href="/cart" className="hover:text-green-400" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 mt-4">
            <Link href="/deals?category=Software" className="hover:text-green-400">
              Software
            </Link>
            <Link href="/deals?category=Courses" className="hover:text-green-400">
              Courses & more
            </Link>
            <Link href="/deals?status=new" className="hover:text-green-400">
              New arrivals
            </Link>
            <Link href="/deals?status=ending" className="hover:text-green-400">
              Ending soon
            </Link>
            <div className="ml-auto">
              <Button className="bg-green-500 hover:bg-green-600 text-black text-sm">
                🎯 AskAdople AI and get 10% off
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${themeClasses.sidebarBg} w-64 p-6 rounded-lg h-fit`}>
            <div className="space-y-6">
              {/* Shop by */}
              <div>
                <h3 className="font-semibold mb-3">Shop by</h3>
                <ul className="space-y-2 text-sm">
                  {["Software", "Courses", "Templates", "Creative resources"].map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => {
                          setSelectedCategory(c)
                          updateParam("category", c)
                        }}
                        className={`${themeClasses.textSecondary} ${themeClasses.hoverBg} block w-full text-left p-1 rounded`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ADOPLE AI SELECT */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-600 text-white">ADOPLE AI SELECT</Badge>
                  <span className="text-sm">?</span>
                </div>
              </div>

              {/* Integrations */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Integrations</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="space-y-2 text-sm">
                  {["WordPress", "Webflow", "Zapier", "OpenAI", "Slack", "Google Calendar"].map((i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={query.toLowerCase().includes(i.toLowerCase())}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? `${query} ${i}`.trim()
                            : query
                                .split(" ")
                                .filter((t) => t.toLowerCase() !== i.toLowerCase())
                                .join(" ")
                          setQuery(next)
                          updateParam("q", next)
                        }}
                      />
                      <span className={themeClasses.textSecondary}>{i}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Plan type */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Plan type</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <select
                  className={`w-full rounded border px-2 py-1 ${themeClasses.inputBg} ${themeClasses.inputBorder}`}
                  value={selectedPlanType}
                  onChange={(e) => {
                    setPlanType(e.target.value)
                    updateParam("plan", e.target.value)
                  }}
                >
                  {["All", "Lifetime", "Subscription", "One-time"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Status</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <select
                  className={`w-full rounded border px-2 py-1 ${themeClasses.inputBg} ${themeClasses.inputBorder}`}
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value)
                    updateParam("status", e.target.value)
                  }}
                >
                  {["All", "new", "hot", "ending"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Price range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Price range</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <select
                  className={`w-full rounded border px-2 py-1 ${themeClasses.inputBg} ${themeClasses.inputBorder}`}
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(e.target.value)
                    updateParam("price", e.target.value)
                  }}
                >
                  <option>All</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 – $100</option>
                  <option value="100-plus">$100+</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Browse products</h1>
                  <p className={`${themeClasses.textSecondary}`}>{filtered.length} products</p>
                </div>
                {/* inline search updates URL and filter */}
                <div className="hidden md:flex items-center ml-6">
                  <Input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      updateParam("q", e.target.value)
                    }}
                    placeholder="Search"
                    className={`min-w-[240px] ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text}`}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Sort by:</span>
                <select
                  className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} px-3 py-1 rounded border`}
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value)
                    updateParam("sort", e.target.value)
                  }}
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => {
                const slug = product.slug
                return (
                  <Card
                    key={slug}
                    className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:shadow-lg transition-shadow`}
                  >
                    <CardHeader className="p-0">
                      <Link href={`/products/${slug}`} className="block">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                          {product.badge ?? "ADOPLE AI SELECT"}
                        </Badge>
                      </div>
                      <CardTitle className={`${themeClasses.text} mb-1 text-lg`}>
                        <Link href={`/products/${slug}`} className="hover:underline">
                          {product.name}
                        </Link>
                      </CardTitle>
                      <p className={`text-sm ${themeClasses.textMuted} mb-2`}>in {product.type}</p>
                      <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3 line-clamp-2`}>
                        {product.short}
                      </CardDescription>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className={`text-sm ${themeClasses.textMuted} ml-1`}>
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="w-full">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className={`text-2xl font-bold ${themeClasses.text}`}>${product.price}</span>
                          {product.compareAt && (
                            <span className={`text-sm ${themeClasses.textMuted} line-through`}>
                              ${product.compareAt}
                            </span>
                          )}
                        </div>
                        <Link href={`/products/${slug}`} className="block">
                          <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                            Get lifetime deal
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className={`px-4 py-12 ${themeClasses.footerBg} border-t ${themeClasses.footerBorder} mt-16`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ADOPLE AI</h4>
              <p className={`${themeClasses.textMuted} text-sm mb-4`}>
                Part of the Sumo family since 2010. Adople AI is the #1 digital marketplace to buy software, courses,
                and tools to grow your business.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Account</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <Link href="/signup" className={`hover:${themeClasses.text}`}>
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={`hover:${themeClasses.text}`}>
                    Log in
                  </Link>
                </li>
                <li>
                  <Link href="/redeem" className={`hover:${themeClasses.text}`}>
                    Redeem
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={`hover:${themeClasses.text}`}>
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={`hover:${themeClasses.text}`}>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Adople AI</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <Link href="/about" className={`hover:${themeClasses.text}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`hover:${themeClasses.text}`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className={`hover:${themeClasses.text}`}>
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Learn</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <Link href="/learn/start-business" className={`hover:${themeClasses.text}`}>
                    How to start an online business
                  </Link>
                </li>
                <li>
                  <Link href="/learn/creator-economy" className={`hover:${themeClasses.text}`}>
                    What is the creator economy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`border-t ${themeClasses.footerBorder} pt-8 flex flex-col md:flex-row justify-between items-center`}
          >
            <p className={`${themeClasses.textMuted} text-sm`}>© 2025 Adople AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
