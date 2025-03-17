"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage, LanguageOption } from '@/utils/languageContext';
import { ChevronDown, Check, Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: LanguageOption; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm font-medium text-white shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-3.5 h-3.5 mr-1.5" />
        <span className="hidden sm:inline-block mr-1">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline-block mr-1">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3 opacity-70" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl overflow-hidden backdrop-blur-lg bg-black/40 border border-white/20 shadow-xl">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-sm hover:bg-white/20 transition-colors ${
                  language === lang.code
                    ? 'bg-white/20 font-medium text-white'
                    : 'text-white/90'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-base">{lang.flag}</span>
                  {lang.name}
                </div>
                {language === lang.code && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 