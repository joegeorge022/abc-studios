"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, PlayCircle, Tv, Camera, BarChart, Calendar, Trophy } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isThirdHovered, setIsThirdHovered] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const firstAnim = gsap.to(firstTextRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
      
      const secondAnim = gsap.to(secondTextRef.current, {
        xPercent: 100,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
      
      const thirdAnim = gsap.to(thirdTextRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 22,
        ease: "linear",
      });
      
      if (isFirstHovered) {
        firstAnim.timeScale(0.2);
      } else {
        firstAnim.timeScale(1);
      }
      
      if (isSecondHovered) {
        secondAnim.timeScale(0.2);
      } else {
        secondAnim.timeScale(1);
      }
      
      if (isThirdHovered) {
        thirdAnim.timeScale(0.2);
      } else {
        thirdAnim.timeScale(1);
      }
    }
    
    return () => {
      gsap.killTweensOf([firstTextRef.current, secondTextRef.current, thirdTextRef.current]);
    };
  }, [isFirstHovered, isSecondHovered, isThirdHovered]);

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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
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
          
          {/* Scroll down indicator */}
          <motion.div 
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0]
            }}
            transition={{ 
              delay: 1.5,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <span className="text-sm mb-2 font-light tracking-wider">SCROLL</span>
            <ChevronRight size={24} className="rotate-90" />
          </motion.div>
        </div>
      </section>
      
      <div className="h-24 bg-gradient-to-b from-black/95 to-black"></div>
      
      <section className="bg-black pt-16 pb-16 overflow-hidden relative">
        {/* Animated background particles/dots */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="absolute top-3/4 left-1/2 w-2 h-2 rounded-full bg-blue-300"></div>
          <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="absolute top-1/2 left-1/5 w-2 h-2 rounded-full bg-purple-300"></div>
          <div className="absolute top-1/5 left-2/3 w-2 h-2 rounded-full bg-purple-400"></div>
        </div>
        
        <div className="relative">
          {/* First line of text - right to left */}
          <div className="mb-10 whitespace-nowrap overflow-hidden">
            <div 
              ref={firstTextRef} 
              className="inline-block text-5xl md:text-7xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white cursor-pointer"
              style={{ transform: "translateX(0)" }}
              onMouseEnter={() => setIsFirstHovered(true)}
              onMouseLeave={() => setIsFirstHovered(false)}
            >
              <span className="mx-4">CREATIVE EXCELLENCE</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">INNOVATIVE SOLUTIONS</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">CUTTING EDGE TECHNOLOGY</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">CREATIVE EXCELLENCE</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">INNOVATIVE SOLUTIONS</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">CUTTING EDGE TECHNOLOGY</span>
            </div>
          </div>
          
          {/* Second line of text - left to right */}
          <div className="mb-10 whitespace-nowrap overflow-hidden">
            <div 
              ref={secondTextRef} 
              className="inline-block text-5xl md:text-7xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 cursor-pointer"
              style={{ transform: "translateX(-100%)" }}
              onMouseEnter={() => setIsSecondHovered(true)}
              onMouseLeave={() => setIsSecondHovered(false)}
            >
              <span className="mx-4">PROFESSIONAL PRODUCTION</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">EXPERT DELIVERY</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">SUPERIOR QUALITY</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">PROFESSIONAL PRODUCTION</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">EXPERT DELIVERY</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">SUPERIOR QUALITY</span>
            </div>
          </div>
          
          {/* Third line of text - right to left */}
          <div className="whitespace-nowrap overflow-hidden">
            <div 
              ref={thirdTextRef} 
              className="inline-block text-5xl md:text-7xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white cursor-pointer"
              style={{ transform: "translateX(0)" }}
              onMouseEnter={() => setIsThirdHovered(true)}
              onMouseLeave={() => setIsThirdHovered(false)}
            >
              <span className="mx-4">TRANSFORM YOUR BRAND</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">CAPTIVATE YOUR AUDIENCE</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">ELEVATE YOUR PRESENCE</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">TRANSFORM YOUR BRAND</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">CAPTIVATE YOUR AUDIENCE</span>
              <span className="mx-4 text-white">•</span>
              <span className="mx-4">ELEVATE YOUR PRESENCE</span>
            </div>
          </div>
          
          {/* Gradient overlays for better effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
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
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <motion.div 
                className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.5)", "0 0 0 10px rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Tv className="text-blue-600 dark:text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Live Streaming</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Professional live streaming solutions for virtual and hybrid events, conferences, and more.
              </p>
              <Link 
                href="/services#livestreaming" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span> 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-1 inline-block"
                >
                  <ChevronRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Media Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <motion.div 
                className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.5)", "0 0 0 10px rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5
                }}
              >
                <Camera className="text-blue-600 dark:text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Media Production</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                High-quality videography, photography, and video editing services for all types of projects.
              </p>
              <Link 
                href="/services#mediaproduction" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span> 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-1 inline-block"
                >
                  <ChevronRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <motion.div 
                className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.5)", "0 0 0 10px rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1
                }}
              >
                <BarChart className="text-blue-600 dark:text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Comprehensive digital marketing solutions including social media management, SEO, and ad campaigns.
              </p>
              <Link 
                href="/services#digitalmarketing" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span> 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-1 inline-block"
                >
                  <ChevronRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Event Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <motion.div 
                className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.5)", "0 0 0 10px rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5
                }}
              >
                <Calendar className="text-blue-600 dark:text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Event Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                End-to-end event planning and execution services for corporate events, conferences, and workshops.
              </p>
              <Link 
                href="/services#eventmanagement" 
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span> 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-1 inline-block"
                >
                  <ChevronRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Esports Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient with animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}></div>
          </div>
          
          {/* Animated dots/particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 w-6 h-6 rounded-full bg-purple-400 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-2/4 left-3/4 w-3 h-3 rounded-full bg-yellow-400 opacity-30 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/3 left-2/3 w-5 h-5 rounded-full bg-blue-300 opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <motion.div 
                className="bg-white/10 p-4 rounded-full w-fit mb-8 backdrop-blur-sm"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(255, 211, 68, 0.5)", "0 0 0 10px rgba(255, 211, 68, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Trophy className="text-yellow-400" size={36} />
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Esports Services
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Take your gaming experience to the next level with our comprehensive Esports services. Register for events, connect with players, and compete for glory.
              </motion.p>
              
              <div className="space-y-5 mb-10">
                {[
                  "Tournament organization and management",
                  "Live match streaming and commentary",
                  "Player matching and scheduling",
                  "Real-time leaderboards and statistics"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <ChevronRight className="mt-0.5 mr-3 text-yellow-400" />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/esports" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full inline-flex items-center font-semibold text-lg transition-all hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  Explore Esports <ChevronRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10">
          <Image
                  src="/esports.jpg"
                  alt="Esports Event"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2"></div>
                    <span className="text-sm font-semibold">LIVE TOURNAMENTS</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Championship Series</h3>
                  <p className="text-white/80">Join our next major tournament</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 opacity-30 rounded-full blur-xl z-0"></div>
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
