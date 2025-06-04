"use client";

import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <ProjectsSection />
    </motion.div>
  );
}
