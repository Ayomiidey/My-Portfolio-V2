"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Art of Clean Code: Best Practices for Developers",
    excerpt:
      "Learn essential principles and practices for writing maintainable, readable code that scales with your team and project.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Clean Code", "Best Practices", "Programming"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt:
      "A comprehensive guide to creating responsive, flexible layouts using CSS Grid and Flexbox with practical examples.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Frontend"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "State Management in React: Redux vs Zustand vs Context",
    excerpt:
      "Compare different state management solutions and learn when to use each approach in your React applications.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["React", "State Management", "Redux"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt:
      "Learn how to build robust, type-safe APIs using Node.js and TypeScript with proper error handling and validation.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Node.js", "TypeScript", "API"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Explore emerging trends and technologies that are shaping the future of web development and user experiences.",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["Trends", "Future", "Web Development"],
    image: "/placeholder.svg?height=200&width=400",
  },
];

export default function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development,
            programming, and technology. Join me on my journey of continuous
            learning and sharing knowledge with the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-bold text-xl mb-3 group-hover:text-red-500 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-red-500 hover:text-red-600 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
