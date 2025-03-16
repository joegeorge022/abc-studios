"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type LanguageOption = 'en' | 'fr' | 'es' | 'hi' | 'ml';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  translations: Translations;
}

const translationData: Record<LanguageOption, Translations> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.esports': 'Esports',
    'nav.joinUs': 'Join Us',
    'nav.contact': 'Contact',
    'nav.signIn': 'Sign In',
    'nav.signUp': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    
    'hero.title': 'Bringing Your Digital Vision to Life',
    'hero.subtitle': 'We create stunning digital solutions that transform businesses',
    'hero.cta': 'Get Started',
    'hero.learnMore': 'Learn More',
    
    'about.title': 'Who We Are',
    'about.description': 'ABC Studios is a creative digital agency specializing in web development, design, and marketing solutions. We help businesses establish a strong online presence and achieve their digital goals.',
    
    'services.title': 'Our Services',
    'services.webdev': 'Web Development',
    'services.webdesign': 'Web Design',
    'services.branding': 'Branding',
    'services.marketing': 'Digital Marketing',
    'services.mobile': 'Mobile Apps',
    'services.ecommerce': 'E-commerce Solutions',
    
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.esports': 'Esports',
    'nav.joinUs': 'Rejoignez-nous',
    'nav.contact': 'Contact',
    'nav.signIn': 'Connexion',
    'nav.signUp': 'Inscription',
    'nav.dashboard': 'Tableau de Bord',
    
    'hero.title': 'Donnons Vie à Votre Vision Numérique',
    'hero.subtitle': 'Nous créons des solutions numériques impressionnantes qui transforment les entreprises',
    'hero.cta': 'Commencer',
    'hero.learnMore': 'En Savoir Plus',
    
    'about.title': 'Qui Sommes-Nous',
    'about.description': 'ABC Studios est une agence numérique créative spécialisée dans le développement web, le design et les solutions marketing. Nous aidons les entreprises à établir une forte présence en ligne et à atteindre leurs objectifs numériques.',
    
    'services.title': 'Nos Services',
    'services.webdev': 'Développement Web',
    'services.webdesign': 'Design Web',
    'services.branding': 'Image de Marque',
    'services.marketing': 'Marketing Numérique',
    'services.mobile': 'Applications Mobiles',
    'services.ecommerce': 'Solutions E-commerce',
    
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.blog': 'Blog',
    'nav.esports': 'Esports',
    'nav.joinUs': 'Únete a Nosotros',
    'nav.contact': 'Contacto',
    'nav.signIn': 'Iniciar Sesión',
    'nav.signUp': 'Registrarse',
    'nav.dashboard': 'Panel de Control',
    
    'hero.title': 'Dando Vida a Tu Visión Digital',
    'hero.subtitle': 'Creamos soluciones digitales impresionantes que transforman empresas',
    'hero.cta': 'Comenzar',
    'hero.learnMore': 'Saber Más',
    
    'about.title': 'Quiénes Somos',
    'about.description': 'ABC Studios es una agencia digital creativa especializada en desarrollo web, diseño y soluciones de marketing. Ayudamos a las empresas a establecer una fuerte presencia en línea y alcanzar sus objetivos digitales.',
    
    'services.title': 'Nuestros Servicios',
    'services.webdev': 'Desarrollo Web',
    'services.webdesign': 'Diseño Web',
    'services.branding': 'Branding',
    'services.marketing': 'Marketing Digital',
    'services.mobile': 'Aplicaciones Móviles',
    'services.ecommerce': 'Soluciones de E-commerce',
    
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.portfolio': 'पोर्टफोलियो',
    'nav.blog': 'ब्लॉग',
    'nav.esports': 'ई-स्पोर्ट्स',
    'nav.joinUs': 'हमसे जुड़ें',
    'nav.contact': 'संपर्क करें',
    'nav.signIn': 'साइन इन करें',
    'nav.signUp': 'साइन अप करें',
    'nav.dashboard': 'डैशबोर्ड',
    
    'hero.title': 'आपके डिजिटल विजन को जीवंत बनाना',
    'hero.subtitle': 'हम आकर्षक डिजिटल समाधान बनाते हैं जो व्यवसायों को बदलते हैं',
    'hero.cta': 'शुरू करें',
    'hero.learnMore': 'और जानें',
    
    'about.title': 'हम कौन हैं',
    'about.description': 'ABC Studios एक रचनात्मक डिजिटल एजेंसी है जो वेब डेवलपमेंट, डिजाइन और मार्केटिंग समाधानों में विशेषज्ञता रखती है। हम व्यवसायों को मजबूत ऑनलाइन उपस्थिति स्थापित करने और उनके डिजिटल लक्ष्यों को प्राप्त करने में मदद करते हैं।',
    
    'services.title': 'हमारी सेवाएं',
    'services.webdev': 'वेब डेवलपमेंट',
    'services.webdesign': 'वेब डिजाइन',
    'services.branding': 'ब्रांडिंग',
    'services.marketing': 'डिजिटल मार्केटिंग',
    'services.mobile': 'मोबाइल ऐप्स',
    'services.ecommerce': 'ई-कॉमर्स समाधान',
    
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
  },
  ml: {
    'nav.home': 'ഹോം',
    'nav.about': 'ഞങ്ങളെ കുറിച്ച്',
    'nav.services': 'സേവനങ്ങൾ',
    'nav.portfolio': 'പോർട്ട്ഫോളിയോ',
    'nav.blog': 'ബ്ലോഗ്',
    'nav.esports': 'ഇ-സ്പോർട്സ്',
    'nav.joinUs': 'ഞങ്ങളോടൊപ്പം ചേരുക',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'nav.signIn': 'സൈൻ ഇൻ',
    'nav.signUp': 'സൈൻ അപ്പ്',
    'nav.dashboard': 'ഡാഷ്ബോർഡ്',
    
    'hero.title': 'നിങ്ങളുടെ ഡിജിറ്റൽ വിഷൻ യാഥാർത്ഥ്യമാക്കുന്നു',
    'hero.subtitle': 'ഞങ്ങൾ ബിസിനസുകളെ മാറ്റുന്ന മികച്ച ഡിജിറ്റൽ പരിഹാരങ്ങൾ സൃഷ്ടിക്കുന്നു',
    'hero.cta': 'ആരംഭിക്കുക',
    'hero.learnMore': 'കൂടുതൽ അറിയുക',
    
    'about.title': 'ഞങ്ങൾ ആരാണ്',
    'about.description': 'ABC Studios വെബ് ഡെവലപ്മെന്റ്, ഡിസൈൻ, മാർക്കറ്റിംഗ് പരിഹാരങ്ങൾ എന്നിവയിൽ പ്രാവീണ്യമുള്ള ഒരു ക്രിയേറ്റീവ് ഡിജിറ്റൽ ഏജൻസിയാണ്. ബിസിനസുകൾക്ക് ശക്തമായ ഓൺലൈൻ സാന്നിധ്യം സ്ഥാപിക്കുന്നതിനും അവരുടെ ഡിജിറ്റൽ ലക്ഷ്യങ്ങൾ കൈവരിക്കുന്നതിനും ഞങ്ങൾ സഹായിക്കുന്നു.',
    
    'services.title': 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    'services.webdev': 'വെബ് ഡെവലപ്മെന്റ്',
    'services.webdesign': 'വെബ് ഡിസൈൻ',
    'services.branding': 'ബ്രാൻഡിംഗ്',
    'services.marketing': 'ഡിജിറ്റൽ മാർക്കറ്റിംഗ്',
    'services.mobile': 'മൊബൈൽ ആപ്പുകൾ',
    'services.ecommerce': 'ഇ-കൊമേഴ്സ് പരിഹാരങ്ങൾ',
    
    'footer.rights': 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം',
    'footer.privacy': 'സ്വകാര്യതാ നയം',
    'footer.terms': 'സേവന നിബന്ധനകൾ',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: translationData.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageOption>('en');
  const [translations, setTranslations] = useState<Translations>(translationData.en);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageOption | null;
    if (savedLanguage && ['en', 'fr', 'es', 'hi', 'ml'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      setTranslations(translationData[savedLanguage]);
    }
  }, []);
  
  const handleSetLanguage = (lang: LanguageOption) => {
    setLanguage(lang);
    setTranslations(translationData[lang]);
    localStorage.setItem('language', lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext); 