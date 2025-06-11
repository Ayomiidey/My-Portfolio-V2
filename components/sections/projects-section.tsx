"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description:
      "A full-stack e-commerce app with payment integration, and admin dashboard.",
    image: "/images/pac8.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://pac8.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "Smart Inventory App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/images/restockr.png",
    tags: ["NextJs", "PostgreSQL", "Blob", "Prisma"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://restockr.vercel.app",
    featured: true,
  },

  {
    id: 3,
    title: "Fam 8",
    description:
      "A modern farming investment platform empowering users to fund crops and livestock, track tasks with live photo updates, and manage investments through an interactive calculator.",
    image: "/images/fam8.png",
    tags: ["Next.js", "Redux", "Prisma", "Neon PostgreSQL", "Serverless"],
    category: "Fullstack",
    github: "https://github.com/your-username/fam8",
    live: "https://fam8.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations and dark mode support.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "REST API Service",
    description:
      "A scalable REST API service with authentication, rate limiting, and comprehensive documentation.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Node.js", "Express", "JWT", "Swagger"],
    category: "Backend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile App UI",
    description:
      "A modern mobile app interface design with intuitive user experience and micro-interactions.",
    image: "/placeholder.sv?height=300&width=500",
    tags: ["Figma", "Prototyping", "UI/UX"],
    category: "Design",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const categories = [
  "All",
  "Featured",
  "Full Stack",
  "Frontend",
  "Backend",
  "Design",
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "Featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for development. Each project represents a unique challenge
            and learning experience.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                    : "hover:border-red-500/50 hover:bg-red-500/10"
                }
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden ">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
