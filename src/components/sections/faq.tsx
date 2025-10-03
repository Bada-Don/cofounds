"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Cofounds?",
    answer:
      "Cofounds is a modern job search platform that aggregates opportunities from multiple sources, provides personalized recommendations, and offers community-driven insights to help you land your dream job faster and smarter.",
  },
  {
    question: "Is Cofounds free to use?",
    answer:
      "Yes! Cofounds is completely free for job seekers. We believe everyone deserves access to quality job opportunities without barriers. Companies pay to post jobs and access our talent pool.",
  },
  {
    question: "How is Cofounds different from LinkedIn or job boards?",
    answer:
      "Unlike traditional job boards that just list positions, Cofounds uses AI to match you with relevant opportunities, provides real-time updates from multiple sources, and offers community insights about companies and interview processes. We focus on quality over quantity.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "While you can browse jobs without an account, creating one unlocks personalized recommendations, saved searches, application tracking, and access to our community insights. It takes less than 2 minutes to sign up!",
  },
  {
    question: "Is my data safe with Cofounds?",
    answer:
      "Absolutely. We take privacy seriously. Your data is encrypted, never sold to third parties, and you have full control over what information you share. We're GDPR compliant and follow industry-best security practices.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="section-heading mb-4">
            Everything you need to know about Cofounds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking
            for? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  About Cofounds
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cofounds is a modern job search companion that helps you
                  discover opportunities, connect with companies, and advance
                  your career with confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We combine the power of AI, community insights, and real-time
                  data to give you an edge in your job search.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>10,000+ active job seekers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>500+ partner companies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>95% satisfaction rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
