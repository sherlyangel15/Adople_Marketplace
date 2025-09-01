"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    setError("")
    // ...submit logic...
  }

  return (
    <main className="px-4 py-12">
      <div className="max-w-md mx-auto mb-4">
        <Button variant="ghost" asChild>
          <Link href="/">Back</Link>
        </Button>
      </div>
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>Join Adople AI to unlock exclusive deals.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action="#" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Full Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black" type="submit">
                Sign up
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Log in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
