import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useAuth } from "@/components/Auth"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const success = isSignUp 
        ? await signUp(email, password)
        : await signIn(email, password)
      
      console.log('Auth result:', success)
      if (success) {
        onOpenChange(false)
        toast.success(isSignUp ? "Account created! Check email." : "Welcome back!")
      } else {
        toast.error("Auth failed - check console")
      }
    } catch (error: any) {
      console.error('Full error:', error)
      console.error('Error message:', error.message)
      console.error('Error status:', error.status)
      console.error('Error code:', error.code)
      toast.error(`${error.message || 'Login failed'} (code: ${error.code || 'unknown'})`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {isSignUp ? "Create account" : "Welcome back"}
          </DialogTitle>
          <DialogDescription className="font-body">
            {isSignUp ? "Join cozy crochet community" : "Sign in to your patterns"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body">Name</Label>
              <Input 
                id="name" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-body">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="6+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required 
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading || !email || password.length < 6}>
            {loading ? "Loading..." : (isSignUp ? "Create account" : "Sign in")}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            disabled={loading}
          >
            {isSignUp ? "Have account? Sign in" : "No account? Sign up"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
