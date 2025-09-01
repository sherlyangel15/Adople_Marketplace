import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
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
            <CardTitle className="text-2xl">Log in</CardTitle>
            <CardDescription>Access your Adople AI account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action="#">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" required />
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black" type="submit">
                Log in
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
