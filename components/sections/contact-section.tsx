"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Loader2,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const emailjs = (await import("emailjs-com")).default;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Quadri Alarape",
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("ENV VARS", {
    service: process.env.NEXT_PUBLIC_SERVICE_ID,
    template: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Let&apos;s create something amazing together and bring
            your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:quadriayomidey@gmail.com"
                      className="text-muted-foreground"
                    >
                      quadriayomidey@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a
                      href="tel:+2348116475929"
                      className="text-muted-foreground"
                    >
                      +234 811-647-5929
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Ayomiidey"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/quadri-alarape"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-background/60 backdrop-blur-sm border-border/60 hover:border-red-500/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/60 border-border/60 focus:border-red-500/50 focus:ring-red-500/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/60 border-border/60 focus:border-red-500/50 focus:ring-red-500/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/60 border-border/60 focus:border-red-500/50 focus:ring-red-500/20"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/60 border-border/60 focus:border-red-500/50 focus:ring-red-500/20 resize-none"
                      placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
