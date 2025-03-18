"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type LanguageOption = 'en' | 'fr' | 'es' | 'ja' | 'de' | 'ru' | 'zh' | 'hi' | 'ml';

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
    'services.livestreaming': 'Live Streaming',
    'services.mediaproduction': 'Media Production',
    'services.digitalmarketing': 'Digital Marketing',
    'services.eventmanagement': 'Event Management',
    'services.esports': 'Esports',
    
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    'about.hero.title': 'About ABC Studios',
    'about.hero.subtitle': 'The story behind our passion for media innovation and event excellence',
    
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'Professional solutions for all your media needs',
    
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Get in touch with our team for inquiries, quotes, or any questions',
    
    'portfolio.hero.title': 'Our Portfolio',
    'portfolio.hero.subtitle': 'Explore our latest work and successful projects',
    
    'blog.hero.title': 'Our Blog',
    'blog.hero.subtitle': 'Insights, tips, and news from the world of media production',
    
    'careers.hero.title': 'Join Our Team',
    'careers.hero.subtitle': 'Explore career opportunities at ABC Studios',
    
    'esports.hero.title': 'Esports at ABC Studios',
    'esports.hero.subtitle': 'Tournaments, events, and gaming experiences',
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
    'services.livestreaming': 'Diffusion en Direct',
    'services.mediaproduction': 'Production Médiatique',
    'services.digitalmarketing': 'Marketing Numérique',
    'services.eventmanagement': 'Gestion d\'Événements',
    'services.esports': 'Esports',
    
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    
    'about.hero.title': 'À Propos d\'ABC Studios',
    'about.hero.subtitle': 'L\'histoire derrière notre passion pour l\'innovation médiatique et l\'excellence événementielle',
    
    'services.hero.title': 'Nos Services',
    'services.hero.subtitle': 'Solutions professionnelles pour tous vos besoins médiatiques',
    
    'contact.hero.title': 'Contactez-Nous',
    'contact.hero.subtitle': 'Prenez contact avec notre équipe pour des demandes, des devis ou toute question',
    
    'portfolio.hero.title': 'Notre Portfolio',
    'portfolio.hero.subtitle': 'Découvrez nos derniers travaux et projets réussis',
    
    'blog.hero.title': 'Notre Blog',
    'blog.hero.subtitle': 'Informations, conseils et actualités du monde de la production médiatique',
    
    'careers.hero.title': 'Rejoignez Notre Équipe',
    'careers.hero.subtitle': 'Explorez les opportunités de carrière chez ABC Studios',
    
    'esports.hero.title': 'Esports chez ABC Studios',
    'esports.hero.subtitle': 'Tournois, événements et expériences de jeu',
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
    'services.livestreaming': 'Transmisión en Vivo',
    'services.mediaproduction': 'Producción de Medios',
    'services.digitalmarketing': 'Marketing Digital',
    'services.eventmanagement': 'Gestión de Eventos',
    'services.esports': 'Esports',
    
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    'about.hero.title': 'Sobre ABC Studios',
    'about.hero.subtitle': 'La historia detrás de nuestra pasión por la innovación en medios y la excelencia en eventos',
    
    'services.hero.title': 'Nuestros Servicios',
    'services.hero.subtitle': 'Soluciones profesionales para todas tus necesidades de medios',
    
    'contact.hero.title': 'Contáctanos',
    'contact.hero.subtitle': 'Ponte en contacto con nuestro equipo para consultas, presupuestos o cualquier pregunta',
    
    'portfolio.hero.title': 'Nuestro Portafolio',
    'portfolio.hero.subtitle': 'Explora nuestros últimos trabajos y proyectos exitosos',
    
    'blog.hero.title': 'Nuestro Blog',
    'blog.hero.subtitle': 'Perspectivas, consejos y noticias del mundo de la producción de medios',
    
    'careers.hero.title': 'Únete a Nuestro Equipo',
    'careers.hero.subtitle': 'Explora oportunidades profesionales en ABC Studios',
    
    'esports.hero.title': 'Esports en ABC Studios',
    'esports.hero.subtitle': 'Torneos, eventos y experiencias de juego',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.services': 'サービス',
    'nav.portfolio': 'ポートフォリオ',
    'nav.blog': 'ブログ',
    'nav.esports': 'eスポーツ',
    'nav.joinUs': '採用情報',
    'nav.contact': 'お問い合わせ',
    'nav.signIn': 'ログイン',
    'nav.signUp': '新規登録',
    'nav.dashboard': 'ダッシュボード',
    
    'hero.title': 'デジタルビジョンを現実に',
    'hero.subtitle': 'ビジネスを変革する素晴らしいデジタルソリューションを創造します',
    'hero.cta': '始める',
    'hero.learnMore': '詳細を見る',
    
    'about.title': '私たちの紹介',
    'about.description': 'ABC Studiosはウェブ開発、デザイン、マーケティングソリューションを専門とするクリエイティブなデジタルエージェンシーです。企業の強力なオンラインプレゼンスの確立とデジタル目標の達成を支援します。',
    
    'services.title': '私たちのサービス',
    'services.webdev': 'ウェブ開発',
    'services.webdesign': 'ウェブデザイン',
    'services.branding': 'ブランディング',
    'services.marketing': 'デジタルマーケティング',
    'services.mobile': 'モバイルアプリ',
    'services.ecommerce': 'Eコマースソリューション',
    'services.livestreaming': 'ライブストリーミング',
    'services.mediaproduction': 'メディア制作',
    'services.digitalmarketing': 'デジタルマーケティング',
    'services.eventmanagement': 'イベント管理',
    'services.esports': 'eスポーツ',
    
    'footer.rights': '全著作権所有',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    
    'about.hero.title': 'ABC Studiosについて',
    'about.hero.subtitle': 'メディア革新とイベント卓越性への情熱の背景にあるストーリー',
    
    'services.hero.title': '私たちのサービス',
    'services.hero.subtitle': 'あらゆるメディアニーズに対するプロフェッショナルなソリューション',
    
    'contact.hero.title': 'お問い合わせ',
    'contact.hero.subtitle': '問い合わせ、見積もり、質問のために私たちのチームにご連絡ください',
    
    'portfolio.hero.title': 'ポートフォリオ',
    'portfolio.hero.subtitle': '最新の作品と成功したプロジェクトをご覧ください',
    
    'blog.hero.title': 'ブログ',
    'blog.hero.subtitle': 'メディア制作の世界からの洞察、ヒント、ニュース',
    
    'careers.hero.title': 'チームに参加する',
    'careers.hero.subtitle': 'ABC Studiosでのキャリア機会を探る',
    
    'esports.hero.title': 'ABC Studiosのeスポーツ',
    'esports.hero.subtitle': 'トーナメント、イベント、ゲーム体験',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.services': 'Dienstleistungen',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.esports': 'E-Sport',
    'nav.joinUs': 'Karriere',
    'nav.contact': 'Kontakt',
    'nav.signIn': 'Anmelden',
    'nav.signUp': 'Registrieren',
    'nav.dashboard': 'Dashboard',
    
    'hero.title': 'Ihre digitale Vision zum Leben erwecken',
    'hero.subtitle': 'Wir erstellen beeindruckende digitale Lösungen, die Unternehmen transformieren',
    'hero.cta': 'Loslegen',
    'hero.learnMore': 'Mehr erfahren',
    
    'about.title': 'Wer wir sind',
    'about.description': 'ABC Studios ist eine kreative Digitalagentur, die sich auf Webentwicklung, Design und Marketinglösungen spezialisiert hat. Wir helfen Unternehmen, eine starke Online-Präsenz aufzubauen und ihre digitalen Ziele zu erreichen.',
    
    'services.title': 'Unsere Dienstleistungen',
    'services.webdev': 'Webentwicklung',
    'services.webdesign': 'Webdesign',
    'services.branding': 'Branding',
    'services.marketing': 'Digitales Marketing',
    'services.mobile': 'Mobile Apps',
    'services.ecommerce': 'E-Commerce-Lösungen',
    'services.livestreaming': 'Live-Streaming',
    'services.mediaproduction': 'Medienproduktion',
    'services.digitalmarketing': 'Digitales Marketing',
    'services.eventmanagement': 'Eventmanagement',
    'services.esports': 'E-Sport',
    
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    
    'about.hero.title': 'Über ABC Studios',
    'about.hero.subtitle': 'Die Geschichte hinter unserer Leidenschaft für Medieninnovation und Veranstaltungsexzellenz',
    
    'services.hero.title': 'Unsere Dienstleistungen',
    'services.hero.subtitle': 'Professionelle Lösungen für alle Ihre Medienanforderungen',
    
    'contact.hero.title': 'Kontaktieren Sie Uns',
    'contact.hero.subtitle': 'Nehmen Sie Kontakt mit unserem Team auf für Anfragen, Angebote oder Fragen',
    
    'portfolio.hero.title': 'Unser Portfolio',
    'portfolio.hero.subtitle': 'Entdecken Sie unsere neuesten Arbeiten und erfolgreichen Projekte',
    
    'blog.hero.title': 'Unser Blog',
    'blog.hero.subtitle': 'Einblicke, Tipps und Neuigkeiten aus der Welt der Medienproduktion',
    
    'careers.hero.title': 'Unserem Team Beitreten',
    'careers.hero.subtitle': 'Erkunden Sie Karrieremöglichkeiten bei ABC Studios',
    
    'esports.hero.title': 'Esports bei ABC Studios',
    'esports.hero.subtitle': 'Turniere, Veranstaltungen und Spielerlebnisse',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.blog': 'Блог',
    'nav.esports': 'Киберспорт',
    'nav.joinUs': 'Карьера',
    'nav.contact': 'Контакты',
    'nav.signIn': 'Вход',
    'nav.signUp': 'Регистрация',
    'nav.dashboard': 'Личный кабинет',
    
    'hero.title': 'Воплощаем Ваше цифровое видение в жизнь',
    'hero.subtitle': 'Мы создаем впечатляющие цифровые решения, которые трансформируют бизнес',
    'hero.cta': 'Начать',
    'hero.learnMore': 'Узнать больше',
    
    'about.title': 'Кто мы',
    'about.description': 'ABC Studios — креативное цифровое агентство, специализирующееся на веб-разработке, дизайне и маркетинговых решениях. Мы помогаем компаниям создать сильное онлайн-присутствие и достичь своих цифровых целей.',
    
    'services.title': 'Наши услуги',
    'services.webdev': 'Веб-разработка',
    'services.webdesign': 'Веб-дизайн',
    'services.branding': 'Брендинг',
    'services.marketing': 'Цифровой маркетинг',
    'services.mobile': 'Мобильные приложения',
    'services.ecommerce': 'Решения для электронной коммерции',
    'services.livestreaming': 'Прямые трансляции',
    'services.mediaproduction': 'Медиа-продакшн',
    'services.digitalmarketing': 'Цифровой маркетинг',
    'services.eventmanagement': 'Организация мероприятий',
    'services.esports': 'Киберспорт',
    
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    
    'about.hero.title': 'О компании ABC Studios',
    'about.hero.subtitle': 'История, стоящая за нашей страстью к инновациям в медиа и превосходству в организации мероприятий',
    
    'services.hero.title': 'Наши Услуги',
    'services.hero.subtitle': 'Профессиональные решения для всех ваших медиа-потребностей',
    
    'contact.hero.title': 'Свяжитесь с нами',
    'contact.hero.subtitle': 'Обратитесь к нашей команде для запросов, предложений или любых вопросов',
    
    'portfolio.hero.title': 'Наше Портфолио',
    'portfolio.hero.subtitle': 'Ознакомьтесь с нашими последними работами и успешными проектами',
    
    'blog.hero.title': 'Наш Блог',
    'blog.hero.subtitle': 'Аналитика, советы и новости из мира медиапроизводства',
    
    'careers.hero.title': 'Присоединяйтесь к нашей команде',
    'careers.hero.subtitle': 'Изучите возможности карьеры в ABC Studios',
    
    'esports.hero.title': 'Киберспорт в ABC Studios',
    'esports.hero.subtitle': 'Турниры, мероприятия и игровой опыт',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.portfolio': '作品集',
    'nav.blog': '博客',
    'nav.esports': '电子竞技',
    'nav.joinUs': '加入我们',
    'nav.contact': '联系我们',
    'nav.signIn': '登录',
    'nav.signUp': '注册',
    'nav.dashboard': '控制面板',
    
    'hero.title': '让您的数字愿景成为现实',
    'hero.subtitle': '我们创造令人惊叹的数字解决方案，为企业带来转变',
    'hero.cta': '开始',
    'hero.learnMore': '了解更多',
    
    'about.title': '我们是谁',
    'about.description': 'ABC Studios是一家专注于网站开发、设计和营销解决方案的创意数字代理机构。我们帮助企业建立强大的在线形象并实现其数字目标。',
    
    'services.title': '我们的服务',
    'services.webdev': '网站开发',
    'services.webdesign': '网站设计',
    'services.branding': '品牌塑造',
    'services.marketing': '数字营销',
    'services.mobile': '移动应用',
    'services.ecommerce': '电子商务解决方案',
    'services.livestreaming': '直播服务',
    'services.mediaproduction': '媒体制作',
    'services.digitalmarketing': '数字营销',
    'services.eventmanagement': '活动管理',
    'services.esports': '电子竞技',
    
    'footer.rights': '版权所有',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    
    'about.hero.title': '关于 ABC Studios',
    'about.hero.subtitle': '我们对媒体创新和活动卓越的热情背后的故事',
    
    'services.hero.title': '我们的服务',
    'services.hero.subtitle': '满足您所有媒体需求的专业解决方案',
    
    'contact.hero.title': '联系我们',
    'contact.hero.subtitle': '与我们的团队联系，了解咨询、报价或任何问题',
    
    'portfolio.hero.title': '我们的作品集',
    'portfolio.hero.subtitle': '探索我们最新的工作和成功的项目',
    
    'blog.hero.title': '我们的博客',
    'blog.hero.subtitle': '来自媒体制作世界的见解、技巧和新闻',
    
    'careers.hero.title': '加入我们的团队',
    'careers.hero.subtitle': '探索 ABC Studios 的职业机会',
    
    'esports.hero.title': 'ABC Studios 的电子竞技',
    'esports.hero.subtitle': '锦标赛、活动和游戏体验',
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
    'services.livestreaming': 'लाइव स्ट्रीमिंग',
    'services.mediaproduction': 'मीडिया प्रोडक्शन',
    'services.digitalmarketing': 'डिजिटल मार्केटिंग',
    'services.eventmanagement': 'इवेंट मैनेजमेंट',
    'services.esports': 'ई-स्पोर्ट्स',
    
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    
    'about.hero.title': 'ABC Studios के बारे में',
    'about.hero.subtitle': 'मीडिया नवाचार और इवेंट उत्कृष्टता के लिए हमारे जुनून के पीछे की कहानी',
    
    'services.hero.title': 'हमारी सेवाएं',
    'services.hero.subtitle': 'आपकी सभी मीडिया जरूरतों के लिए पेशेवर समाधान',
    
    'contact.hero.title': 'संपर्क करें',
    'contact.hero.subtitle': 'पूछताछ, कोटेशन, या किसी भी प्रश्न के लिए हमारी टीम से संपर्क करें',
    
    'portfolio.hero.title': 'हमारा पोर्टफोलियो',
    'portfolio.hero.subtitle': 'हमारे नवीनतम कार्य और सफल परियोजनाओं का अन्वेषण करें',
    
    'blog.hero.title': 'हमारा ब्लॉग',
    'blog.hero.subtitle': 'मीडिया प्रोडक्शन की दुनिया से अंतर्दृष्टि, युक्तियाँ और समाचार',
    
    'careers.hero.title': 'हमारी टीम से जुड़ें',
    'careers.hero.subtitle': 'ABC Studios में करियर के अवसरों का पता लगाएं',
    
    'esports.hero.title': 'ABC Studios में ई-स्पोर्ट्स',
    'esports.hero.subtitle': 'टूर्नामेंट, इवेंट्स और गेमिंग अनुभव',
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
    'services.livestreaming': 'ലൈവ് സ്ട്രീമിംഗ്',
    'services.mediaproduction': 'മീഡിയ പ്രൊഡക്ഷൻ',
    'services.digitalmarketing': 'ഡിജിറ്റൽ മാർക്കറ്റിംഗ്',
    'services.eventmanagement': 'ഇവന്റ് മാനേജ്മെന്റ്',
    'services.esports': 'ഇ-സ്പോർട്സ്',
    
    'footer.rights': 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം',
    'footer.privacy': 'സ്വകാര്യതാ നയം',
    'footer.terms': 'സേവന നിബന്ധനകൾ',
    
    'about.hero.title': 'ABC Studios നെ കുറിച്ച്',
    'about.hero.subtitle': 'മീഡിയ നവീകരണത്തിനും ഇവന്റ് മികവിനും വേണ്ടിയുള്ള ഞങ്ങളുടെ ആവേശത്തിന് പിന്നിലെ കഥ',
    
    'services.hero.title': 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    'services.hero.subtitle': 'നിങ്ങളുടെ എല്ലാ മീഡിയ ആവശ്യങ്ങൾക്കുമുള്ള പ്രൊഫഷണൽ പരിഹാരങ്ങൾ',
    
    'contact.hero.title': 'ബന്ധപ്പെടുക',
    'contact.hero.subtitle': 'അന്വേഷണങ്ങൾ, കോട്ടുകൾ, അല്ലെങ്കിൽ ഏതെങ്കിലും ചോദ്യങ്ങൾ എന്നിവയ്ക്കായി ഞങ്ങളുടെ ടീമുമായി ബന്ധപ്പെടുക',
    
    'portfolio.hero.title': 'ഞങ്ങളുടെ പോർട്ട്ഫോളിയോ',
    'portfolio.hero.subtitle': 'ഞങ്ങളുടെ ഏറ്റവും പുതിയ പ്രവർത്തനങ്ങളും വിജയകരമായ പ്രോജക്ടുകളും പര്യവേക്ഷണം ചെയ്യുക',
    
    'blog.hero.title': 'ഞങ്ങളുടെ ബ്ലോഗ്',
    'blog.hero.subtitle': 'മീഡിയ പ്രൊഡക്ഷൻ ലോകത്തിൽ നിന്നുള്ള ഉൾക്കാഴ്ചകൾ, നുറുങ്ങുകൾ, വാർത്തകൾ',
    
    'careers.hero.title': 'ഞങ്ങളുടെ ടീമിൽ ചേരുക',
    'careers.hero.subtitle': 'ABC Studios-ൽ കരിയർ അവസരങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക',
    
    'esports.hero.title': 'ABC Studios-ൽ ഇ-സ്പോർട്സ്',
    'esports.hero.subtitle': 'ടൂർണമെന്റുകൾ, ഇവന്റുകൾ, ഗെയിമിംഗ് അനുഭവങ്ങൾ',
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
    if (savedLanguage && ['en', 'fr', 'es', 'ja', 'de', 'ru', 'zh', 'hi', 'ml'].includes(savedLanguage)) {
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