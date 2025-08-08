"use client";

import { motion } from "framer-motion";

export default function UspSection() {
  return (
    <section className="mt-20 text-center px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Devfix?
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-lg leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Devfix is your one-stop hub for discovering, exploring, and managing
        the most essential developer tools. Say goodbye to scattered bookmarks —
        we bring everything to one clean, curated dashboard built for productivity.
      </motion.p>
    </section>
  );
}
