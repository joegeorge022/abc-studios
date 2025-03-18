"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, ChevronRight, Calendar, Film, BarChart, Users, Phone, Gamepad, Info, ExternalLink, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type PresetPrompt = {
  id: string;
  icon: React.ReactNode;
  text: string;
  prompt: string;
};

type SuggestedFollowUp = {
  text: string;
};

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! How can I help you with ABC Studios services today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPresets, setShowPresets] = useState(true);
  const [suggestedFollowUps, setSuggestedFollowUps] = useState<SuggestedFollowUp[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const presetPrompts: PresetPrompt[] = [
    {
      id: 'live-streaming',
      icon: <Film size={16} />,
      text: 'Live Streaming Services',
      prompt: 'Tell me about your live streaming services'
    },
    {
      id: 'events',
      icon: <Calendar size={16} />,
      text: 'Event Management',
      prompt: 'What event management services do you offer?'
    },
    {
      id: 'marketing',
      icon: <BarChart size={16} />,
      text: 'Digital Marketing',
      prompt: 'How can you help with digital marketing?'
    },
    {
      id: 'esports',
      icon: <Gamepad size={16} />,
      text: 'Esports Services',
      prompt: 'What esports services do you provide?'
    },
    {
      id: 'contact',
      icon: <Phone size={16} />,
      text: 'Contact ABC Studios',
      prompt: 'How can I contact ABC Studios?'
    },
    {
      id: 'about',
      icon: <Info size={16} />,
      text: 'About the Company',
      prompt: 'Tell me about ABC Studios background'
    }
  ];

  const generateFollowUps = (message: string) => {
    setSuggestedFollowUps([]);
    
    if (message.toLowerCase().includes('live streaming')) {
      setSuggestedFollowUps([
        { text: 'Do you offer multi-camera streaming setups?' },
        { text: 'What streaming platforms do you support?' }
      ]);
    } else if (message.toLowerCase().includes('digital marketing')) {
      setSuggestedFollowUps([
        { text: 'How do you measure marketing campaign success?' },
        { text: 'What industries have you worked with?' }
      ]);
    } else if (message.toLowerCase().includes('event')) {
      setSuggestedFollowUps([
        { text: 'Can you handle both virtual and in-person events?' },
        { text: 'What is your largest event production to date?' }
      ]);
    } else if (message.toLowerCase().includes('esports')) {
      setSuggestedFollowUps([
        { text: 'How do I register for upcoming tournaments?' },
        { text: 'What games do your esports events feature?' }
      ]);
    } else if (message.toLowerCase().includes('contact')) {
      setSuggestedFollowUps([
        { text: 'Where is your studio located?' },
        { text: 'Do you offer consultation calls?' }
      ]);
    } else if (message.toLowerCase().includes('portfolio') || message.toLowerCase().includes('work')) {
      setSuggestedFollowUps([
        { text: 'Can I see examples of your live productions?' },
        { text: 'What brands have you worked with?' }
      ]);
    } else if (message.toLowerCase().includes('pricing') || message.toLowerCase().includes('cost')) {
      setSuggestedFollowUps([
        { text: 'Do you offer custom service packages?' },
        { text: 'Are there discounts for recurring events?' }
      ]);
    } else if (message.toLowerCase().includes('team') || message.toLowerCase().includes('about')) {
      setSuggestedFollowUps([
        { text: 'How long has ABC Studios been operating?' },
        { text: 'Are you hiring for any positions?' }
      ]);
    } else {
      setSuggestedFollowUps([
        { text: 'What makes your services stand out?' },
        { text: 'How can I request a service quote?' }
      ]);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, suggestedFollowUps]);
  
  useEffect(() => {
    if (messages.length > 1) {
      setShowPresets(false);
    }
  }, [messages.length]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const formatMessageWithLinks = (text: string, isInitialMessage = false) => {
    if (isInitialMessage) {
      return <p className="text-sm whitespace-pre-wrap leading-relaxed">{text}</p>;
    }
    
    const urlRegex = /https?:\/\/[^\s.,;:!?]+/g;
    
    const linkedTopics = new Set<string>();
    
    const hasUrls = urlRegex.test(text);
    urlRegex.lastIndex = 0;
    
    if (!hasUrls) {
      const textWithTopicLinks = addTopicLinks(text, linkedTopics);
      return <p className="text-sm whitespace-pre-wrap leading-relaxed">{textWithTopicLinks}</p>;
    }
    
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    
    while ((match = urlRegex.exec(text)) !== null) {
      const url = match[0];
      const startIndex = match.index;
      
      if (startIndex > lastIndex) {
        const beforeUrlText = text.substring(lastIndex, startIndex);
        parts.push(addTopicLinks(beforeUrlText, linkedTopics));
      }
      
      if (url.includes('abc-studios.vercel.app')) {
        parts.push(renderLink(url, parts.length));
      } else {
        parts.push(url);
      }
      
      lastIndex = startIndex + url.length;
      
      if (lastIndex < text.length && /[.,;:!?]/.test(text[lastIndex])) {
        parts.push(text[lastIndex]);
        lastIndex++;
      }
    }
    
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      parts.push(addTopicLinks(remainingText, linkedTopics));
    }
    
    return <p className="text-sm whitespace-pre-wrap leading-relaxed">{parts}</p>;
  };

  const addTopicLinks = (text: string, linkedTopics: Set<string>): React.ReactNode[] => {
    const serviceTopics = [
      { keyword: 'services', path: '/services' },
      { keyword: 'live streaming', path: '/services#livestreaming' },
      { keyword: 'media production', path: '/services#mediaproduction' },
      { keyword: 'digital marketing', path: '/services#digitalmarketing' },
      { keyword: 'event management', path: '/services#eventmanagement' },
      { keyword: 'esports', path: '/esports' },
      { keyword: 'about', path: '/about' },
      { keyword: 'contact', path: '/contact' },
      { keyword: 'portfolio', path: '/portfolio' },
      { keyword: 'blog', path: '/blog' },
      { keyword: 'careers', path: '/careers' }
    ];
    
    const hasTopics = serviceTopics.some(topic => 
      text.toLowerCase().includes(topic.keyword)
    );
    
    if (!hasTopics) {
      return [text];
    }
    
    const result: React.ReactNode[] = [];
    let currentText = text;
    
    const sortedTopics = [...serviceTopics].sort((a, b) => 
      b.keyword.length - a.keyword.length
    );
    
    for (const topic of sortedTopics) {
      if (linkedTopics.has(topic.path)) {
        continue;
      }
      
      const parts = currentText.split(new RegExp(`(${topic.keyword})`, 'i'));
      
      if (parts.length > 1) {
        const newFragments: React.ReactNode[] = [];
        let topicLinked = false;
        
        parts.forEach((part, i) => {
          if (i % 2 === 0) {
            if (part) newFragments.push(part);
          } else {
            if (!topicLinked) {
              newFragments.push(
                <Link 
                  key={`topic-${Math.random().toString(36).substr(2, 9)}`}
                  href={topic.path}
                  className="text-blue-500 underline font-medium mx-0.5 inline-flex items-center"
                  target="_blank"
                >
                  {part}
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              );
              topicLinked = true;
              linkedTopics.add(topic.path);
            } else {
              newFragments.push(part);
            }
          }
        });
        
        if (result.length === 0) {
          currentText = '';
          result.push(...newFragments);
        } else {
          const lastIndex = result.length - 1;
          const lastNode = result[lastIndex];
          
          if (typeof lastNode === 'string') {
            result.splice(lastIndex, 1, ...newFragments);
          } else {
            result.push(...newFragments);
          }
        }
      }
    }
    
    return result.length > 0 ? result : [text];
  };

  const renderLink = (url: string, key: number) => {
    const isInternalLink = url.includes('abc-studios.vercel.app');
    
    if (isInternalLink) {
      const path = url.split('abc-studios.vercel.app')[1] || '/';
      
      let pageName = 'homepage';
      if (path !== '/') {
        const pathSegments = path.split('/').filter((segment: string) => segment);
        if (pathSegments.length > 0) {
          pageName = pathSegments[0];
          pageName = pageName.replace(/-/g, ' ');
        }
      }
      
      return (
        <Link 
          key={`url-${key}`}
          href={path} 
          className="text-blue-500 underline font-medium mx-0.5 inline-flex items-center"
          target="_blank"
        >
          {pageName} page
          <ExternalLink size={12} className="ml-1" />
        </Link>
      );
    } else {
      return url;
    }
  };

  const handleSubmit = async (e: React.FormEvent, presetPrompt?: string) => {
    e?.preventDefault();
    
    const messageText = presetPrompt || input;
    if ((!messageText.trim() && !presetPrompt) || isLoading) return;

    setSuggestedFollowUps([]);

    const userMessage = { role: 'user' as const, content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = messages
        .concat(userMessage)
        .map(msg => ({ role: msg.role, content: msg.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantMessage }
      ]);

      generateFollowUps(assistantMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later or contact us directly." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFollowUpClick = (text: string) => {
    handleSubmit(new Event('click') as unknown as React.FormEvent, text);
  };
  
  const handlePresetClick = (prompt: string) => {
    handleSubmit(new Event('click') as unknown as React.FormEvent, prompt);
  };

  const chatButtonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const chatWindowVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.98,
      transition: { duration: 0.2 } 
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const followUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.3 } }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        handleSubmit(e);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="chat-button"
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={chatButtonVariants}
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center justify-center"
            aria-label="Open chat assistant"
          >
            <MessageSquare size={24} />
          </motion.button>
        ) : (
          <motion.div
            key="chat-window"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatWindowVariants}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col w-80 sm:w-96 h-[500px] max-h-[80vh] border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex justify-between items-center px-5 py-4 bg-blue-600 text-white">
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-white/20 shadow-lg">
                  <Bot size={16} className="text-white" />
                </div>
                <h3 className="font-semibold text-base">ABC Studios Assistant</h3>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors rounded-full p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </motion.button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50 dark:bg-gray-900">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-100 dark:border-gray-700'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex items-center mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-1.5">
                            <MessageSquare size={10} className="text-white" />
                          </div>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">ABC Assistant</span>
                        </div>
                      )}
                      {message.role === 'user' ? (
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      ) : (
                        formatMessageWithLinks(message.content, index === 0)
                      )}
                      <div className="text-right mt-1.5">
                        <span className="text-[10px] opacity-70">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <AnimatePresence>
                {suggestedFollowUps.length > 0 && !isLoading && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={followUpVariants}
                    className="mt-4"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedFollowUps.map((followUp, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleFollowUpClick(followUp.text)}
                          className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 transition-colors"
                        >
                          {followUp.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {showPresets && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-6"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Get started with:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {presetPrompts.map((preset, index) => (
                        <motion.button
                          key={preset.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.1 + index * 0.05 }
                          }}
                          whileHover={{ 
                            scale: 1.03,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handlePresetClick(preset.prompt)}
                          className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                        >
                          <div className="mr-2 flex-shrink-0 h-6 w-6 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                            {preset.icon}
                          </div>
                          <div className="flex-grow text-left">
                            <p className="text-xs font-medium text-gray-900 dark:text-white line-clamp-1">{preset.text}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 border border-gray-100 dark:border-gray-700">
                      <div className="flex space-x-1.5">
                        <div className="h-1.5 w-1.5 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="h-1.5 w-1.5 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-1.5 w-1.5 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="border-t border-gray-200 dark:border-gray-700 p-3.5 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 py-2.5 px-4 bg-transparent border-none focus:outline-none text-sm text-gray-900 dark:text-white transition-all duration-200"
                  disabled={isLoading}
                />
                <div className="flex items-center">
                  {input.trim() && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl mr-1 p-2 transition-colors flex items-center justify-center"
                      >
                        <Send size={16} className="text-white" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center flex items-center justify-center">
                <Sparkles size={12} className="mr-1 text-blue-500" />
                <p>Ask about our services, events, or how to contact us</p>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 