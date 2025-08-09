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
    description: "Powerful open-source code editor with IntelliSense, debugging, and Git integration.",
    url: "https://code.visualstudio.com/",
    icon: "💻",
    category: "Editor",
  },
  {
    title: "GitHub",
    description: "World's leading platform for code hosting & version control collaboration.",
    url: "https://github.com/",
    icon: "🐙",
    category: "Collaboration",
  },
  {
    title: "Postman",
    description: "Complete API development environment for testing, documentation & collaboration.",
    url: "https://postman.com/",
    icon: "📬",
    category: "Debugging",
  },
  {
    title: "Figma",
    description: "Professional collaborative UI/UX design tool for modern development teams.",
    url: "https://figma.com/",
    icon: "🎨",
    category: "Design",
  },
  {
    title: "Stack Overflow",
    description: "The largest programming community where developers get answers worldwide.",
    url: "https://stackoverflow.com/",
    icon: "🧠",
    category: "Help",
  },
  {
    title: "CodeSandbox",
    description: "Instant cloud development environment with live preview and collaboration.",
    url: "https://codesandbox.io/",
    icon: "📦",
    category: "Editor",
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    url: "https://notion.so/",
    icon: "📝",
    category: "Productivity",
  },
  {
    title: "Vercel",
    description: "Deploy and host modern web applications with zero configuration instantly.",
    url: "https://vercel.com/",
    icon: "▲",
    category: "Deployment",
  },
  {
    title: "MongoDB",
    description: "Flexible NoSQL database platform for modern applications and developers.",
    url: "https://mongodb.com/",
    icon: "🍃",
    category: "Database",
  },
  {
    title: "Docker",
    description: "Containerization platform for building, shipping, and running applications.",
    url: "https://docker.com/",
    icon: "🐳",
    category: "DevOps",
  },
  {
    title: "Firebase",
    description: "Google's platform for building mobile and web applications quickly.",
    url: "https://firebase.google.com/",
    icon: "🔥",
    category: "Backend",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development and customization.",
    url: "https://tailwindcss.com/",
    icon: "🎨",
    category: "Framework",
  },
];

export default function Home() {
  const [showTools, setShowTools] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { setTheme, theme } = useTheme();

  const categories = ["All", ...new Set(tools.map(tool => tool.category))];
  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTools(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white dark:bg-white dark:text-black transition-colors duration-500">

      {/* Enhanced Navbar - keeping same style */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 backdrop-blur-sm bg-black/70 dark:bg-white/80 transition-colors">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition flex items-center gap-2">
          <span className="w-8 h-8 bg-white dark:bg-black text-black dark:text-white rounded-lg flex items-center justify-center text-sm font-black">
            D
          </span>
          Devfix
        </Link>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </Button>
          <Button variant="ghost" className="border border-white dark:border-black hover:bg-white/10 dark:hover:bg-black/10">
            Login
          </Button>
          <Button className="bg-white text-black hover:bg-white/80 dark:bg-black dark:text-white dark:hover:bg-black/80">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section with your existing HeroGeometric component */}
      <section className="relative z-10">
        <HeroGeometric
          badge="🚀 Your Developer Toolkit Hub"
          title1="Welcome to "
          title2="Devfix"
        />
        
        {/* Additional hero content below the geometric section */}
        <div className="px-6 pb-20 text-center">
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the most powerful development tools, resources, and platforms that top developers use to build amazing software. From code editors to deployment platforms - we&apos;ve curated everything you need to accelerate your development workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90 px-8 py-3 font-semibold"
              onClick={() => document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Tools 🔍
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="border border-white dark:border-black hover:bg-white/10 dark:hover:bg-black/10 px-8 py-3 font-semibold"
            >
              Watch Demo ▶️
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white dark:text-black mb-2">50+</div>
              <div className="text-sm text-gray-400 dark:text-gray-600">Developer Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white dark:text-black mb-2">10K+</div>
              <div className="text-sm text-gray-400 dark:text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white dark:text-black mb-2">24/7</div>
              <div className="text-sm text-gray-400 dark:text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white dark:text-black mb-2">100%</div>
              <div className="text-sm text-gray-400 dark:text-gray-600">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section - keeping your existing component */}
      <UspSection />

      {/* Enhanced Tool Cards Section */}
      <section
        id="tools-section"
        className={`transition-opacity duration-1000 ${
          showTools ? "opacity-100" : "opacity-0 pointer-events-none"
        } px-6 py-20`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
              Essential Developer Tools
            </h2>
            <p className="text-lg text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
              Handpicked tools that power the world&apos;s best development teams
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black dark:bg-black dark:text-white"
                    : "hover:bg-white/10 dark:hover:bg-black/10 border border-white/20 dark:border-black/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tool Grid - keeping your existing grid layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.title}
                className="w-full max-w-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Newsletter Section */}
      <section className="px-6 py-24 border-t border-white/10 dark:border-black/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-32 h-32 border border-white dark:border-black rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-24 w-20 h-20 border border-white dark:border-black rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-16 h-16 border border-white dark:border-black rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 right-20 w-28 h-28 border border-white dark:border-black rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white dark:border-black rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              📧 Developer Newsletter
            </span>
          </div>
          
          {/* Main Heading */}
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-black leading-tight">
            Stay Ahead of the
            <span className="block text-gray-300 dark:text-gray-700">
              Development Curve
            </span>
          </h3>
          
          <p className="text-xl text-gray-400 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join <strong className="text-white dark:text-black">20,000+ developers</strong> who get exclusive access to the latest tools, frameworks, and industry insights. Get the competitive edge you need to build better software faster.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/10 dark:bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-colors">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="font-semibold text-white dark:text-black mb-2">Weekly Tool Spotlight</h4>
              <p className="text-sm text-gray-400 dark:text-gray-600">Deep dives into the hottest developer tools with practical tutorials and use cases</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/10 dark:bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white dark:text-black mb-2">Productivity Hacks</h4>
              <p className="text-sm text-gray-400 dark:text-gray-600">Exclusive tips and workflows that can save you hours every week</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/10 dark:bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-white dark:text-black mb-2">Early Access</h4>
              <p className="text-sm text-gray-400 dark:text-gray-600">Be the first to discover new tools before they become mainstream</p>
            </div>
          </div>
          
          {/* Enhanced Email Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col sm:flex-row gap-4 p-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-black/20 rounded-2xl backdrop-blur-sm hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-6 py-4 bg-transparent text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none text-lg"
                    required
                  />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent"></div>
                </div>
                <Button 
                  type="submit"
                  className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg ${
                    isSubscribed 
                      ? "bg-green-500 text-white hover:bg-green-500" 
                      : "bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90 hover:scale-105"
                  }`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "✓ Subscribed!" : "Join Now 🚀"}
                </Button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-500">
              <span>✓ No spam, unsubscribe anytime</span>
              <span className="hidden sm:block">•</span>
              <span>✓ Weekly delivery, Tuesday mornings</span>
              <span className="hidden sm:block">•</span>
              <span>✓ 100% free forever</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl backdrop-blur-sm">
              <p className="text-gray-300 dark:text-gray-700 mb-4 italic">
                &ldquo;Devfix newsletter keeps me updated on all the latest tools. It&apos;s become an essential part of my weekly routine.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-full flex items-center justify-center">
                  👨‍💻
                </div>
                <div>
                  <div className="font-semibold text-white dark:text-black">Alex Chen</div>
                  <div className="text-sm text-gray-400 dark:text-gray-600">Senior Developer, Google</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl backdrop-blur-sm">
              <p className="text-gray-300 dark:text-gray-700 mb-4 italic">
                &ldquo;The tool recommendations are spot-on. I&apos;ve discovered 5+ tools that are now essential to my workflow.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-full flex items-center justify-center">
                  👩‍💻
                </div>
                <div>
                  <div className="font-semibold text-white dark:text-black">Sarah Wilson</div>
                  <div className="text-sm text-gray-400 dark:text-gray-600">Full Stack Developer, Microsoft</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Companies */}
          <div className="mt-16 flex flex-col items-center">
            <div className="text-sm text-gray-500 dark:text-gray-500 mb-6">Trusted by developers at:</div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Google</span>
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Microsoft</span>
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Meta</span>
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Netflix</span>
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Spotify</span>
              <span className="font-mono text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-default">Uber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-white/10 dark:border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 bg-white dark:bg-black text-black dark:text-white rounded-lg flex items-center justify-center font-bold">
                  D
                </span>
                <span className="text-2xl font-bold text-white dark:text-black">
                  Devfix
                </span>
              </div>
              <p className="text-gray-400 dark:text-gray-600 mb-6 max-w-md">
                Empowering developers with the best tools and resources to build exceptional software. Created by passionate developers, for developers worldwide.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/KadimiJaswanth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 dark:bg-black/10 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 transform hover:scale-110"
                  title="GitHub"
                >
                  🐙
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-black/10 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 transform hover:scale-110">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-black/10 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 transform hover:scale-110">
                  💼
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white dark:text-black">Categories</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-600">
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Code Editors</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Design Tools</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">DevOps</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Frameworks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white dark:text-black">Resources</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-600">
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Tool Reviews</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-black transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/10 dark:border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 dark:text-gray-600 text-sm">
              <span>© 2025 Devfix. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span>Made with ❤️ by <a href="https://github.com/KadimiJaswanth" target="_blank" rel="noopener noreferrer" className="text-white dark:text-black hover:opacity-80 transition-opacity font-semibold">Kadimi Jaswanth</a></span>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-sm transition-colors">Terms of Service</a>
              <a href="https://github.com/KadimiJaswanth" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-sm transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}