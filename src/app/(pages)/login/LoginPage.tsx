"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for hackathon demo
    console.log("Login:", { email, password });
    // Redirect to dashboard after "login" (replace with real API later)
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-none shadow-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-dark">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-dark/70 mt-2">
            Log in to continue making a difference with Pebble.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-dark font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border-dark/20 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-dark font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border-dark/20 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-accent text-white hover:bg-accent/90 transition-all"
            >
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          {/* Gamification Hint */}
          <p className="text-sm text-dark/60">
            Log in to check your{" "}
            <span className="text-accent font-bold">points</span> and upcoming
            events!
          </p>
          {/* Signup Link */}
          <p className="text-sm text-dark">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}