"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { useLanguage } from "@/utils/languageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white overflow-hidden w-full">
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-6 md:pb-8 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">ABC Studios</h3>
            <p className="mb-4 text-sm md:text-base text-gray-300">
              {translations['about.description']}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">{translations['nav.about'] || 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors block py-1">{translations['nav.home'] || 'Home'}</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors block py-1">{translations['nav.about'] || 'About Us'}</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors block py-1">{translations['nav.services'] || 'Services'}</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors block py-1">{translations['nav.portfolio'] || 'Portfolio'}</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors block py-1">{translations['nav.blog'] || 'Blog'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">{translations['services.title'] || 'Services'}</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li><Link href="/services#livestreaming" className="hover:text-blue-400 transition-colors block py-1">{translations['services.livestreaming'] || 'Live Streaming'}</Link></li>
              <li><Link href="/services#mediaproduction" className="hover:text-blue-400 transition-colors block py-1">{translations['services.mediaproduction'] || 'Media Production'}</Link></li>
              <li><Link href="/services#digitalmarketing" className="hover:text-blue-400 transition-colors block py-1">{translations['services.digitalmarketing'] || 'Digital Marketing'}</Link></li>
              <li><Link href="/services#eventmanagement" className="hover:text-blue-400 transition-colors block py-1">{translations['services.eventmanagement'] || 'Event Management'}</Link></li>
              <li><Link href="/esports" className="hover:text-blue-400 transition-colors block py-1">{translations['services.esports'] || 'Esports'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">{translations['nav.contact'] || 'Contact Us'}</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <span>123 Media Street, Video City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@abcstudios.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} ABC Studios. {translations['footer.rights'] || 'All rights reserved.'}</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">{translations['footer.privacy'] || 'Privacy Policy'}</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">{translations['footer.terms'] || 'Terms of Service'}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <span>Designed & Developed by</span>
            <a 
              href="https://github.com/joegeorge022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center"
              aria-label="Joe George's GitHub"
            >
              Joe George
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 
