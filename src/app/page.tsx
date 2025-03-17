"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, PlayCircle, Tv, Camera, BarChart, Calendar, Trophy, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/utils/languageContext";

export default function Home() {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isThirdHovered, setIsThirdHovered] = useState(false);
  const { translations } = useLanguage();
  
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
              {translations['hero.title'] || 'Bringing Your Digital Vision to Life'}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {translations['hero.subtitle'] || 'We create stunning digital solutions that transform businesses'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                {translations['hero.cta'] || 'Get Started'} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                {translations['hero.learnMore'] || 'Learn More'} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
          <span className="text-sm font-light mb-2">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <ArrowRight className="transform rotate-90 w-5 h-5" />
          </motion.div>
        </div>
      </section>
      
      {/* Transition to scrolling text section */}
      <div className="h-6 bg-gradient-to-b from-black/95 to-black"></div>
      
      <section className="bg-black pt-6 pb-16 overflow-hidden relative">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
          <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/5 w-2 h-2 rounded-full bg-purple-300 animate-pulse"></div>
          <div className="absolute top-1/5 left-2/3 w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-10 left-[20%] w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"></div>
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
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-950/20">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/20 filter blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-44 h-44 rounded-full bg-indigo-500/10 filter blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 15a15 15 0 0 0 15 15m0-30a15 15 0 0 1 15 15m-30 0h30M15 0v30\" stroke=\"%236366f1\" stroke-opacity=\".05\" fill=\"none\"/%3E%3C/svg%3E')" }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/30 p-4 rounded-full w-fit mb-8"
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
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300">Live Streaming</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(79, 70, 229, 0.5)", "0 0 0 10px rgba(79, 70, 229, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5
                }}
              >
                <Camera className="text-indigo-600 dark:text-indigo-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300">Media Production</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                High-quality videography, photography, and video editing services for all types of projects.
              </p>
              <Link 
                href="/services#mediaproduction" 
                className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center group"
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-800/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(126, 34, 206, 0.5)", "0 0 0 10px rgba(126, 34, 206, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1
                }}
              >
                <BarChart className="text-purple-600 dark:text-purple-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300">Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive digital marketing solutions including social media management, SEO, and ad campaigns.
              </p>
              <Link 
                href="/services#digitalmarketing" 
                className="text-purple-600 dark:text-purple-400 font-medium inline-flex items-center group"
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-violet-100 to-violet-50 dark:from-violet-900/50 dark:to-violet-800/30 p-4 rounded-full w-fit mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(124, 58, 237, 0.5)", "0 0 0 10px rgba(124, 58, 237, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5
                }}
              >
                <Calendar className="text-violet-600 dark:text-violet-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500 dark:from-violet-400 dark:to-violet-300">Event Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                End-to-end event planning and execution services for corporate events, conferences, and workshops.
              </p>
              <Link 
                href="/services#eventmanagement" 
                className="text-violet-600 dark:text-violet-400 font-medium inline-flex items-center group"
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
      <section id="esports" className="py-24 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#090321] to-gray-950">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "linear-gradient(rgba(82, 0, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 240, 0.05) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}></div>
          </div>
          
          {/* Animated dots/particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-400 opacity-30 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "3s" }}></div>
          <div className="absolute top-3/4 left-1/2 w-6 h-6 rounded-full bg-pink-500 opacity-30 animate-pulse" style={{ filter: "blur(3px)", animationDuration: "4s", animationDelay: "1s" }}></div>
          <div className="absolute top-2/4 left-3/4 w-5 h-5 rounded-full bg-purple-400 opacity-40 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "5s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/3 left-2/3 w-3 h-3 rounded-full bg-green-400 opacity-30 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "2.5s", animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-yellow-400 opacity-30 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "3.5s", animationDelay: "2s" }}></div>
          
          {/* Glowing lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/3 -left-10 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="absolute top-2/3 -left-10 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute -top-10 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute -top-10 left-2/3 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          </div>
          
          {/* Additional color layers */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
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
                className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 p-4 rounded-xl w-fit mb-8 backdrop-blur-sm border border-purple-500/30"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0.7)", "0 0 0 10px rgba(139, 92, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Trophy className="text-violet-400" size={36} />
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-300 to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Esports Services
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 text-cyan-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Take your gaming experience to the next level with our comprehensive Esports services. We organize professional tournaments, provide live streaming with expert commentary, and create immersive competitive gaming environments.
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
                    className="flex items-start bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-4 rounded-lg backdrop-blur-sm border border-purple-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      boxShadow: "0 0 20px 2px rgba(139, 92, 246, 0.1)", 
                      scale: 1.02, 
                      borderColor: "rgba(139, 92, 246, 0.3)" 
                    }}
                  >
                    <div className="bg-gradient-to-r from-violet-500/30 to-cyan-500/30 p-1.5 rounded-full mr-3 text-cyan-300">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-lg bg-gradient-to-r from-purple-100 to-cyan-100 bg-clip-text text-transparent font-medium">{item}</span>
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
                  className="relative overflow-hidden group bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-8 py-4 rounded-lg inline-flex items-center font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <span className="relative z-10">Explore Esports</span>
                  <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={18} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-indigo-500/20">
          <Image
                  src="/esports.jpg"
                  alt="Esports Event"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse mr-2"></div>
                    <span className="text-sm font-semibold">LIVE TOURNAMENTS</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Championship Series</h3>
                  <p className="text-white/80">Join our next major tournament</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-30 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 rounded-full blur-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTAs */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#090321] to-gray-950">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "linear-gradient(rgba(82, 0, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 240, 0.05) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}></div>
          </div>
          
          {/* Animated dots/particles */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-cyan-400 opacity-30 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "3s" }}></div>
          <div className="absolute top-3/4 right-1/2 w-6 h-6 rounded-full bg-pink-500 opacity-30 animate-pulse" style={{ filter: "blur(3px)", animationDuration: "4s", animationDelay: "1s" }}></div>
          <div className="absolute top-2/4 right-3/4 w-5 h-5 rounded-full bg-purple-400 opacity-40 animate-pulse" style={{ filter: "blur(2px)", animationDuration: "5s", animationDelay: "1.5s" }}></div>
          
          {/* Glowing lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 -left-10 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute top-3/4 -left-10 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
          
          {/* Additional color layers */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-violet-500/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-700"></div>
              <div className="absolute right-5 bottom-5 text-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">Ready to start your project?</h3>
              </div>
              <p className="text-cyan-100 mb-8 ml-[52px]">
                Contact us today to discuss your requirements and get a free quote.
              </p>
              <Link 
                href="/contact" 
                className="ml-[52px] group bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-violet-500/30"
              >
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-violet-500/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-700"></div>
              <div className="absolute right-5 bottom-5 text-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">Want to join our team?</h3>
              </div>
              <p className="text-cyan-100 mb-8 ml-[52px]">
                Explore career opportunities and be part of our creative journey.
              </p>
              <Link 
                href="/careers" 
                className="ml-[52px] group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-full inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-violet-500/30"
              >
                View Openings
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
