"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Scale, 
  FileText, 
  Check, 
  AlertTriangle, 
  Ban, 
  Clock, 
  ExternalLink, 
  ShieldAlert,
  LifeBuoy,
  Phone,
  Mail,
  MessageSquare,
  Globe
} from "lucide-react";

export default function TermsOfServicePage() {
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
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-indigo-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90" />
          <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] opacity-10" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Scale size={40} className="text-purple-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. These terms govern your relationship with ABC Studios.
            </p>
            <div className="text-sm text-purple-200 inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-black to-transparent" />
      </section>

      {/* Terms Content */}
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
              <motion.div variants={fadeIn} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 shadow-sm border border-purple-100 dark:border-purple-800">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-800/50 flex items-center justify-center">
                      <FileText size={24} className="text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Introduction</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Welcome to ABC Studios. These Terms of Service ("Terms") govern your use of our website, products, and services. 
                      By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                      you may not access our services.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Use License */}
              <motion.div variants={fadeIn} className="rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <Check size={24} className="text-green-600 dark:text-green-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Use License</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">What you can and cannot do with our content and services.</p>
                </div>
                <div className="p-6 bg-white dark:bg-black">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Check size={16} className="text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Permitted Use</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Permission is granted to temporarily download one copy of the materials on ABC Studios' website for personal, 
                          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                          <Ban size={16} className="text-red-600 dark:text-red-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Restrictions</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Under this license, you may not:
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-inside">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Modify or copy the materials</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Use the materials for any commercial purpose or for any public display</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Attempt to reverse engineer any software contained on ABC Studios' website</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Remove any copyright or other proprietary notations from the materials</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                          <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Termination</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                          ABC Studios at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                          you must destroy any downloaded materials in your possession.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.div variants={fadeIn} className="bg-red-50 dark:bg-red-900/10 rounded-xl p-8 shadow-sm border border-red-100 dark:border-red-900/50">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <ShieldAlert size={24} className="text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">Disclaimer</h2>
                    <div className="text-gray-700 dark:text-gray-300 space-y-4">
                      <p>
                        The materials on ABC Studios' website are provided on an 'as is' basis. ABC Studios makes no warranties, expressed or implied, 
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
                        merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                      </p>
                      <p>
                        Further, ABC Studios does not warrant or make any representations concerning the accuracy, likely results, or reliability of 
                        the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                      </p>
                      <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800 dark:text-red-300">Important Notice</h3>
                            <div className="mt-2 text-red-700 dark:text-red-200">
                              <p>
                                Our services are provided without any guarantees or warranties. We are not responsible for any damages that may result 
                                from the use of our services.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Limitations */}
              <motion.div variants={fadeIn} className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-8 shadow-sm border border-orange-100 dark:border-orange-900/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/30">
                    <Ban size={24} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-300">Limitations</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  In no event shall ABC Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                  or due to business interruption) arising out of the use or inability to use the materials on ABC Studios' website, even if ABC Studios or 
                  a ABC Studios authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </motion.div>

              {/* Accuracy of Materials */}
              <motion.div variants={fadeIn} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Globe size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Accuracy of Materials</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  The materials appearing on ABC Studios' website could include technical, typographical, or photographic errors. 
                  ABC Studios does not warrant that any of the materials on its website are accurate, complete, or current. 
                  ABC Studios may make changes to the materials contained on its website at any time without notice. 
                  However, ABC Studios does not make any commitment to update the materials.
                </p>
              </motion.div>

              {/* Other Important Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-sm border border-blue-100 dark:border-blue-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <ExternalLink size={20} className="text-blue-600 dark:text-blue-400" />
                    <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">Links</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    ABC Studios has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                    The inclusion of any link does not imply endorsement by ABC Studios of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} className="text-teal-600 dark:text-teal-400" />
                    <h2 className="text-xl font-bold text-teal-800 dark:text-teal-300">Modifications</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    ABC Studios may revise these terms of service for its website at any time without notice. By using this website, 
                    you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm border border-indigo-100 dark:border-indigo-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale size={20} className="text-indigo-600 dark:text-indigo-400" />
                    <h2 className="text-xl font-bold text-indigo-800 dark:text-indigo-300">Governing Law</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    These terms and conditions are governed by and construed in accordance with the laws of the United States and 
                    you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-purple-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <LifeBuoy size={20} className="text-purple-600 dark:text-purple-400" />
                    <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300">Contact Us</h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-medium rounded-lg px-6 py-3 transition-colors"
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