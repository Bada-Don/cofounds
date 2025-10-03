"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  // Optimized scroll transforms with minimal calculations
  const y = useTransform(scrollY, [0, 600], [0, 30]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const backgroundY = useTransform(scrollY, [0, 800], [0, -20]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated grid background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] motion-safe"
      />

      {/* Gradient orbs - static positioning for better performance */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl animate-float" />
      <div 
        style={{ animationDelay: "2s" }}
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl animate-float" 
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center max-w-4xl mx-auto scroll-optimized"
        >
          {/* Backed By Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <p className="text-muted-foreground mb-4 text-2xl font-black">Backed By</p>
            <div className="flex items-center space-x-3">
              <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                <img 
                  alt="Google For Startups" 
                  loading="lazy" 
                  width={130} 
                  height={17} 
                  className="h-4 w-auto" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Google_for_Startups_logo.svg/2560px-Google_for_Startups_logo.svg.png"
                />
              </div>
              <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                <img 
                  alt="Y Combinator" 
                  loading="lazy" 
                  width={64} 
                  height={40} 
                  className="h-6 w-auto" 
                  src="https://i0.wp.com/get.site/wp-content/uploads/2021/10/notion-logo.png?ssl=1"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="hero-heading">
              Hiring is Broken - We are here to fix it!
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Stop wasting time on endless job boards. CoFounds delivers
            personalized opportunities, community insights, and a smarter way to
            land your dream job.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="rounded-full h-12 px-8 text-base gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              onClick={() => window.location.href = '/auth'}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base border-border/50 hover:border-primary/50 hover:bg-card transition-all"
            >
              Onboard Your Company
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Privacy-first</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-5xl mt-16"
        >
          {/* Enhanced gradient border container */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-background to-muted/20 relative">
              {/* Image container with smooth crossfade transitions */}
              <div className="relative w-full aspect-[16/10] md:aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={theme} // This key ensures the component re-mounts when theme changes
                    src={theme === 'dark' 
                      ? "https://i.ibb.co/RGRHrFMH/Screenshot-2025-10-03-114658.png"
                      : "https://i.ibb.co/hJ7rhtJ4/Screenshot-2025-10-03-114639.png"
                    }
                    width={1280}
                    height={720}
                    alt={`CoFounds dashboard - ${theme} mode`}
                    className="absolute inset-0 w-full h-full object-contain object-center z-10"
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.4, 0, 0.2, 1], // Custom easing for smoother transition
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.6 }
                    }}
                  />
                </AnimatePresence>
              </div>
              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/10"></div>
              {/* Enhanced inner ring */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 dark:ring-white/30"></div>
            </div>
          </div>
          
          {/* Enhanced floating gradient orbs */}
          <div className="absolute -bottom-8 -right-8 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/25 to-cyan-500/20 dark:from-blue-400/30 dark:via-purple-400/35 dark:to-cyan-400/30 blur-3xl opacity-80 animate-pulse"></div>
          <div className="absolute -top-8 -left-8 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/20 via-cyan-500/25 to-blue-500/20 dark:from-purple-400/30 dark:via-cyan-400/35 dark:to-blue-400/30 blur-3xl opacity-80 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Additional accent orbs for more depth */}
          <div className="absolute top-1/2 -right-4 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/15 dark:from-cyan-400/25 dark:to-blue-400/25 blur-2xl opacity-60"></div>
          <div className="absolute top-1/3 -left-4 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-purple-500/15 to-cyan-500/15 dark:from-purple-400/25 dark:to-cyan-400/25 blur-2xl opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
}
