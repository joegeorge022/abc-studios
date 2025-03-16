# 🎬 ABC-studios

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

  ### ✨ [Live Site](https://abc-studios.vercel.app/) ✨
  
  <p>A modern digital studio platform with AI integration, esports streaming, and interactive content</p>
  
</div>

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Detailed Technologies](#-detailed-technologies)
- [Design Decisions](#-design-decisions)
- [Limitations & Roadmap](#-limitations--roadmap)

## 🚀 Project Overview

ABC Studios is a comprehensive digital production platform that combines modern web technologies with AI-powered features, esports integration, and responsive design principles to create an engaging and accessible user experience.

---

## 💻 Technology Stack

<table>
  <tr>
    <th>Category</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td><b>🖥️ Frontend</b></td>
    <td>Next.js 14, React 18, TypeScript</td>
  </tr>
  <tr>
    <td><b>✨ Animations</b></td>
    <td>GSAP, Framer Motion</td>
  </tr>
  <tr>
    <td><b>🎨 Styling</b></td>
    <td>TailwindCSS, CSS Modules, CSS Variables</td>
  </tr>
  <tr>
    <td><b>🗄️ Backend</b></td>
    <td>Supabase (PostgreSQL), REST API, Server Actions</td>
  </tr>
  <tr>
    <td><b>🔒 Authentication</b></td>
    <td>Basic Auth, Environment Variables, Middleware</td>
  </tr>
  <tr>
    <td><b>🔌 External APIs</b></td>
    <td>YouTube Data API v3, GROQ API, Google Maps API</td>
  </tr>
  <tr>
    <td><b>🤖 AI/ML</b></td>
    <td>Llama3 70B parameter model chatbot</td>
  </tr>
  <tr>
    <td><b>🛠️ Tooling</b></td>
    <td>ESLint, TypeScript, npm, Git, Prettier</td>
  </tr>
  <tr>
    <td><b>🚀 Deployment</b></td>
    <td><a href="https://abc-studios.vercel.app/">Vercel</a></td>
  </tr>
</table>

---

## 📚 Detailed Technologies

### 🖥️ Frontend Framework

- Next.js 14 with App Router
- React 18 with TypeScript
- Server and Client Components

### 🎨 Styling

- TailwindCSS with custom theme
- CSS Modules
- CSS Variables for theming
- Responsive design principles

### 📊 State Management

- React Context API
- React Hooks (useState, useEffect, useRef, useContext)
- Custom hook patterns

### ✨ Animations and UI Effects

- GSAP (GreenSock Animation Platform) for advanced homepage animations
- Framer Motion for page transitions and micro-interactions
- CSS Transitions and keyframes
- Intersection Observer API for scroll animations

### 🎭 Icons and UI Elements

- Lucide React for consistent iconography
- Custom SVG assets
- Responsive image handling

### 🗄️ Backend & Data Management

- Supabase (PostgreSQL) for database
- REST API endpoints
- Server actions for form submissions
- Data fetching with SWR for optimized caching

### 🔒 Authentication & Security

- Basic authentication for admin section
- Environment variables for API keys
- Middleware for protected routes
- Form validation and sanitization

### 🔌 External APIs Integration

- YouTube Data API v3 for live esports streaming with fallback mechanisms
- Google Maps API for interactive location display
- GROQ API for AI-powered features
- Error handling and graceful degradation
- Rate limiting management

### 🤖 AI Integration

- GROQ API for accessing large language models
- Llama3 70B parameter model for the intelligent chatbot assistant
- Context-aware responses in the AI chat feature
- Optimized prompt engineering for relevant results

### ♿ Accessibility

- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Font size adjustments
- Focus management

### ⚡ Performance Optimization

- Image optimization with Next.js Image component
- Code splitting
- Lazy loading components
- Font optimization
- Minimizing bundle size
- Asset compression

### 🛠️ Development Tools

- ESLint for code quality
- TypeScript for type safety
- npm for package management
- Git for version control
- Prettier for consistent code formatting

### 🚀 Deployment

- Vercel for hosting and continuous deployment
- Environment variable management
- Preview deployments for pull requests

---

## 🎯 Design Decisions

### 🎭 Modern UI/UX Approach

> *"Design is not just what it looks like and feels like. Design is how it works."* – Steve Jobs

- Dark-themed interface with vibrant accents for a premium, professional look
- Responsive design that adapts to all device sizes
- Strategic use of animations to enhance user engagement without affecting performance

### 🧩 Component Architecture

- Modular component structure for maintainability and reusability
- Consistent visual language across all pages
- Custom avatar system using initials and color-coding for user identification

### ⚡ Performance Optimizations

- Image optimization using Next.js Image component
- Lazy loading of off-screen content
- Client-side API data caching
- Reduced API calls for YouTube data to avoid quota limitations

### ♿ Accessibility Features

- Text size adjustment controls via accessibility button
- High contrast color schemes
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatible components

---

## 🔍 Limitations & Roadmap

### 🚧 Current Limitations

- **API Restrictions**: YouTube Data API has quota limitations that affect live stream fetching
- **Fallback Content**: Using pre-defined content when API limits are reached

### 🔮 Features In Progress

- **Payment Processing**: Integration for tournament registration
- **User Authentication**: Enhanced system for esports event registration
- **Matchmaking System**: For connecting registered participants
- **Multi-language Support**: Internationalization functionality

### 📈 Future Enhancements

- Enhanced animations using Framer Motion
- Social media auto-posting for new blog posts or esports events

