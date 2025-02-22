import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#5A7D7C] text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Pebble
        </Link>
        <nav className="space-x-4">
          <Link href="/login" className="hover:text-accent transition-colors">
            Log In
          </Link>
        </nav>
      </div>
    </header>
  );
}