"use client";

import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import UspSection from "@/components/UspSection";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const tools = [
  {
    title: "VS Code",
    description: "Powerful open-source code editor.",
    url: "https://code.visualstudio.com/",
    icon: "💻",
    category: "Editor",
  },
  {
    title: "GitHub",
    description: "Code hosting & version control.",
    url: "https://github.com/",
    icon: "🐙",
    category: "Collaboration",
  },
  {
    title: "Postman",
    description: "API testing and collaboration tool.",
    url: "https://postman.com/",
    icon: "📬",
    category: "Debugging",
  },
  {
    title: "Figma",
    description: "Collaborative UI/UX design tool.",
    url: "https://figma.com/",
    icon: "🎨",
    category: "Design",
  },
  {
    title: "Stack Overflow",
    description: "Get answers from devs worldwide.",
    url: "https://stackoverflow.com/",
    icon: "🧠",
    category: "Help",
  },
  {
    title: "CodeSandbox",
    description: "Online web dev IDE with instant preview.",
    url: "https://codesandbox.io/",
    icon: "📦",
    category: "Editor",
  },
];

export default function Home() {
  const [showTools, setShowTools] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTools(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white dark:bg-white dark:text-black transition-colors duration-500">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 backdrop-blur-sm bg-black/70 dark:bg-white/80 transition-colors">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition">
          Devfix
        </Link>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </Button>
          <Button variant="ghost" className="border border-white dark:border-black">
            Login
          </Button>
          <Button className="bg-white text-black hover:bg-white/80 dark:bg-black dark:text-white dark:hover:bg-black/80">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section with animated geometric background */}
      <section className="relative z-10">
        <HeroGeometric
          badge="Devfix"
          title1="Welcome to"
          title2="Devfix"
        />
      </section>

      {/* USP Section */}
      <UspSection />

      {/* Tool Cards */}
      <section
        className={`transition-opacity duration-1000 ${
          showTools ? "opacity-100" : "opacity-0 pointer-events-none"
        } px-6 py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center`}
      >
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </section>
    </main>
  );
}
