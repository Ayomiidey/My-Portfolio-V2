"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const techCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Jest", level: 82 },
    ],
  },
];

const tools = [
  "VS Code",
  "Git",
  "Docker",
  "Figma",
  "Postman",
  "Vercel",
  "AWS",
  "Firebase",
  "Prisma",
  "Supabase",
  "Stripe",
  "Framer",
  "Linear",
  "Notion",
  "Slack",
  "Discord",
];

export function TechStackSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tech{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I work with modern technologies and tools to build scalable,
            maintainable, and performant applications. Here&apos;s my current
            tech stack and proficiency levels.
          </p>
        </motion.div>

        {/* Skills with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}
                  >
                    <h3 className="font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + techIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.2 + techIndex * 0.1 + 0.5,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Tools & Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-background/60 backdrop-blur-sm border border-border/60 rounded-full hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
