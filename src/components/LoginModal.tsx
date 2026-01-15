import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {isSignUp ? "Create an account" : "Welcome back"}
          </DialogTitle>
          <DialogDescription className="font-body">
            {isSignUp
              ? "Join our community of crafters"
              : "Sign in to access your patterns"}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body">
                Name
              </Label>
              <Input id="name" placeholder="Your name" />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body">
              Email
            </Label>
            <Input id="email" type="email" placeholder="hello@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-body">
              Password
            </Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button type="submit" className="w-full" size="lg">
            {isSignUp ? "Create account" : "Sign in"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
