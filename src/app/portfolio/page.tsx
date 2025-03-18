"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/utils/languageContext";

const categories = ["All", "Live Streaming", "Media Production"];

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  client: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "project1",
    title: "TechCon 2023 Virtual Conference",
    category: "Live Streaming",
    description: "A three-day virtual tech conference with multiple tracks, interactive sessions, and real-time audience engagement. We provided end-to-end streaming solutions, including setup, production, and technical support.",
    date: "June 2023",
    client: "TechCon Inc.",
    image: "/images/portfolio/project1.jpg",
  },
  {
    id: "project2",
    title: "Global Music Awards Ceremony",
    category: "Live Streaming",
    description: "Live streaming of an international music awards ceremony to multiple platforms simultaneously. Our team managed multi-camera setups, audio mixing, and real-time graphics integration.",
    date: "September 2023",
    client: "Universal Music Group",
    image: "/images/portfolio/project2.jpg",
  },
  {
    id: "project3",
    title: "Corporate Brand Identity Film",
    category: "Media Production",
    description: "A cinematic brand film showcasing a corporate client's values, mission, and impact. We handled everything from concept development to final delivery, including scriptwriting, filming, and post-production.",
    date: "November 2023",
    client: "Apex Innovations",
    image: "/images/portfolio/project3.jpeg",
  },
  {
    id: "project4",
    title: "Product Launch Campaign",
    category: "Media Production",
    description: "A series of promotional videos and photography for a new product launch. Our team created high-quality visual content for use across digital platforms, advertising, and in-store displays.",
    date: "November 2023",
    client: "Lumina Tech",
    image: "/images/portfolio/project4.jpg",
  },
  {
    id: "project5",
    title: "Annual Charity Gala",
    category: "Live Streaming",
    description: "Live streaming of a charity fundraising event with real-time donation tracking, multiple camera angles, and integration with social media platforms for wider reach and engagement.",
    date: "December 2023",
    client: "Hope Foundation",
    image: "/images/portfolio/project5.jpg",
  },
  {
    id: "project6",
    title: "Documentary Series: Urban Renewal",
    category: "Media Production",
    description: "A five-part documentary series exploring urban renewal projects in major cities. We provided full production services, including location scouting, interviews, drone footage, and post-production.",
    date: "February 2024",
    client: "City Development Coalition",
    image: "/images/portfolio/project6.jpg",
  },
];

export default function PortfolioPage() {
  const { translations } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/portfolio-hero.jpg"
            alt="Our Portfolio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translations['portfolio.hero.title'] || 'Our Portfolio'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {translations['portfolio.hero.subtitle'] || 'Explore our latest work and successful projects'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col h-full"
              >
                <div className="h-56 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/60 transition-opacity">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-blue-600 p-3 rounded-full mx-2"
                      aria-label="View project details"
                    >
                      <Eye size={20} />
                    </button>
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="bg-white text-blue-600 p-3 rounded-full mx-2"
                      aria-label="Go to project page"
                    >
                      <LinkIcon size={20} />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{project.date}</span>
                    <span>{project.client}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="h-72 relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close modal"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Client</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.client}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Date</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.date}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-5 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8">
              Let us help bring your vision to life with our expertise and creative solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-full inline-flex items-center font-medium text-lg transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 