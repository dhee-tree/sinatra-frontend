import SignupPage from "@/app/(pages)/signup/SignupPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Sign up for a Pebble account to access the Pebble dashboard and start making a difference.",
  keywords:
    "sign up, register, Pebble, social good, network, dashboard, account, access",
};

export default function Contact() {
  return <SignupPage />;
}
