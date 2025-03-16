"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Tv, 
  Camera, 
  BarChart, 
  Calendar, 
  CheckCircle, 
  ChevronRight 
} from "lucide-react";
import Image from "next/image";

type ColorType = "blue" | "purple" | "indigo" | "teal";

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  color: ColorType;
  image: string;
}

const services: Service[] = [
  {
    id: "livestreaming",
    icon: Tv,
    title: "Live Streaming",
    shortDesc: "Professional live streaming solutions for virtual and hybrid events.",
    longDesc: "Our live streaming services provide high-quality, reliable broadcasts for your virtual and hybrid events. We handle everything from setup to technical support during the event.",
    features: [
      "High-definition multi-camera streaming",
      "Custom branded overlays and graphics",
      "Real-time audience interaction tools",
      "Cloud recording and post-event content creation",
      "Technical support throughout your event",
      "Streaming to multiple platforms simultaneously"
    ],
    color: "blue",
    image: "/images/services/livestreaming.jpg"
  },
  {
    id: "mediaproduction",
    icon: Camera,
    title: "Media Production",
    shortDesc: "High-quality videography, photography, and video editing services.",
    longDesc: "From concept to final delivery, our media production team creates compelling visual content that tells your story and engages your audience.",
    features: [
      "Professional video production and cinematography",
      "Commercial photography services",
      "Drone aerial videography and photography",
      "Motion graphics and animation",
      "Sound design and audio production",
      "Post-production editing and color grading"
    ],
    color: "purple",
    image: "/images/services/mediaproduction.jpg"
  },
  {
    id: "digitalmarketing",
    icon: BarChart,
    title: "Digital Marketing",
    shortDesc: "Comprehensive digital marketing solutions to grow your online presence.",
    longDesc: "Our digital marketing strategies help you reach your target audience, increase brand awareness, and drive conversions across all digital channels.",
    features: [
      "Social media strategy and management",
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) advertising campaigns",
      "Content marketing and creation",
      "Email marketing campaigns",
      "Analytics and performance reporting"
    ],
    color: "indigo",
    image: "/images/services/digitalmarketing.jpg"
  },
  {
    id: "eventmanagement",
    icon: Calendar,
    title: "Event Management",
    shortDesc: "End-to-end event planning and execution services for memorable experiences.",
    longDesc: "Let us handle the logistics of your next event, from initial planning to day-of execution, ensuring a seamless and memorable experience for all attendees.",
    features: [
      "Comprehensive event planning and coordination",
      "Venue selection and management",
      "Speaker and entertainment booking",
      "Registration and attendee management",
      "On-site event production and management",
      "Post-event evaluation and analytics"
    ],
    color: "teal",
    image: "/images/services/eventmanagement.jpg"
  }
];

const ColorClass: Record<ColorType, {
  light: string;
  medium: string;
  dark: string;
  gradient: string;
}> = {
  blue: {
    light: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    medium: "bg-blue-600 text-white",
    dark: "bg-blue-700 hover:bg-blue-800",
    gradient: "from-blue-600 to-blue-800"
  },
  purple: {
    light: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    medium: "bg-purple-600 text-white",
    dark: "bg-purple-700 hover:bg-purple-800",
    gradient: "from-purple-600 to-purple-800"
  },
  indigo: {
    light: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    medium: "bg-indigo-600 text-white",
    dark: "bg-indigo-700 hover:bg-indigo-800",
    gradient: "from-indigo-600 to-indigo-800"
  },
  teal: {
    light: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    medium: "bg-teal-600 text-white",
    dark: "bg-teal-700 hover:bg-teal-800",
    gradient: "from-teal-600 to-teal-800"
  }
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/services-hero.jpg"
            alt="Our Services"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive media solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              From live streaming to event management, we provide end-to-end solutions to bring your vision to life
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col"
              >
                <div className={`h-3 bg-gradient-to-r ${ColorClass[service.color].gradient}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  
                  <div className="relative h-80 mb-6 rounded-lg overflow-hidden group">
                    {/* Main service image */}
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover with animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className={`${ColorClass[service.color].light} p-10 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
                        <service.icon size={48} />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.longDesc}
                  </p>
                  <Link
                    href={`#${service.id}`}
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                  >
                    View details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-black'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className={`${ColorClass[service.color].light} p-3 rounded-full w-fit mb-6`}>
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  {service.longDesc}
                </p>
                <h3 className="text-xl font-bold mb-4">What We Provide:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`mt-1 mr-3 ${ColorClass[service.color].light.split(' ')[2]}`} size={20} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`${ColorClass[service.color].medium} ${ColorClass[service.color].dark} px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors`}
                >
                  Inquire about {service.title}
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="rounded-xl overflow-hidden group relative aspect-video">
                  {/* Service image */}
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay with icon that shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60 flex items-center justify-center transition-opacity duration-300">
                    <div className="transform transition-all duration-500 group-hover:scale-125">
                      <service.icon className="text-white opacity-20 group-hover:opacity-80 transition-opacity duration-500" size={120} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8">
              We can tailor our services to meet your specific requirements. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full inline-flex items-center font-medium transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 