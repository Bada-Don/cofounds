"use client";

import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <FAQ />
        <Newsletter />
      </main>
      <ScrollToTop />
    </div>
  );
}
