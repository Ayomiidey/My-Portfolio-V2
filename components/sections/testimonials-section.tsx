"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Giwa Uthman",
    role: "CEO, Interface-8.",
    content:
      "Quadri delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Aina Kolade",
    role: "Product Manager, InnovateCorp",
    content:
      "Working with Quadri was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time and within budget.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Jaji Moshood",
    role: "Founder, CreativeStudio",
    content:
      "Quadri's design skills and development expertise helped us create a stunning portfolio website that perfectly represents our brand.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Chinedu Isaiah",
    role: "CTO, DataFlow Systems",
    content:
      "The API service Quadri built for us is robust, well-documented, and has been running flawlessly for over a year. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export function TestimonialsSection() {
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
            What Clients{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what some of my
            clients have to say about working with me and the results we
            achieved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-red-500 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-full mr-4 border-2 border-border/60"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
