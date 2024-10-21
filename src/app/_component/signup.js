import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function RestaurantSignup() {
  const [newsletter, setNewsletter] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Join Our Culinary Community</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-primary">Full Name</Label>
            <Input id="name" placeholder="John Doe" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="text-primary">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="password" className="text-primary">Password</Label>
            <Input id="password" type="password" required className="mt-1" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="newsletter"
              checked={newsletter}
              onCheckedChange={setNewsletter}
            />
            <Label htmlFor="newsletter" className="text-primary">Subscribe to our newsletter</Label>
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm text-muted-foreground mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" aria-label="Sign up with Facebook">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Sign up with Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Sign up with Instagram">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="font-medium text-primary hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}