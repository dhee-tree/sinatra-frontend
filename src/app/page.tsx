import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#4A90E2] to-[#A3D9B1] text-white py-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Network for Social Good
            </h1>
          <p className="text-lg md:text-xl mb-8">
          Pebble reflects how everyday people can come together to make a
          meaningful difference.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}