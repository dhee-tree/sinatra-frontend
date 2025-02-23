"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginActions } from "@/components/login/utils";
import FormField from "@/components/form/FormField";
import { toast } from "sonner";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { login, storeToken } = LoginActions();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    try {
      login(data.email, data.password).json((json) => {
        storeToken(json.access, "access");
        storeToken(json.refresh, "refresh");

        router.push("dashboard");
      });
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials", {
        duration: 5000,
      });
    }
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
          <form className="space-y-6">
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              required
              error={errors.email?.message}
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              required
              error={errors.password?.message}
            />
            <Button
              type="submit"
              className="w-full bg-accent text-white hover:bg-accent/90 transition-all"
              onClick={handleSubmit(onSubmit)}
            >
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-dark/60">
            Log in to check your{" "}
            <span className="text-accent font-bold">points</span> and upcoming
            events!
          </p>
          <p className="text-sm text-dark">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
