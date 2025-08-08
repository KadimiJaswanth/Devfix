"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-black text-black dark:text-white">
      
      {/* ✅ Left: App Logo/Name links to Home */}
      <Link href="/" className="text-xl font-bold hover:underline">
        Devfix
      </Link>

      {/* ✅ Right: Nav links + Theme Toggle */}
      <div className="flex items-center gap-4">
        <Link href="/tools" className="hover:underline">
          Tools
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>

        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </Button>
      </div>
    </nav>
  );
}
