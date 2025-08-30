"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Shield, RotateCcw, CheckCircle, Play, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AppSumoHomepage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    setIsDarkMode(savedTheme ? savedTheme === "dark" : false)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    cardBg: isDarkMode ? "bg-gray-800" : "bg-white",
    cardBorder: isDarkMode ? "border-gray-700" : "border-gray-200",
    headerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    sectionBg: isDarkMode ? "bg-gray-800" : "bg-gray-50",
    gradientBg: isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-gray-50 to-gray-100",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    inputBg: isDarkMode ? "bg-gray-700" : "bg-white",
    inputBorder: isDarkMode ? "border-gray-600" : "border-gray-300",
    footerBg: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    footerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Header */}
      <header className={`border-b ${themeClasses.headerBorder} px-4 py-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              ADOPLE AI
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/deals?category=Software" className="hover:text-green-400">
                Software
              </Link>
              <Link href="/deals?category=Courses" className="hover:text-green-400">
                Courses & tools
              </Link>
              <Link href="/deals?status=new" className="hover:text-green-400">
                New arrivals
              </Link>
              <Link href="/deals?status=ending" className="hover:text-green-400">
                Ending soon
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-black" size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`px-4 py-16 ${themeClasses.gradientBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Unlock exclusive AI Agent deals and enjoy <span className="text-green-400">lifetime access</span>
              </h1>
              <p className={`text-xl ${themeClasses.textSecondary} mb-8`}>
                Get lifetime access to top agents and tools at unbeatable prices!
              </p>
              <Link href="/deals">
                <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 text-lg">
                  Browse all exclusive deals
                </Button>
              </Link>
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className={`text-sm ${themeClasses.textSecondary}`}>4.5 rating on Google</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/software-dashboard-interface.png" alt="Software 1" className="rounded-lg" />
              <img src="/analytics-dashboard.png" alt="Software 2" className="rounded-lg" />
              <img src="/project-management-tool.png" alt="Software 3" className="rounded-lg" />
              <img src="/design-software-interface.png" alt="Software 4" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={`px-4 py-8 ${themeClasses.sectionBg}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sign up &amp; Stay Updated with our Latest agents Updates!</h3>
            <p className={themeClasses.textSecondary}>
              Be the first to discover our latest products and special deals!
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email address"
              className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} placeholder-gray-400 min-w-[300px]`}
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Hot Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">What's hot</h2>
            <Link href="/deals" className="text-green-400 hover:underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 - Grigora */}
            <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder}`}>
              <CardHeader className="p-0">
                <Link href="/products/grigora" className="block">
                  <img
                    src="/web-builder-interface-purple-gradient.png"
                    alt="Adople Voice Agent"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    ADOPLE AI SELECT
                  </Badge>
                </div>
                <CardTitle className={themeClasses.text + " mb-2"}>Adople Voice Agent</CardTitle>
                <p className={`text-sm ${themeClasses.textMuted} mb-2`}>AI Agents</p>
                <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3`}>
                 Use it to transforms static documents into dynamic conversations—upload PDFs or other files, ask questions about their content, and get instant, accurate answers powered by intelligent document parsing. Dive into to explore more.
                </CardDescription>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className={`text-sm ${themeClasses.textMuted} ml-1`}>5.0 (42 reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-2xl font-bold ${themeClasses.text}`}>$59</span>
                    <span className={`text-sm ${themeClasses.textMuted} line-through`}>$299</span>
                  </div>
                  <Link href="/products/grigora" className="block">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Get lifetime deal</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            {/* Product Card 2 - Jodian */}
            <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder}`}>
              <CardHeader className="p-0">
                <Link href="/products/jodian" className="block">
                  <img
                    src="/ai-platform-interface-blue-gradient.png"
                    alt="Jodian"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    ADOPLE AI SELECT
                  </Badge>
                </div>
                <CardTitle className={themeClasses.text + " mb-2"}>SEC Analysis</CardTitle>
                <p className={`text-sm ${themeClasses.textMuted} mb-2`}>AI Agents</p>
                <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3`}>
                An AI-driven tool that evaluates the financial status of businesses based on key metrics, trends, and risk indicators. Instantly categorize companies as Stable, Needs Attention, or High Risk to support smarter investment and partnership decisions.                </CardDescription>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className={`text-sm ${themeClasses.textMuted} ml-1`}>4.9 (73 reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-2xl font-bold ${themeClasses.text}`}>$69</span>
                    <span className={`text-sm ${themeClasses.textMuted} line-through`}>$516</span>
                  </div>
                  <Link href="/products/jodian" className="block">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Get lifetime deal</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            {/* Product Card 3 - Restreamer */}
            <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder}`}>
              <CardHeader className="p-0">
                <Link href="/products/restreamer" className="block">
                  <img
                    src="/streaming-software-interface-dark-purple.png"
                    alt="Restreamer"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    ADOPLE AI SELECT
                  </Badge>
                </div>
                <CardTitle className={themeClasses.text + " mb-2"}>Resume Analyzer</CardTitle>
                <p className={`text-sm ${themeClasses.textMuted} mb-2`}>AI Agents</p>
                <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3`}>
                This tool evaluates resumes against job descriptions, scoring candidates by relevance and fit. Recruiters can instantly sort applicants into categories like Selected, Next Round, or Not Proceeding, streamlining decision-making with speed and clarity.                </CardDescription>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className={`text-sm ${themeClasses.textMuted} ml-1`}>4.8 (156 reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-2xl font-bold ${themeClasses.text}`}>$39</span>
                    <span className={`text-sm ${themeClasses.textMuted} line-through`}>$468</span>
                  </div>
                  <Link href="/products/restreamer" className="block">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Get lifetime deal</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            {/* Product Card 4 - Fluent 3D */}
            {/* <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder}`}>
              <CardHeader className="p-0">
                <Link href="/products/fluent-3d" className="block">
                  <img
                    src="/web-design-tool-interface-blue-gradient.png"
                    alt="Fluent 3D"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    ADOPLE AI SELECT
                  </Badge>
                </div>
                <CardTitle className={themeClasses.text + " mb-2"}>Fluent 3D</CardTitle>
                <p className={`text-sm ${themeClasses.textMuted} mb-2`}>Web builders</p>
                <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3`}>
                  Build websites fast with drag-and-drop components, building blocks, templates, and more!
                </CardDescription>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className={`text-sm ${themeClasses.textMuted} ml-1`}>4.7 (89 reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-2xl font-bold ${themeClasses.text}`}>$49</span>
                    <span className={`text-sm ${themeClasses.textMuted} line-through`}>$588</span>
                  </div>
                  <Link href="/products/fluent-3d" className="block">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Get lifetime deal</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className={`px-4 py-12 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Handpicked, high-quality deals</h3>
              <p className={themeClasses.textSecondary}>The newest agents at insane prices</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">60-day money back promise</h3>
              <p className={themeClasses.textSecondary}>Easy refunds within 60 days of purchase</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">We Got Your Back guarantee</h3>
              <p className={themeClasses.textSecondary}>Purchase protection on all Select tools. Learn more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Quote */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">adople-lings</h2>
          <blockquote className={`text-xl italic ${themeClasses.textSecondary}`}>
            "Adople AI offers deals on high-tech business agent that can make your life much easier"
          </blockquote>
        </div>
      </section>

      {/* Product Showcase Sections */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <img
                src="/software-collection-grid-dark-theme.png"
                alt="Software Collection"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold mb-2 text-white">What's hot</h3>
                <p className="text-gray-300 mb-4">Trending deals you don't want to miss</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/deals">Shop Now →</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ending-soon-deals-software-interfaces.png"
                alt="Ending Soon"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold mb-2 text-white">Ending soon</h3>
                <p className="text-gray-300 mb-4">Grab these deals before they leave for good</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/deals">Shop Now →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="/fresh-select-software-deals-colorful.png"
                alt="Fresh Select"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold mb-2 text-white">Fresh Select</h3>
                <p className="text-gray-300 mb-4">Every Monday, the latest Select deals launch right here</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/deals">Shop Now →</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/customer-favorites-software-tools.png"
                alt="Customer Favorites"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold mb-2 text-white">Customer favorites</h3>
                <p className="text-gray-300 mb-4">4.5+ star rating by adople-lings</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/deals">Shop Now →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AskSumo Section */}
      {/*<section className="px-4 py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">AskAdople AI PLUS </h2>
            <h3 className="text-2xl mb-4 text-white">It feels good to be part of the club!</h3>
            <p className="text-lg mb-6 text-white">
              You'll get 10% off every purchase, VIP support, extended access to our best deals, membership to The
              Sauce, and more!
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 text-lg mb-4">
              Join Adople AI Plus
            </Button>
            <p className="text-sm text-white">Starting at $8.25/month, billed annually</p>
          </div>
        </div>
      </section>*/}

      {/* Stories Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Stories you'll love</h2>
          <p className={`text-center ${themeClasses.textSecondary} mb-12`}>
            Discover how entrepreneurs and creators are using Adople AI to level up their businesses
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "How I made $1M+ are exploding", duration: "8:42", views: "100K in 30 Days" },
              { title: "All from boring businesses", duration: "12:34", views: "SIM a Year From Boring Businesses" },
              {
                title: "He Makes $1M+/year with No-Code",
                duration: "15:22",
                views: "He Makes $1M+/year with No-Code (Automations)",
              },
              {
                title: "How To Start A Business in 24 Hours",
                duration: "9:18",
                views: "How To Start A Business in 24 Hours - Noah Kagan",
              },
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative">
                  <img
                    src={`/business-success-story-thumbnail-.png?height=200&width=300&query=business success story thumbnail ${index + 1}`}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className={`${themeClasses.text} font-semibold mt-3 line-clamp-2`}>{video.title}</h4>
                <p className={`${themeClasses.textMuted} text-sm mt-1`}>{video.views}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter */}
      <section className={`px-4 py-12 ${themeClasses.sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sign up &amp; get your first order!</h3>
          <p className={`${themeClasses.textSecondary} mb-6`}>
            {"Stay updated on our latest agents and special offers!"}
          </p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} placeholder-gray-400`}
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
          <p className={`text-xs ${themeClasses.textMuted} mt-4`}>
            We respect your data and privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`px-4 py-12 ${themeClasses.footerBg} border-t ${themeClasses.footerBorder}`}>
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
                  <Link href="/signup" className="hover:text-foreground">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-foreground">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link href="/redeem" className="hover:text-foreground">
                    Redeem
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Adople AI</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="hover:text-foreground">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Learn</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <Link href="/learn/start-business" className="hover:text-foreground">
                    How to start an online business
                  </Link>
                </li>
                <li>
                  <Link href="/learn/creator-economy" className="hover:text-foreground">
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
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className={`${themeClasses.textMuted} hover:${themeClasses.text}`}>
                <span className="sr-only">Facebook</span>📘
              </Link>
              <Link href="#" className={`${themeClasses.textMuted} hover:${themeClasses.text}`}>
                <span className="sr-only">Twitter</span>🐦
              </Link>
              <Link href="#" className={`${themeClasses.textMuted} hover:${themeClasses.text}`}>
                <span className="sr-only">Instagram</span>📷
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
