"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "React, Angular, TypeScript, JavaScript, Tailwind CSS, CSS, HTML",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: " Next.js, Node.js, PostgreSQL, MongoDB",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Leadership, Mentoring",
    color: "from-orange-500 to-red-500",
  },
];

const stats = [
  { icon: Award, label: "Projects Completed", value: "10+" },
  { icon: Coffee, label: "Years Experience", value: "3+" },
  { icon: Users, label: "Happy Clients", value: "10+" },
  { icon: Code, label: "Lines of Code", value: "100K+" },
];

export function AboutSection() {
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
            About{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer with 3+ years of
            experience creating digital experiences that make a difference. I
            love turning complex problems into simple, beautiful solutions that
            users love to interact with.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious student who fell in love with code during my
              first programming class. What began as simple &quot;Hello
              World&quot; programs evolved into a passion for creating
              meaningful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, I&apos;ve worked with startups and established
              companies, building everything from simple websites to complex web
              applications that serve thousands of users daily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source projects, playing chess,
              or sharing knowledge with the developer community through blogs
              and talks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-500" />
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
