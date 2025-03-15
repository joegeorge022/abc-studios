"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, PlayCircle, Tv, Camera, BarChart, Calendar, Trophy } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero-bg.jpg"
            alt="Media Production Background"
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
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bringing Your Vision to Life
            </h1>
            <p className="text-xl text-white/90 mb-8">
              ABC Studios specializes in live streaming, media production, digital marketing, event management and Esports services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center font-medium text-lg transition-colors"
                >
                  Contact Us <ChevronRight className="ml-2" size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/portfolio" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full inline-flex items-center font-medium text-lg hover:bg-white/10 transition-colors"
                >
                  Our Work <PlayCircle className="ml-2" size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              We offer a comprehensive range of media and event services to meet your needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Live Streaming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-6">
                <Tv className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Streaming</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Professional live streaming solutions for virtual and hybrid events, conferences, and more.
              </p>
              <Link 
                href="/services#livestreaming" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            {/* Media Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-6">
                <Camera className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Media Production</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                High-quality videography, photography, and video editing services for all types of projects.
              </p>
              <Link 
                href="/services#mediaproduction" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            {/* Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-6">
                <BarChart className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive digital marketing solutions including social media management, SEO, and ad campaigns.
              </p>
              <Link 
                href="/services#digitalmarketing" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            {/* Event Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-6">
                <Calendar className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                End-to-end event planning and execution services for corporate events, conferences, and workshops.
              </p>
              <Link 
                href="/services#eventmanagement" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
          >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Esports Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/10 p-3 rounded-full w-fit mb-6">
                <Trophy className="text-yellow-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Esports Services</h2>
              <p className="text-xl mb-8 text-blue-100">
                Take your gaming experience to the next level with our comprehensive Esports services. Register for events, connect with players, and compete for glory.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-300" />
                  <span>Tournament organization and management</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-300" />
                  <span>Live match streaming and commentary</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-300" />
                  <span>Player matching and scheduling</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-300" />
                  <span>Real-time leaderboards and statistics</span>
                </li>
              </ul>
              <Link 
                href="/esports" 
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-full inline-flex items-center font-medium text-lg transition-colors"
              >
                Explore Esports <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
                src="/esports.jpg" 
                alt="Esports Tournament" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTAs */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us today to discuss your requirements and get a free quote.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900/50 p-10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Want to join our team?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore career opportunities and be part of our creative journey.
              </p>
              <Link 
                href="/careers" 
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                View Openings
              </Link>
            </motion.div>
          </div>
    </div>
      </section>
    </>
  );
}
