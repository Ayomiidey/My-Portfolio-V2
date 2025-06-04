"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Paintbrush,
  Rocket,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Focused",
      "Cross-browser Compatible",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "React Native",
      "Flutter",
      "Native iOS/Android",
      "Progressive Web Apps",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with robust APIs and database architecture.",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Database Design",
      "Cloud Integration",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Speed up your applications and improve user experience with optimization techniques.",
    features: [
      "Code Splitting",
      "Lazy Loading",
      "CDN Setup",
      "Caching Strategies",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description:
      "Ongoing support, security updates, and maintenance for your digital products.",
    features: [
      "Security Audits",
      "Regular Updates",
      "Bug Fixes",
      "24/7 Monitoring",
    ],
    color: "from-teal-500 to-green-500",
  },
];

export function ServicesSection() {
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
            My{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I offer comprehensive development services to help bring your ideas
            to life. From concept to deployment, I&apos;ll work with you to
            create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-4 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
