"use client";

import { useRouter } from "next/navigation";
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
import { useForm } from "react-hook-form";
import { SignupActions } from "@/components/signup/utils";
import FormField from "@/components/form/FormField";
import { toast } from "sonner";

interface SignupForm {
  first_name: string;
  last_name: string;
  middle_name: string;
  username: string;
  email: string;
  age: number;
  password: string;
  confirm_password: string;
}

export default function Signup() {
  const { registerUser } = SignupActions();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupForm>();

  const router = useRouter();

  const onSubmit = async (data: SignupForm) => {
    if (data.password !== data.password) {
      toast.error("Passwords do not match", {
        duration: 5000,
      });
      return;
    }

    try {
      const response = await registerUser(
        data.first_name,
        data.last_name,
        data.middle_name,
        data.username,
        data.email,
        data.age,
        data.password,
        data.confirm_password
      ).res();

      if (response.ok) {
        toast.success(
          "Account created successfully. You will be redirected to the dashboard.",
          {
            duration: 5000,
          }
        );
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.", {
        duration: 5000,
      });
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-none shadow-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-dark">
            Join Pebble
          </CardTitle>
          <CardDescription className="text-dark/70 mt-2">
            Create an account and start making a difference today!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <FormField
              id="username"
              label="Username"
              placeholder="Enter your username"
              register={register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
              required
              error={errors.username?.message}
            />

            <FormField
              id="first_name"
              label="First Name"
              placeholder="Enter your first name"
              register={register("first_name", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters",
                },
              })}
              required
              error={errors.first_name?.message}
            />

            <FormField
              id="middle_name"
              label="Middle Name"
              placeholder="Enter your middle name"
              register={register("middle_name", {
                required: "Middle name is required",
                minLength: {
                  value: 3,
                  message: "Middle name must be at least 3 characters",
                },
              })}
              required
              error={errors.middle_name?.message}
            />

            <FormField
              id="last_name"
              label="Last Name"
              placeholder="Enter your last name"
              register={register("last_name", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters",
                },
              })}
              required
              error={errors.last_name?.message}
            />

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
              id="age"
              label="Age"
              type="number"
              placeholder="Enter your age"
              register={register("age", {
                required: "Age is required",
                min: {
                  value: 18,
                  message: "You must be at least 18 years old",
                },
                max: {
                  value: 70,
                  message: "You must be at most 70 years old",
                },
              })}
              required
              error={errors.age?.message}
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

            <FormField
              id="confirm_password"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              register={register("confirm_password", {
                required: "Password confirmation is required",
                minLength: {
                  value: 8,
                  message:
                    "Password confirmation must be at least 8 characters",
                },
              })}
              required
              error={errors.confirm_password?.message}
            />

            <Button
              type="submit"
              className="w-full bg-accent text-white hover:bg-accent/90 transition-all"
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-dark/60">
            Sign up now and earn{" "}
            <span className="text-accent font-bold">10 points</span> to
            kickstart your journey!
          </p>
          <p className="text-sm text-dark">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
