"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, User, Tag, ChevronRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for Successful Live Streaming Events",
    excerpt: "Discover the essential tips and best practices for planning and executing successful live streaming events that engage your audience and deliver results.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Live Streaming",
    readTime: "5 min read",
    slug: "10-tips-successful-live-streaming-events",
  },
  {
    id: "2",
    title: "The Future of Virtual Events: Trends to Watch",
    excerpt: "Explore emerging trends in virtual events and how technology is reshaping the way we connect, engage, and share experiences in the digital realm.",
    date: "March 10, 2024",
    author: "David Chen",
    category: "Event Management",
    readTime: "8 min read",
    slug: "future-virtual-events-trends",
  },
  {
    id: "3",
    title: "Creating Compelling Video Content for Social Media",
    excerpt: "Learn how to create engaging video content specifically optimized for social media platforms that drives engagement and increases your brand visibility.",
    date: "March 5, 2024",
    author: "Emma Thompson",
    category: "Media Production",
    readTime: "6 min read",
    slug: "creating-compelling-video-content-social-media",
  },
  {
    id: "4",
    title: "How to Build an Effective Digital Marketing Strategy",
    excerpt: "A comprehensive guide to developing a digital marketing strategy that aligns with your business goals and targets your audience effectively across channels.",
    date: "February 28, 2024",
    author: "Michael Rodriguez",
    category: "Digital Marketing",
    readTime: "10 min read",
    slug: "build-effective-digital-marketing-strategy",
  },
  {
    id: "5",
    title: "Behind the Scenes: Corporate Video Production",
    excerpt: "Take a look behind the scenes of a corporate video production and discover the planning, execution, and post-production processes that create professional results.",
    date: "February 20, 2024",
    author: "Jessica Patel",
    category: "Media Production",
    readTime: "7 min read",
    slug: "behind-scenes-corporate-video-production",
  },
  {
    id: "6",
    title: "The Rise of Esports: Opportunities for Brands",
    excerpt: "Explore how brands can leverage the growing esports market to connect with audiences, build community, and create authentic marketing opportunities.",
    date: "February 15, 2024",
    author: "Robert Kim",
    category: "Esports",
    readTime: "9 min read",
    slug: "rise-esports-opportunities-brands",
  },
  {
    id: "7",
    title: "Maximizing ROI for Your Event Marketing Budget",
    excerpt: "Strategies for optimizing your event marketing budget to achieve the best possible return on investment while delivering memorable experiences.",
    date: "February 10, 2024",
    author: "Sarah Johnson",
    category: "Event Management",
    readTime: "6 min read",
    slug: "maximizing-roi-event-marketing-budget",
  },
  {
    id: "8",
    title: "Audio Production Tips for Clear, Professional Sound",
    excerpt: "Essential techniques for capturing high-quality audio in various environments, from interviews and presentations to live events.",
    date: "February 5, 2024",
    author: "David Chen",
    category: "Media Production",
    readTime: "5 min read",
    slug: "audio-production-tips-professional-sound",
  },
];

const categories = [
  "All Categories",
  "Live Streaming",
  "Media Production",
  "Digital Marketing",
  "Event Management",
  "Esports",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our latest articles, tips, and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All Categories"); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline">
                        Read more <ChevronRight size={16} className="ml-1" />
                      </Link>
                      
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-850">
                    <div className="flex items-center">
                      <Tag size={14} className="mr-2 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Stay updated with our latest articles, industry insights, and company news
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white w-full sm:w-96"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
} 