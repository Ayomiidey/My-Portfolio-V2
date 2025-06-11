"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "PAC 8",
    description:
      "A modern full-stack e-commerce application featuring product management, secure authentication, dynamic cart with Redux, and Stripe payment integration.",
    image: "/images/pac8.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redux", "Prisma"],
    category: "Full Stack",
    github: "https://github.com/Ayomiidey/PAC-8-V2",
    live: "https://pac8.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "Smart Inventory Manager",
    description:
      "A full-stack inventory management application featuring product, category, and supplier CRUD operations, real-time analytics, image uploads, and secure authentication. Includes an admin dashboard with responsive tables and CSV export functionality.",
    image: "/images/restockr.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind",
      "Blob",
    ],
    category: "Full Stack",
    github: "https://github.com/Ayomiidey/Restockr",
    live: "https://restockr.vercel.app",
    featured: false,
  },

  {
    id: 3,
    title: "Fam 8",
    description:
      "A modern farming investment platform empowering users to fund crops and livestock, track tasks with live photo updates, and manage investments through an interactive calculator.",
    image: "/images/fam8.png",
    tags: ["Next.js", "Redux", "Prisma", "Neon PostgreSQL", "Serverless"],
    category: "Fullstack",
    github: "https://github.com/interface8/Plant-8",
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
    featured: true,
  },
  {
    id: 6,
    title: "Mobile App UI",
    description:
      "A modern mobile app interface design with intuitive user experience and micro-interactions.",
    image: "/placeholder.svg?height=300&width=500",
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
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
          >
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-black text-black dark:text-white border  dark:border-white hover:border-red-500/50 hover:bg-background/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Action Buttons */}
                    <div
                      className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200 group/btn"
                      >
                        <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover/btn:text-red-600 dark:group-hover/btn:text-red-400" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover/btn:text-red-600 dark:group-hover/btn:text-red-400" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="px-6 pb-6">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-200" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-200" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try selecting a different category to see more projects.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, Github, Filter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce App",
//     description:
//       "A modern full-stack e-commerce application featuring product management, secure authentication, dynamic cart with Redux, and Stripe payment integration.",
//     image: "/images/pac8.png",
//     tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redux", "Prisma"],
//     category: "Full Stack",
//     github: "https://github.com",
//     live: "https://pac8.vercel.app",
//     featured: false,
//   },
//   {
//     id: 2,
//     title: "Smart Inventory Manager",
//     description:
//       "A full-stack inventory management application featuring product, category, and supplier CRUD operations, real-time analytics, image uploads, and secure authentication. Includes an admin dashboard with responsive tables and CSV export functionality.",
//     image: "/images/restockr.png",
//     tags: [
//       "Next.js",
//       "TypeScript",
//       "Prisma",
//       "PostgreSQL",
//       "NextAuth",
//       "Tailwind",
//       "Blob",
//     ],
//     category: "Full Stack",
//     github: "https://github.com",
//     live: "https://restockr.vercel.app",
//     featured: true,
//   },

//   {
//     id: 3,
//     title: "Fam 8",
//     description:
//       "A modern farming investment platform empowering users to fund crops and livestock, track tasks with live photo updates, and manage investments through an interactive calculator.",
//     image: "/images/fam8.png",
//     tags: ["Next.js", "Redux", "Prisma", "Neon PostgreSQL", "Serverless"],
//     category: "Fullstack",
//     github: "https://github.com/your-username/fam8",
//     live: "https://fam8.vercel.app",
//     featured: false,
//   },
//   {
//     id: 4,
//     title: "Portfolio Website",
//     description:
//       "A modern, responsive portfolio website with smooth animations and dark mode support.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     category: "Frontend",
//     github: "https://github.com",
//     live: "https://example.com",
//     featured: false,
//   },
//   {
//     id: 5,
//     title: "REST API Service",
//     description:
//       "A scalable REST API service with authentication, rate limiting, and comprehensive documentation.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["Node.js", "Express", "JWT", "Swagger"],
//     category: "Backend",
//     github: "https://github.com",
//     live: "https://example.com",
//     featured: false,
//   },
//   {
//     id: 6,
//     title: "Mobile App UI",
//     description:
//       "A modern mobile app interface design with intuitive user experience and micro-interactions.",
//     image: "/placeholder.sv?height=300&width=500",
//     tags: ["Figma", "Prototyping", "UI/UX"],
//     category: "Design",
//     github: "https://github.com",
//     live: "https://example.com",
//     featured: false,
//   },
// ];

// const categories = [
//   "All",
//   "Featured",
//   "Full Stack",
//   "Frontend",
//   "Backend",
//   "Design",
// ];

// export function ProjectsSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : selectedCategory === "Featured"
//       ? projects.filter((project) => project.featured)
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-20">
//       <div className="max-w-7xl mx-auto w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             My{" "}
//             <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
//             Here are some of my recent projects that showcase my skills and
//             passion for development. Each project represents a unique challenge
//             and learning experience.
//           </p>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-2 mb-8">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className={
//                   selectedCategory === category
//                     ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
//                     : "hover:border-red-500/50 hover:bg-red-500/10"
//                 }
//               >
//                 <Filter className="w-4 h-4 mr-2" />
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="group"
//               >
//                 <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300 overflow-hidden">
//                   <div className="relative overflow-hidden ">
//                     <div className="relative w-full h-48">
//                       <Image
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         className="object-cover transition-transform duration-300 group-hover:scale-110"
//                         placeholder="blur"
//                         blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
//                       />
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Button
//                         size="icon"
//                         variant="secondary"
//                         className="bg-background/80 backdrop-blur-sm"
//                         asChild
//                       >
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Github className="w-4 h-4" />
//                         </a>
//                       </Button>
//                       <Button
//                         size="icon"
//                         variant="secondary"
//                         className="bg-background/80 backdrop-blur-sm"
//                         asChild
//                       >
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <ExternalLink className="w-4 h-4" />
//                         </a>
//                       </Button>
//                     </div>
//                     {project.featured && (
//                       <div className="absolute top-4 left-4">
//                         <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
//                           Featured
//                         </Badge>
//                       </div>
//                     )}
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tags.map((tag) => (
//                         <Badge
//                           key={tag}
//                           variant="secondary"
//                           className="text-xs"
//                         >
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
