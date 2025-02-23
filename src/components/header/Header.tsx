"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const cookieStore = document.cookie;
      const hasToken = cookieStore.includes("accessToken=");
      setIsLoggedIn(hasToken);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoggedIn(false);
    toast.success("Logged out successfully", { duration: 5000 });
    router.push("/login");
  };

  return (
    <header className="bg-[#5A7D7C] text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={isLoggedIn ? "/dashboard" : "/"}
          className="text-2xl font-bold flex items-center gap-2"
        >
          Pebble
        </Link>

        <nav className="space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-accent transition-colors"
            >
              Log Out
            </button>
          ) : (
            <Link href="/login" className="hover:text-accent transition-colors">
              Log In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}