"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send, Check, File } from "lucide-react";

type JobPosting = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

const jobPostings: JobPosting[] = [
  {
    id: "job1",
    title: "Video Production Specialist",
    department: "Media Production",
    location: "Los Angeles, CA (On-site)",
    type: "Full-time",
    description: "We're looking for a skilled Video Production Specialist to join our Media Production team. In this role, you'll work on a variety of projects for our clients, from corporate videos to creative content for digital platforms.",
    requirements: [
      "3+ years of experience in video production",
      "Proficiency with Adobe Creative Suite (Premiere Pro, After Effects)",
      "Strong portfolio demonstrating videography and editing skills",
      "Experience with lighting setups and audio recording",
      "Knowledge of current video production trends and techniques",
      "Bachelor's degree in Film, Media Production, or related field preferred"
    ],
    responsibilities: [
      "Film and edit high-quality video content for various clients and platforms",
      "Collaborate with creative team on storyboarding and content planning",
      "Set up and operate camera equipment, lighting, and audio systems",
      "Perform post-production editing, color correction, and sound mixing",
      "Stay current with emerging video production technologies and techniques",
      "Ensure all deliverables meet quality standards and client requirements"
    ]
  },
  {
    id: "job2",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote (US-based)",
    type: "Full-time",
    description: "Join our marketing team as a Digital Marketing Manager to develop and implement effective marketing strategies for our clients across various digital channels. You'll work closely with our creative team to deliver compelling campaigns that drive results.",
    requirements: [
      "5+ years of experience in digital marketing",
      "Strong understanding of SEO, SEM, social media marketing, and content strategy",
      "Experience with marketing analytics and reporting tools",
      "Knowledge of marketing automation platforms",
      "Excellent project management and communication skills",
      "Bachelor's degree in Marketing, Communications, or related field"
    ],
    responsibilities: [
      "Develop and implement comprehensive digital marketing strategies",
      "Manage client campaigns across multiple digital channels",
      "Monitor campaign performance and optimize based on data insights",
      "Collaborate with content creators and designers for campaign assets",
      "Present reports and recommendations to clients",
      "Stay updated with digital marketing trends and best practices"
    ]
  },
  {
    id: "job3",
    title: "Live Streaming Technician",
    department: "Technical Production",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description: "We are seeking a skilled Live Streaming Technician to join our team. The ideal candidate will have strong technical knowledge of live streaming equipment and software, with experience handling live events and troubleshooting technical issues in real-time.",
    requirements: [
      "2+ years of experience in live streaming production",
      "Proficiency with streaming software (OBS, vMix, Wirecast)",
      "Knowledge of video encoding and streaming protocols",
      "Experience with video switchers and audio mixers",
      "Ability to troubleshoot technical issues quickly",
      "Strong attention to detail and ability to work under pressure"
    ],
    responsibilities: [
      "Set up and operate live streaming equipment for virtual and hybrid events",
      "Configure streaming software and ensure optimal technical settings",
      "Monitor stream quality and resolve technical issues in real-time",
      "Collaborate with production team for seamless event execution",
      "Perform tests and quality checks before live events",
      "Assist with post-event recording management and distribution"
    ]
  },
  {
    id: "job4",
    title: "Esports Event Coordinator",
    department: "Esports",
    location: "Remote (Worldwide)",
    type: "Full-time",
    description: "We're looking for an Esports Event Coordinator to help organize and execute successful esports tournaments and events. The ideal candidate will have a strong understanding of the esports ecosystem and experience in event planning.",
    requirements: [
      "2+ years of experience in event management, preferably in esports or gaming",
      "Strong knowledge of major esports titles and the competitive scene",
      "Experience with tournament platforms (Battlefy, Toornament, etc.)",
      "Excellent organizational and communication skills",
      "Ability to work flexible hours including evenings and weekends as needed",
      "Passion for gaming and esports"
    ],
    responsibilities: [
      "Plan and coordinate esports tournaments and events from concept to execution",
      "Develop tournament rule sets and formats in collaboration with the team",
      "Liaise with players, teams, and other stakeholders",
      "Oversee tournament operations including registration and bracket management",
      "Coordinate with streaming team for broadcast production",
      "Analyze event performance and provide recommendations for improvement"
    ]
  },
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applicationFormVisible, setApplicationFormVisible] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeFile: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleJobDetails = (jobId: string) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  const openApplicationForm = (jobId: string) => {
    setSelectedJobId(jobId);
    setApplicationFormVisible(true);
    // Scroll to application form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, resumeFile: e.target.files?.[0] || null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resumeFile: null,
        coverLetter: "",
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setApplicationFormVisible(false);
        setSelectedJobId(null);
      }, 5000);
    }, 1500);
  };

  const selectedJob = jobPostings.find(job => job.id === selectedJobId);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore career opportunities and be part of our creative journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Why Join ABC Studios?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              We're a team of passionate creators and innovators dedicated to pushing the boundaries of media production and digital experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 17L12 21L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.88 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0812 14.5921 23.0914 13.5062 22.7704 12.4939C22.4494 11.4816 21.8139 10.5976 20.9561 9.96906C20.0983 9.34057 19.0628 8.99979 18 9H16.74C16.4392 7.82787 15.8765 6.73925 15.0939 5.81608C14.3113 4.89291 13.3301 4.15924 12.2232 3.67351C11.1163 3.18777 9.91284 2.96306 8.70353 3.01313C7.49422 3.0632 6.31045 3.38621 5.24148 3.95765C4.17252 4.5291 3.24623 5.3262 2.53224 6.29447C1.81825 7.26274 1.33511 8.37516 1.11944 9.54874C0.903768 10.7223 0.960669 11.9308 1.28597 13.0786C1.61127 14.2264 2.19561 15.2834 2.99 16.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Work on cutting-edge projects across various industries and push the boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a diverse team of professionals who share knowledge, support each other, and celebrate success together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Develop your skills through continuous learning, professional development, and challenging projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Open Positions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Explore our current job openings and find your perfect role
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {jobPostings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div
                  className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mr-4 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplicationForm(job.id);
                      }}
                    >
                      Apply Now
                    </button>
                    {expandedJob === job.id ? (
                      <ChevronUp size={20} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Responsibilities:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 text-center">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          openApplicationForm(job.id);
                        }}
                      >
                        Apply for this Position
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {applicationFormVisible && (
        <section id="application-form" className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-6">
                  Apply for: {selectedJob?.title}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <Check className="text-green-600 dark:text-green-400" size={48} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-green-600 dark:text-green-300 mb-4">
                      Thank you for applying to ABC Studios. We'll review your application and contact you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Resume/CV* (PDF, DOC, DOCX)
                      </label>
                      <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700">
                        <input
                          type="file"
                          id="resumeFile"
                          name="resumeFile"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center">
                          <File size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-500 dark:text-gray-400">
                            {formData.resumeFile ? formData.resumeFile.name : "Click to upload your resume"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Cover Letter*
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Tell us why you're interested in this position and what makes you a great candidate."
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setApplicationFormVisible(false)}
                        className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <Send size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* General Application */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Position?</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => {
                setSelectedJobId("general");
                setApplicationFormVisible(true);
                setTimeout(() => {
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-full inline-flex items-center font-medium text-lg transition-colors"
            >
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
} 