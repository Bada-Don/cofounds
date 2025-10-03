"use client";

import * as React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Why Cofounds", href: "#features" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#newsletter" },
  { label: "Join Community", href: "#newsletter" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme, triggerRipple } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = (event: React.MouseEvent) => {
    // Get the click position for the ripple effect
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Trigger ripple effect
    triggerRipple(x, y);
    
    // Small delay to sync with ripple animation
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    // If we're on a page other than home, navigate to home
    if (pathname !== '/') {
      router.push('/');
    } else {
      // If we're on home page, check scroll position
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        // Scroll to top if not already near the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // If already at top of home page, do nothing
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
          : "bg-background/90 backdrop-blur-sm"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold gradient-text hover:opacity-90 transition-opacity"
              aria-label="CoFounds home"
            >
              CoFounds
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={`${link.label}-${index}`}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Get Started button */}
            <Button
              className="gradient-bg hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = '/auth'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={`${link.label}-${index}`}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-3 px-2 rounded-md hover:bg-muted/50 relative group"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="w-full gradient-bg hover:opacity-90 transition-opacity mt-4"
                onClick={() => window.location.href = '/auth'}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
