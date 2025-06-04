"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/sections/about-section";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <AboutSection />
    </motion.div>
  );
}
