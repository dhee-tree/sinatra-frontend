import LoginPage from "@/app/(pages)/login/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Login to your account to access the Pebble dashboard and start making a difference.",
  keywords:
    "login, sign in, Pebble, social good, network, dashboard, account, access",
};

export default function Contact() {
  return <LoginPage />;
}
