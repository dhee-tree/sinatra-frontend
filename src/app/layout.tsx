import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
  ),
  title: {
    default: "Home | Pebble",
    template: "%s | Pebble",
  },
  description:
    "Peble is a network for social good. Pebble reflects how everyday people can come together to make a meaningful difference.",
  keywords:
    "software development Birmingham, custom software UK, SaaS Birmingham, SME tech solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
