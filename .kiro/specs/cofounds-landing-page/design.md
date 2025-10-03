# Design Document

## Overview

This document outlines the technical design for the CoFounds landing page, a modern, single-page application built with Next.js 15, Shadcn UI, and Tailwind CSS. The landing page will showcase CoFounds' value proposition through five main sections: Navigation, Hero, Features, FAQ, and Newsletter. The design emphasizes performance, accessibility, and a premium user experience with smooth animations and responsive layouts.

### Technology Stack

- **Framework**: Next.js 15.5.4 with App Router and Turbopack
- **UI Library**: Shadcn UI components (pre-installed: Button, NavigationMenu, Badge, Card, Accordion, Input, Form, Label)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion for scroll-based and interactive animations
- **Icons**: Lucide React (already installed)
- **Fonts**: Geist Sans and Geist Mono (already configured)
- **Type Safety**: TypeScript 5

### Design Principles

1. **Component-Based Architecture**: Modular, reusable components for maintainability
2. **Mobile-First Responsive Design**: Progressive enhancement from mobile to desktop
3. **Performance-First**: Optimized images, lazy loading, and efficient animations
4. **Accessibility-First**: WCAG 2.1 AA compliance with proper ARIA labels and keyboard navigation
5. **Dark Theme**: Modern dark aesthetic with gradient accents

## Architecture

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page composition
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── sections/
│   │   ├── navigation.tsx  # Sticky header with navigation
│   │   ├── hero.tsx        # Hero section with CTAs
│   │   ├── features.tsx    # Feature cards grid
│   │   ├── faq.tsx         # FAQ accordion with description
│   │   └── newsletter.tsx  # Newsletter signup and footer
│   ├── ui/                 # Shadcn UI components (existing)
│   └── theme-provider.tsx  # Dark mode context provider
└── lib/
    └── utils.ts            # Utility functions (existing)
```

### Component Hierarchy

```
page.tsx
├── ThemeProvider
│   ├── Navigation
│   ├── Hero
│   ├── Features
│   ├── FAQ
│   └── Newsletter
```

## Components and Interfaces

### 1. Theme Provider Component

**Purpose**: Manage dark mode state and provide theme context to all components.

**Interface**:
```typescript
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'dark' | 'light' | 'system';
  storageKey?: string;
}

interface ThemeContextType {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}
```

**Implementation Details**:
- Use React Context API for theme state management
- Persist theme preference in localStorage
- Apply theme class to document root
- Prevent flash of unstyled content (FOUC) with script injection

### 2. Navigation Component

**Purpose**: Provide sticky navigation with smooth scrolling and mobile responsiveness.

**Interface**:
```typescript
interface NavigationProps {
  className?: string;
}

interface NavLink {
  label: string;
  href: string;
}
```

**Implementation Details**:
- Sticky positioning with backdrop-blur glass morphism effect
- Desktop: Horizontal navigation with Shadcn NavigationMenu
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections using `scrollIntoView` with behavior: 'smooth'
- Dark mode toggle button integrated
- Gradient "Get Started" button
- Fade-in animation on scroll using Framer Motion
- Z-index: 50 to stay above other content

**State Management**:
- `isScrolled`: boolean for backdrop blur activation
- `isMobileMenuOpen`: boolean for mobile menu state

### 3. Hero Component

**Purpose**: Capture attention with compelling headline and clear CTAs.

**Interface**:
```typescript
interface HeroProps {
  className?: string;
}

interface BackerBadge {
  name: string;
  logo: string;
}
```

**Implementation Details**:
- Container with max-width and centered content
- "Backed By" badges using Shadcn Badge component
- Gradient text effect using Tailwind gradient utilities
- Two CTA buttons: Primary (gradient) and Secondary (outline)
- Parallax scrolling effect using Framer Motion's `useScroll` and `useTransform`
- Floating animated background elements using CSS animations
- Responsive typography scaling (text-4xl on mobile to text-6xl on desktop)

**Animations**:
- Fade-in and slide-up on mount
- Parallax effect on scroll (translateY based on scroll position)
- Floating elements with infinite CSS animations

### 4. Features Component

**Purpose**: Showcase CoFounds' key differentiators in an engaging grid layout.

**Interface**:
```typescript
interface FeaturesProps {
  className?: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

**Implementation Details**:
- Responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Feature cards using Shadcn Card component
- Icon with gradient background circle
- Hover effects: translateY(-8px), scale(1.02), shadow increase
- Gradient border on hover using pseudo-elements
- Stagger animation on scroll using Framer Motion's `staggerChildren`

**Features Data**:
```typescript
const features: Feature[] = [
  {
    icon: Briefcase,
    title: "Built for Job Seekers",
    description: "Designed with your career goals in mind..."
  },
  // ... 5 more features
];
```

**Animations**:
- Container: Fade-in when entering viewport
- Cards: Stagger animation with 0.1s delay between each
- Hover: Smooth transform and shadow transitions

### 5. FAQ Component

**Purpose**: Answer common questions with expandable accordion interface.

**Interface**:
```typescript
interface FAQProps {
  className?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}
```

**Implementation Details**:
- Two-column layout on desktop: Accordion (left), Description card (right)
- Single column on mobile: Stacked vertically
- Shadcn Accordion component with single expansion mode
- Smooth expand/collapse animations
- Description card with gradient border accent

**FAQ Data**:
```typescript
const faqs: FAQItem[] = [
  {
    question: "What is Cofounds?",
    answer: "Cofounds is a modern job search platform..."
  },
  // ... 4 more FAQs
];
```

**Animations**:
- Fade-in on scroll
- Accordion smooth height transitions (built into Shadcn)

### 6. Newsletter Component

**Purpose**: Capture email subscriptions and provide footer information.

**Interface**:
```typescript
interface NewsletterProps {
  className?: string;
}

interface NewsletterFormData {
  email: string;
}
```

**Implementation Details**:
- Gradient background (purple to blue)
- Email input with integrated submit button using Shadcn Form components
- Form validation using react-hook-form and zod
- Loading state during submission
- Success/error toast notifications
- Social media icons (GitHub, LinkedIn) with hover effects
- Footer text with links

**Form Validation**:
```typescript
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
```

**State Management**:
- `isSubmitting`: boolean for loading state
- Form state managed by react-hook-form

**Animations**:
- Fade-in on scroll
- Button hover effects with scale and gradient shift
- Social icon hover effects with color transition

## Data Models

### Theme Configuration

```typescript
type Theme = 'dark' | 'light';

interface ThemeConfig {
  theme: Theme;
  systemTheme: Theme;
}
```

### Navigation Links

```typescript
interface NavLink {
  label: string;
  href: string; // Section ID for smooth scrolling
}

const navLinks: NavLink[] = [
  { label: "Why Cofounds", href: "#features" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#newsletter" },
  { label: "Join Community", href: "#newsletter" },
];
```

### Feature Data

```typescript
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

### FAQ Data

```typescript
interface FAQItem {
  question: string;
  answer: string;
}
```

## Styling and Design System

### Color Palette

The application uses Tailwind CSS v4 with custom design tokens defined in `globals.css`:

```css
:root {
  /* Base colors */
  --background: #0A0A0A;
  --foreground: #FFFFFF;
  
  /* Card colors */
  --card: #1A1A1A;
  --card-foreground: #FFFFFF;
  
  /* Primary gradient */
  --gradient-from: #3B82F6; /* Blue */
  --gradient-to: #A855F7;   /* Purple */
  
  /* Accent colors */
  --accent-cyan: #06B6D4;
  --accent-purple: #A855F7;
  --accent-blue: #3B82F6;
  
  /* Text colors */
  --text-primary: #FFFFFF;
  --text-secondary: #9CA3AF; /* Gray-400 */
}
```

### Typography Scale

```css
/* Hero heading */
.hero-heading {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold;
  background: linear-gradient(to right, #3B82F6, #A855F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Section heading */
.section-heading {
  @apply text-2xl md:text-3xl font-semibold;
}

/* Body text */
.body-text {
  @apply text-base font-medium leading-relaxed;
}
```

### Spacing System

Following Tailwind's default spacing scale with custom additions:

- Container max-width: `max-w-7xl`
- Section padding: `py-16 md:py-24 lg:py-32`
- Component gap: `gap-8 md:gap-12`

### Responsive Breakpoints

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

## Animations and Interactions

### Framer Motion Configuration

**Scroll-based Animations**:

```typescript
// Fade-in on scroll
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Parallax effect
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);
```

**Hover Animations**:

```typescript
// Card hover
const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

### CSS Animations

**Floating Elements**:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}
```

**Gradient Animation**:

```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

## Performance Optimization

### Image Optimization

- Use Next.js `Image` component for all images
- Implement lazy loading for below-the-fold images
- Provide appropriate sizes and srcSet for responsive images
- Use WebP format with fallbacks

### Code Splitting

- Automatic code splitting via Next.js App Router
- Dynamic imports for heavy components (if needed)
- Lazy load Framer Motion animations

### Animation Performance

- Use `transform` and `opacity` for animations (GPU-accelerated)
- Implement `will-change` CSS property sparingly
- Use `IntersectionObserver` for scroll-based animations
- Debounce scroll event listeners

### Bundle Optimization

- Tree-shake unused Lucide icons
- Minimize Framer Motion bundle by importing only needed features
- Use Tailwind's purge feature to remove unused CSS

## Accessibility

### Keyboard Navigation

- All interactive elements accessible via Tab key
- Visible focus indicators with custom styling
- Skip-to-content link for screen readers
- Proper tab order throughout the page

### ARIA Labels

```typescript
// Navigation
<nav aria-label="Main navigation">
  <button aria-label="Toggle mobile menu" aria-expanded={isOpen}>

// Sections
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Why CoFounds Delivers Results</h2>

// Form
<form aria-label="Newsletter subscription">
  <input aria-label="Email address" aria-required="true">
```

### Screen Reader Support

- Semantic HTML elements (nav, main, section, article, footer)
- Descriptive alt text for all images
- ARIA live regions for dynamic content updates
- Proper heading hierarchy (h1 → h2 → h3)

### Color Contrast

- Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
- Test gradient text for sufficient contrast
- Provide alternative visual cues beyond color

## Error Handling

### Form Validation

```typescript
// Newsletter form
const handleSubmit = async (data: NewsletterFormData) => {
  try {
    setIsSubmitting(true);
    // API call simulation
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Success handling
    toast.success("Successfully subscribed!");
    reset();
  } catch (error) {
    // Error handling
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Navigation Error Handling

```typescript
// Smooth scroll with fallback
const scrollToSection = (id: string) => {
  try {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    console.error('Scroll error:', error);
    // Fallback to instant scroll
    window.location.hash = id;
  }
};
```

### Theme Toggle Error Handling

```typescript
// Safe localStorage access
const getStoredTheme = (): Theme => {
  try {
    const stored = localStorage.getItem('theme');
    return stored === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark'; // Default fallback
  }
};
```

## Testing Strategy

### Component Testing

**Unit Tests** (Optional):
- Test theme provider context and state management
- Test form validation logic
- Test utility functions

**Integration Tests** (Optional):
- Test navigation smooth scrolling
- Test mobile menu open/close
- Test form submission flow
- Test theme toggle functionality

### Visual Testing

- Manual testing across breakpoints (mobile, tablet, desktop)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Dark mode visual verification
- Animation smoothness verification

### Accessibility Testing

- Automated testing with axe-core or similar tools
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification

### Performance Testing

- Lighthouse audit (target: 90+ performance score)
- Core Web Vitals monitoring (LCP, FID, CLS)
- Bundle size analysis
- Animation frame rate monitoring

## SEO and Metadata

### Meta Tags

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'CoFounds - Fixing the Broken Hiring Process',
  description: 'CoFounds is a modern job search platform that delivers results, not just listings. Apply smarter with personalized job discovery and community-driven insights.',
  keywords: ['job search', 'hiring', 'careers', 'job board', 'recruitment'],
  authors: [{ name: 'CoFounds' }],
  openGraph: {
    title: 'CoFounds - Fixing the Broken Hiring Process',
    description: 'Apply smarter with personalized job discovery',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoFounds - Fixing the Broken Hiring Process',
    description: 'Apply smarter with personalized job discovery',
  },
};
```

### Structured Data

```typescript
// JSON-LD for organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CoFounds",
  "description": "Modern job search platform",
  "url": "https://cofounds.com",
};
```

## Deployment Considerations

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://cofounds.com
NEXT_PUBLIC_NEWSLETTER_API=https://api.cofounds.com/newsletter
```

### Build Configuration

```typescript
// next.config.ts
const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

### Performance Targets

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

## Future Enhancements

1. **Analytics Integration**: Add Google Analytics or similar for user behavior tracking
2. **A/B Testing**: Implement feature flags for testing different CTAs and layouts
3. **Internationalization**: Add i18n support for multiple languages
4. **Blog Integration**: Add a blog section for content marketing
5. **Interactive Demos**: Add interactive product demos in the features section
6. **Video Content**: Integrate video testimonials or product walkthroughs
7. **Advanced Animations**: Add more sophisticated scroll-triggered animations
8. **Progressive Web App**: Add PWA capabilities for offline support

## Design Decisions and Rationales

### Why Framer Motion?

- Industry-standard animation library with excellent TypeScript support
- Declarative API that's easier to maintain than imperative animations
- Built-in scroll-based animation hooks
- Optimized for performance with automatic GPU acceleration

### Why Dark Theme Default?

- Modern aesthetic that aligns with developer-focused products
- Reduces eye strain for users browsing in low-light conditions
- Allows gradient accents to pop more effectively
- Aligns with current design trends in tech products

### Why Component-Based Architecture?

- Easier to maintain and test individual components
- Promotes code reusability
- Simplifies collaboration in team environments
- Aligns with React and Next.js best practices

### Why Mobile-First Approach?

- Majority of web traffic comes from mobile devices
- Ensures core functionality works on all devices
- Progressive enhancement is easier than graceful degradation
- Better performance on lower-powered devices

## Conclusion

This design document provides a comprehensive blueprint for implementing the CoFounds landing page. The architecture emphasizes modularity, performance, and user experience while maintaining code quality and accessibility standards. The component-based approach ensures scalability and maintainability as the project grows.
