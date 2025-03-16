"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SignUpPage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .cl-footerAction, .cl-footerText {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-black z-0">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-[20%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl"></div>
        
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/2 w-2 h-2 rounded-full bg-blue-400 opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-indigo-400 opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10 mt-16 md:mt-24"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Create Account</h1>
          <p className="text-gray-300 md:text-lg">
            Join ABC Studios today
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/10"
        >
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                footerActionLink: "text-blue-400 hover:text-blue-300",
                footerAction: "hidden",
                footer: "hidden",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white text-xl font-semibold",
                headerSubtitle: "text-gray-300",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-white/10 border-white/20 text-white placeholder:text-gray-400",
                dividerLine: "bg-white/20",
                dividerText: "text-gray-300",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-blue-400",
                formResendCodeLink: "text-blue-400",
                alert: "bg-red-500/20 border-red-500/30 text-white",
                alertText: "text-white",
                socialButtonsBlockButton: "border-white/20 hover:bg-white/5",
                socialButtonsBlockButtonText: "text-white",
                socialButtonsBlockButtonArrow: "text-white",
                rootBox: "mx-auto max-w-full md:w-[400px]",
              },
              layout: {
                socialButtonsVariant: "iconButton",
                socialButtonsPlacement: "top",
              }
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
} 