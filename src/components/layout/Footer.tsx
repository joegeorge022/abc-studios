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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">ABC Studios</h3>
            <p className="mb-4 text-sm md:text-base text-gray-300">
              Specializing in live streaming, media production, digital marketing, 
              event management services and Esports services.
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
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors block py-1">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors block py-1">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors block py-1">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors block py-1">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors block py-1">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li><Link href="/services#livestreaming" className="hover:text-blue-400 transition-colors block py-1">Live Streaming</Link></li>
              <li><Link href="/services#mediaproduction" className="hover:text-blue-400 transition-colors block py-1">Media Production</Link></li>
              <li><Link href="/services#digitalmarketing" className="hover:text-blue-400 transition-colors block py-1">Digital Marketing</Link></li>
              <li><Link href="/services#eventmanagement" className="hover:text-blue-400 transition-colors block py-1">Event Management</Link></li>
              <li><Link href="/esports" className="hover:text-blue-400 transition-colors block py-1">Esports Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
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
          <p className="text-sm text-gray-400">&copy; {currentYear} ABC Studios. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 