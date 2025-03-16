# ABC-studios

**Live Site: [https://abc-studios.vercel.app/](https://abc-studios.vercel.app/)**

## Project Documentation

### Technology Stack Overview

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Animations and UI/UX effects** | GSAP, Framer Motion |
| **Styling** | TailwindCSS, CSS Modules, CSS Variables |
| **Backend** | Supabase (PostgreSQL), REST API, Server Actions |
| **Authentication** | Basic Auth, Environment Variables, Middleware |
| **External APIs** | YouTube Data API v3,GROQ API, Google Maps API  |
| **AI/ML** | Llama3 70B parameter model chatbot |
| **Tooling** | ESLint, TypeScript, npm, Git, Prettier |
| **Deployment** | [Vercel](https://abc-studios.vercel.app/) |
| **Authentication** | HTTP authentication to access admin tab. |

### Technologies Used

- **Frontend Framework**: 
  - Next.js 14 with App Router
  - React 18 with TypeScript
  - Server and Client Components

- **Styling**: 
  - TailwindCSS with custom theme
  - CSS Modules
  - CSS Variables for theming
  - Responsive design principles

- **State Management**:
  - React Context API
  - React Hooks (useState, useEffect, useRef, useContext)
  - Custom hook patterns

- **Animations and UI Effects**: 
  - GSAP (GreenSock Animation Platform) for advanced homepage animations
  - Framer Motion for page transitions and micro-interactions
  - CSS Transitions and keyframes
  - Intersection Observer API for scroll animations

- **Icons and UI Elements**: 
  - Lucide React for consistent iconography
  - Custom SVG assets
  - Responsive image handling

- **Backend & Data Management**:
  - Supabase (PostgreSQL) for database
  - REST API endpoints
  - Server actions for form submissions
  - Data fetching with SWR for optimized caching

- **Authentication & Security**: 
  - Basic authentication for admin section
  - Environment variables for API keys
  - Middleware for protected routes
  - Form validation and sanitization

- **External APIs Integration**: 
  - YouTube Data API v3 for live esports streaming with fallback mechanisms
  - Google Maps API for interactive location display
  - GROQ API for AI-powered features
  - Error handling and graceful degradation
  - Rate limiting management

- **AI Integration**:
  - GROQ API for accessing large language models
  - Llama3 70B parameter model for the intelligent chatbot assistant
  - Context-aware responses in the AI chat feature
  - Optimized prompt engineering for relevant results

- **Accessibility**:
  - ARIA attributes
  - Keyboard navigation
  - Screen reader support
  - Color contrast compliance
  - Font size adjustments
  - Focus management

- **Performance Optimization**:
  - Image optimization with Next.js Image
  - Code splitting
  - Lazy loading components
  - Font optimization
  - Minimizing bundle size
  - Asset compression

- **Development Tools**:
  - ESLint for code quality
  - TypeScript for type safety
  - npm for package management
  - Git for version control
  - Prettier for consistent code formatting

- **Deployment**: 
  - Vercel for hosting and continuous deployment
  - Environment variable management
  - Preview deployments for pull requests

### Design Decisions and Rationale

1. **Modern UI/UX Approach**:
   - Dark-themed interface with vibrant accents for a premium, professional look
   - Responsive design that adapts to all device sizes
   - Strategic use of animations to enhance user engagement without affecting performance

2. **Component Architecture**:
   - Modular component structure for maintainability and reusability
   - Consistent visual language across all pages
   - Custom avatar system using initials and color-coding for user identification

3. **Performance Optimizations**:
   - Image optimization using Next.js Image component
   - Lazy loading of off-screen content
   - Client-side API data caching
   - Reduced API calls for YouTube data to avoid quota limitations

4. **Accessibility Features**:
   - Text size adjustment controls via accessibility button
   - High contrast color schemes
   - Semantic HTML structure
   - Keyboard navigation support
   - Screen reader compatible components

### Known Limitations and Unfinished Features

1. **API Limitations**:
   - YouTube Data API has quota restrictions that limit live stream fetching.
   - Currently using fallback content when API limits are reached.
   
2. **Features In Progress**:
   - User authentication system for esports event registration
   - Payment processing integration for tournament registration. (None of the team member's don't have a pancard to implement this feature.)
   - Matchmaking system between registered participants
   - Multi-language support functionality

3. **Future Enhancements Planned**:
   - Enhanced animations using Framer Motion
   - Social media auto-posting for new blog posts or esports events

