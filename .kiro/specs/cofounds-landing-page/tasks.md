# Implementation Plan

- [x] 1. Install dependencies and configure project foundation

  - Install Framer Motion: `npm install framer-motion`
  - Verify Lucide React is installed (already in package.json)
  - Update tailwind.config.js to include src directory paths
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 2. Set up theme provider and dark mode functionality

  - Create src/components/theme-provider.tsx with React Context for theme management
  - Implement localStorage persistence for theme preference
  - Add theme toggle logic with dark/light mode switching
  - Prevent FOUC (Flash of Unstyled Content) with proper initialization
  - _Requirements: 1.4, 6.1, 6.2_

- [x] 3. Update global styles and design tokens

  - Update src/app/globals.css with custom color palette (#0A0A0A background, #1A1A1A cards)
  - Add gradient color variables (blue #3B82F6 to purple #A855F7)
  - Define typography utility classes (hero-heading, section-heading, body-text)
  - Add custom animation keyframes (float, gradient-shift)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9_

- [x] 4. Create Navigation component with sticky header

  - Create src/components/sections/navigation.tsx
  - Implement sticky positioning with glass morphism effect (backdrop-blur)
  - Add CoFounds logo text on the left
  - Create navigation links array: "Why Cofounds", "FAQs", "Contact", "Join Community"
  - Implement smooth scroll functionality to sections
  - Add dark mode toggle button integration
  - Create gradient "Get Started" button
  - Implement scroll-based fade-in animation with Framer Motion
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 10.1, 10.2_

- [x] 5. Add mobile navigation with hamburger menu

  - Add mobile menu state management (isOpen)
  - Create hamburger icon button with animation
  - Implement slide-in drawer for mobile navigation
  - Add responsive breakpoint logic (hidden on desktop, visible on mobile)
  - Ensure proper z-index layering
  - _Requirements: 1.7, 8.1, 8.8_

- [x] 6. Create Hero section with CTAs and animations



  - Create src/components/sections/hero.tsx
  - Add "Backed By" section with Google for Startups and Y Combinator badges using Shadcn Badge
  - Implement main heading "Hiring is Broken - We are here to fix it!" with gradient text effect
  - Add descriptive subheading with proper typography
  - Create two CTA buttons: "Get Started" (gradient) and "Onboard Your Company" (outline)
  - Implement fade-in and slide-up animation on mount
  - Add parallax scrolling effect using Framer Motion's useScroll and useTransform
  - Create floating background elements with CSS animations
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 7.1, 7.5, 7.6, 7.7_


- [ ] 7. Implement responsive layout for Hero section

  - Add responsive typography scaling (text-4xl → text-6xl)
  - Implement mobile stacking for badges and buttons
  - Ensure proper spacing on all breakpoints


  - _Requirements: 2.7, 8.1, 8.2, 8.3, 8.4_

- [ ] 8. Create Features section with card grid

  - Create src/components/sections/features.tsx
  - Add section title "Why CoFounds Delivers Results — Not Just Listings"
  - Define features data array with 6 features (Briefcase, Target, RefreshCw, Users, Sparkles, Shield icons)
  - Implement responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
  - Create feature cards using Shadcn Card component

  - Add icon with gradient background circle for each card
  - Display title and description for each feature
  - _Requirements: 3.1, 3.2, 3.3, 3.7, 8.5, 8.6, 8.7_

- [ ] 9. Add hover effects and animations to feature cards

  - Implement hover effects: lift (translateY -8px), scale (1.02), shadow increase


  - Add gradient border on hover using pseudo-elements
  - Implement stagger animation on scroll using Framer Motion
  - Add fade-in animation when section enters viewport
  - _Requirements: 3.4, 3.5, 3.6, 7.1, 7.2, 7.5, 7.7_

- [ ] 10. Create FAQ section with accordion

  - Create src/components/sections/faq.tsx
  - Add section title "Everything you need to know about Cofounds"
  - Define FAQ data array with 5 questions and answers


  - Implement Shadcn Accordion component with single expansion mode
  - Create description card with "Cofounds is a modern job search companion..." text
  - Implement two-column layout on desktop (accordion left, description right)
  - Add single column stacked layout for mobile
  - Implement fade-in animation on scroll
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 7.1_

- [ ] 11. Create Newsletter section with form and footer

  - Create src/components/sections/newsletter.tsx
  - Add gradient background (dark purple to dark blue)
  - Add section title "SUBSCRIBE TO OUR NEWSLETTER"

  - Add description text explaining newsletter benefits
  - Implement email input field with Shadcn Input component
  - Add integrated subscribe button
  - Create form validation schema using zod (email validation)
  - Implement form handling with react-hook-form
  - Add loading state during submission
  - Display success/error feedback


  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 10.5_

- [ ] 12. Add social media icons and footer to Newsletter section

  - Add GitHub and LinkedIn social media icons using Lucide React
  - Implement hover effects on social icons (color transition, scale)
  - Add footer text "© 2025 Cofounds. All rights reserved | Privacy | Terms"
  - Implement fade-in animation on scroll


  - _Requirements: 5.6, 5.7, 7.1, 7.2_

- [ ] 13. Compose main landing page

  - Update src/app/page.tsx to import all section components
  - Wrap page with ThemeProvider
  - Compose sections in order: Navigation, Hero, Features, FAQ, Newsletter
  - Add section IDs for smooth scrolling (features, faq, newsletter)
  - Ensure proper spacing between sections
  - Add smooth scroll behavior to html element
  - _Requirements: 1.8, 7.3_

- [ ] 14. Update root layout with metadata and fonts

  - Update src/app/layout.tsx with SEO metadata (title, description, keywords)
  - Add Open Graph and Twitter card metadata
  - Verify Geist Sans and Geist Mono fonts are properly configured
  - Add suppressHydrationWarning to html element for theme
  - _Requirements: 9.4_

- [ ] 15. Implement accessibility features

  - Add ARIA labels to all interactive elements (buttons, links, form inputs)
  - Add aria-expanded to mobile menu button
  - Add aria-labelledby to sections
  - Ensure proper heading hierarchy (h1 → h2 → h3)
  - Add visible focus indicators with custom styling
  - Add skip-to-content link for screen readers
  - Test keyboard navigation (Tab, Enter, Escape for mobile menu)
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [ ] 16. Optimize images and performance

  - Use Next.js Image component for any images (badges, logos)
  - Implement lazy loading for below-the-fold sections
  - Add will-change CSS property to animated elements
  - Ensure animations use transform and opacity for GPU acceleration
  - Verify smooth scroll performance
  - _Requirements: 9.1, 9.2, 9.3_

- [ ] 17. Final responsive design verification

  - Test layout on mobile breakpoint (< 640px)
  - Test layout on tablet breakpoint (640px - 1024px)
  - Test layout on desktop breakpoint (> 1024px)
  - Verify typography scaling across breakpoints
  - Verify spacing and padding across breakpoints
  - Test mobile hamburger menu functionality
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.8_

- [ ] 18. Polish animations and interactions
  - Verify all fade-in animations trigger on scroll
  - Test parallax effect smoothness in hero section
  - Verify feature card stagger animations
  - Test all hover effects (buttons, cards, icons)
  - Ensure gradient animations are smooth
  - Test mobile menu slide-in animation
  - Verify accordion expand/collapse smoothness
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_
