"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Target,
  RefreshCw,
  Users,
  Sparkles,
  Shield,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Briefcase,
    title: "Built for Job Seekers",
    description:
      "Designed with your career goals in mind. Find opportunities that match your skills, experience, and aspirations.",
  },
  {
    icon: Target,
    title: "Apply Smarter, Not Harder",
    description:
      "Stop sending hundreds of applications. Get matched with roles where you're most likely to succeed.",
  },
  {
    icon: RefreshCw,
    title: "Always in Sync",
    description:
      "Real-time updates from multiple job boards, all in one place. Never miss an opportunity again.",
  },
  {
    icon: Users,
    title: "Community-Driven Advantage",
    description:
      "Learn from others' experiences. Get insider insights on companies, interviews, and hiring processes.",
  },
  {
    icon: Sparkles,
    title: "Personalized Job Discovery",
    description:
      "AI-powered recommendations that learn from your preferences and adapt to your career journey.",
  },
  {
    icon: Shield,
    title: "Privacy-First by Design",
    description:
      "Your data is yours. We never sell your information or spam you with irrelevant opportunities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="section-heading mb-4">
            Why CoFounds Delivers Results — Not Just Listings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not another job board. We&apos;re your career companion, built to
            help you succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative h-full feature-card-border bg-card/50 backdrop-blur-sm transition-all duration-300 feature-card-shadow hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Icon with theme-aware gradient background */}
                  <div className="feature-icon-bg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Theme-aware gradient glow effect on hover */}
                  <div className="feature-card-glow" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
