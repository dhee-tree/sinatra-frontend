import DashboardPage from "@/app/(pages)/dashboard/DashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Access the Pebble dashboard to start making a difference.",
  keywords:
    "dashboard, Pebble, social good, network, access, make a difference",
};

export default function Contact() {
  return <DashboardPage />;
}
