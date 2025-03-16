"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn, UserPlus, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import UserWrapper from "./UserWrapper";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/utils/languageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { translations } = useLanguage();
  
  const userProfileUrl = process.env.NEXT_PUBLIC_CLERK_USER_PROFILE || "https://polite-leopard-52.accounts.dev/user";

  const navLinks = [
    { name: translations['nav.home'] || 'Home', path: "/" },
    { name: translations['nav.about'] || 'About Us', path: "/about" },
    { name: translations['nav.services'] || 'Services', path: "/services" },
    { name: translations['nav.portfolio'] || 'Portfolio', path: "/portfolio" },
    { name: translations['nav.blog'] || 'Blog', path: "/blog" },
    { name: translations['nav.esports'] || 'Esports', path: "/esports" },
    { name: translations['nav.joinUs'] || 'Join Us', path: "/careers" },
    { name: translations['nav.contact'] || 'Contact', path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-black/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="w-full mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 relative">
                <Image
                  src="/logo.svg"
                  alt="ABC Studios Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`ml-2 text-base md:text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>Studios</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-sm lg:text-base py-2`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pl-2 border-l border-gray-300 dark:border-gray-700 flex items-center">
              <div className="mr-3">
                <LanguageSwitcher />
              </div>
              
              <SignedIn>
                <UserWrapper>
                  {({ isLoaded, isSignedIn, user }) => (
                    <div className="flex items-center space-x-4">
                      <Link href="/dashboard" className={`flex items-center font-medium ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-sm py-2`}>
                        <User className="w-4 h-4 mr-1" />
                        {translations['nav.dashboard'] || 'Dashboard'}
                      </Link>
                      <UserButton 
                        appearance={{
                          elements: {
                            userButtonAvatarBox: "w-9 h-9"
                          }
                        }}
                        afterSignOutUrl="/"
                      />
                    </div>
                  )}
                </UserWrapper>
              </SignedIn>
              <SignedOut>
                <div className="flex space-x-2">
                  <Link href="/sign-in" className={`flex items-center font-medium ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-sm py-2`}>
                    <LogIn className="w-4 h-4 mr-1" />
                    {translations['nav.signIn'] || 'Sign In'}
                  </Link>
                  <Link href="/sign-up" className="flex items-center text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full transition-colors">
                    <UserPlus className="w-4 h-4 mr-1" />
                    {translations['nav.signUp'] || 'Sign Up'}
                  </Link>
                </div>
              </SignedOut>
            </div>
          </nav>
          
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              <LanguageSwitcher />
            </div>
            <button
              className="p-2 text-white flex items-center justify-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-xl max-w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <SignedIn>
                <UserWrapper>
                  {({ isLoaded, isSignedIn, user }) => (
                    <>
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center">
                          <UserButton appearance={{
                            elements: {
                              userButtonAvatarBox: "w-8 h-8"
                            }
                          }} />
                          <span className="ml-2 text-gray-800 dark:text-white">{isLoaded && user?.fullName}</span>
                        </div>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="w-5 h-5 mr-2" />
                        {translations['nav.dashboard'] || 'Dashboard'}
                      </Link>
                    </>
                  )}
                </UserWrapper>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  {translations['nav.signIn'] || 'Sign In'}
                </Link>
                <Link
                  href="/sign-up"
                  className="flex items-center px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors mx-4 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  {translations['nav.signUp'] || 'Sign Up'}
                </Link>
              </SignedOut>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
} 