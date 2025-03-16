"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  User, 
  Cookie, 
  BarChart, 
  Lock, 
  Scale, 
  ExternalLink, 
  Baby, 
  RefreshCw,
  Mail, 
  Phone,
  MessageSquare
} from "lucide-react";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
          <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] opacity-10" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Shield size={40} className="text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              We value your privacy and are committed to protecting your personal information. Here's how we handle your data.
            </p>
            <div className="text-sm text-blue-200 inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-black to-transparent" />
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Introduction */}
              <motion.div variants={fadeIn} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 shadow-sm border border-blue-100 dark:border-blue-800">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center">
                      <Shield size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Introduction</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      At ABC Studios, we respect the privacy of our users and are committed to protecting your personal data. 
                      This Privacy Policy will inform you about how we handle your personal data when you visit our website and 
                      tell you about your privacy rights and how the law protects you.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Information We Collect */}
              <motion.div variants={fadeIn} className="rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <User size={24} className="text-indigo-600 dark:text-indigo-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">We may collect several types of information to provide and improve our services.</p>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                  <div className="p-6 bg-white dark:bg-black">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                        <User size={18} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="font-semibold text-lg">Personal Data</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>Email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>First name and last name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>Phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>Address details</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white dark:bg-black">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                        <BarChart size={18} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="font-semibold text-lg">Usage Data</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Information on how you access and use our website, including your IP address, browser type, pages visited, 
                      time spent, and other diagnostic data.
                    </p>
                  </div>
                  <div className="p-6 bg-white dark:bg-black">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                        <Cookie size={18} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="font-semibold text-lg">Cookies & Tracking</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      We use cookies and similar technologies to track activity and hold certain information
                      for better user experience and service improvement.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How We Use Your Data */}
              <motion.div variants={fadeIn} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 shadow-sm border border-indigo-100 dark:border-indigo-800">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center">
                      <BarChart size={24} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">How We Use Your Data</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To provide and maintain our service</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To notify you about changes to our service</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To provide customer support</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To improve our service</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To monitor service usage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                          </div>
                          <span>To detect and address technical issues</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Protection */}
              <motion.div variants={fadeIn} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <Lock size={24} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Protection</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, 
                  or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to 
                  protect your Personal Data, we cannot guarantee its absolute security.
                </p>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-yellow-500 dark:text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      We implement reasonable security measures but cannot guarantee 100% security for data transmitted over the internet.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div variants={fadeIn} className="bg-white dark:bg-black rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Scale size={24} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Data Protection Rights</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Access & Rectification</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Request copies of your personal data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Request correction of inaccurate information</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Deletion & Restriction</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Request erasure of your personal data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Request restriction of data processing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Objection</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Object to processing of your data</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Portability</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Request data transfer to another organization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Other Important Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <ExternalLink size={20} className="text-amber-600 dark:text-amber-400" />
                    <h2 className="text-xl font-bold text-amber-800 dark:text-amber-300">External Links</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Our website may contain links to external sites that are not operated by us. We strongly advise you to 
                    review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for 
                    third-party sites or services.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6 shadow-sm border border-sky-100 dark:border-sky-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Baby size={20} className="text-sky-600 dark:text-sky-400" />
                    <h2 className="text-xl font-bold text-sky-800 dark:text-sky-300">Children's Privacy</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Our services do not address anyone under the age of 13. We do not knowingly collect personally identifiable 
                    information from anyone under the age of 13. If we discover that a child under 13 has provided us with personal 
                    data, we immediately delete it.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-purple-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw size={20} className="text-purple-600 dark:text-purple-400" />
                    <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300">Changes to This Policy</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                    on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
                    for any changes.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 shadow-sm border border-blue-100 dark:border-blue-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare size={20} className="text-blue-600 dark:text-blue-400" />
                    <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">Contact Us</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg px-6 py-3 transition-colors"
                    >
                      <MessageSquare size={18} className="mr-2" />
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 