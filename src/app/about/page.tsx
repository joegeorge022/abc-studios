"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in media production, Sarah leads ABC Studios with passion and innovation.",
    image: "/images/team/sarah-johnson.jpg"
  },
  {
    name: "David Chen",
    role: "Technical Director",
    bio: "David oversees all technical aspects of our productions, ensuring top-quality streaming and media services.",
    image: "/images/team/david-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Creative Director",
    bio: "Michael brings a unique artistic vision to all our projects, with a background in film and digital media.",
    image: "/images/team/michael-rodriguez.jpg"
  },
  {
    name: "Emma Thompson",
    role: "Marketing Manager",
    bio: "Emma develops comprehensive marketing strategies that connect our clients with their target audiences.",
    image: "/images/team/emma-thompson.jpg"
  },
  {
    name: "Robert Kim",
    role: "Event Manager",
    bio: "Robert has organized countless successful events, from small gatherings to large-scale conferences.",
    image: "/images/team/robert-kim.jpg"
  },
  {
    name: "Jessica Patel",
    role: "Esports Director",
    bio: "Jessica's expertise in gaming and event management makes her the perfect leader for our Esports division.",
    image: "/images/team/jessica-patel.jpg"
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">About ABC Studios</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
              The story behind our passion for media innovation and event excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2015, ABC Studios began as a small video production company with a vision to revolutionize the way brands connect with their audiences through media.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As technology evolved, so did we. We expanded our services to include live streaming, digital marketing, comprehensive event management, and most recently, Esports services.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we're proud to be a leading media company working with clients from various industries, bringing their visions to life through creative and technical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/about/company-1.jpg"
                  alt="ABC Studios history"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/about/company-2.jpg"
                  alt="ABC Studios history"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/about/company-3.jpg"
                  alt="ABC Studios history"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/about/company-4.jpg"
                  alt="ABC Studios history"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            >
              Our Mission & Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              Guided by core values of innovation, quality, and client satisfaction
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower brands and organizations with cutting-edge media solutions that captivate audiences, drive engagement, and deliver measurable results. We strive to be the bridge between innovative ideas and their perfect execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-600 dark:text-purple-400">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading creative media company recognized for pushing boundaries, embracing new technologies, and setting industry standards. We aim to create a world where every brand can tell its story in the most impactful way possible.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">01</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We constantly explore new technologies and approaches to deliver fresh, engaging content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">02</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quality is non-negotiable in everything we do, from production to client service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">03</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work closely with our clients to ensure their vision is translated into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              The talented individuals behind ABC Studios' success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Work With Us?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Let's collaborate to bring your next project to life with our expertise and passion.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-100 px-6 md:px-8 py-2 md:py-3 rounded-full inline-flex items-center font-medium text-base md:text-lg transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 