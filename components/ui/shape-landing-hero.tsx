"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type HeroGeometricProps = {
  title1: string;
  title2: string;
  badge?: string;
  className?: string;
};

export function HeroGeometric({
  title1,
  title2,
  badge,
  className,
}: HeroGeometricProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {/* Background Shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-pink-500 blur-3xl opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500 blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500 blur-2xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center text-white dark:text-black">
        {badge && (
          <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-black/10 dark:text-black">
            {badge}
          </div>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">{title1}</span>
          <span className="block text-indigo-400 dark:text-indigo-600">{title2}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 dark:text-black/70">
          Explore your favorite dev tools, beautifully organized in one place.
        </p>
      </div>
    </section>
  );
}
