"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <ContactSection />
    </motion.div>
  );
}
