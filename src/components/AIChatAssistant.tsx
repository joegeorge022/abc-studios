"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, ChevronRight, Calendar, Film, BarChart, Users, Phone, Gamepad, Info, ExternalLink } from 'lucide-react';
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
        { text: 'What equipment do you use for streaming?' },
        { text: 'Can you handle multilingual streams?' }
      ]);
    } else if (message.toLowerCase().includes('digital marketing')) {
      setSuggestedFollowUps([
        { text: 'Do you offer social media management?' },
        { text: 'What are your SEO services?' }
      ]);
    } else if (message.toLowerCase().includes('event')) {
      setSuggestedFollowUps([
        { text: 'What types of events have you managed?' },
        { text: 'Do you handle virtual events?' }
      ]);
    } else if (message.toLowerCase().includes('esports')) {
      setSuggestedFollowUps([
        { text: 'What games do you support?' },
        { text: 'How do tournament registrations work?' }
      ]);
    } else if (message.toLowerCase().includes('contact')) {
      setSuggestedFollowUps([
        { text: 'What are your business hours?' },
        { text: 'Do you have international offices?' }
      ]);
    } else {
      setSuggestedFollowUps([
        { text: 'Tell me about your services' },
        { text: 'How can I contact you?' }
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

  const formatMessageWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    if (!urlRegex.test(text)) {
      return <p className="text-sm whitespace-pre-wrap leading-relaxed">{text}</p>;
    }
    
    const parts = text.split(urlRegex);
    const matches = text.match(urlRegex) || [];
    
    return (
      <p className="text-sm whitespace-pre-wrap leading-relaxed">
        {parts.map((part, index) => {
          if (index < matches.length) {
            const url = matches[index];
            const isInternalLink = url.includes('abc-studios.vercel.app');
            
            if (isInternalLink) {
              const path = url.split('abc-studios.vercel.app')[1];
              return (
                <React.Fragment key={index}>
                  {part}
                  <Link 
                    href={path} 
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    target="_blank"
                  >
                    {url}
                    <ExternalLink size={12} className="ml-1" />
                  </Link>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  {part}
                  <a 
                    href={url} 
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {url}
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </React.Fragment>
              );
            }
          }
          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </p>
    );
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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col w-80 sm:w-96 h-[500px] max-h-[80vh] border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-2">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <h3 className="font-medium">ABC Studios Assistant</h3>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors rounded-full p-1.5"
                aria-label="Close chat"
              >
                <X size={20} />
              </motion.button>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
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
                      className={`max-w-[85%] rounded-2xl px-4 py-2 shadow-sm ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex items-center mb-1">
                          <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-1">
                            <MessageSquare size={12} className="text-white" />
                          </div>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">ABC Assistant</span>
                        </div>
                      )}
                      {message.role === 'user' ? (
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      ) : (
                        formatMessageWithLinks(message.content)
                      )}
                      <div className="text-right mt-1">
                        <span className="text-xs opacity-70">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Follow-up suggestions */}
              <AnimatePresence>
                {suggestedFollowUps.length > 0 && !isLoading && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={followUpVariants}
                    className="mt-4"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">You might want to ask:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedFollowUps.map((followUp, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleFollowUpClick(followUp.text)}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-full"
                        >
                          {followUp.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Preset prompts */}
              <AnimatePresence>
                {showPresets && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-4"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Get started with:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {presetPrompts.map((preset, index) => (
                        <motion.button
                          key={preset.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.1 + index * 0.1 }
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePresetClick(preset.prompt)}
                          className="flex items-center text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="mr-3 flex-shrink-0 h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                            {preset.icon}
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{preset.text}</p>
                          </div>
                          <ChevronRight size={16} className="text-gray-400" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Loading indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-100 dark:border-gray-700 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
            </div>
            
            {/* Input form */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
              <div className="relative flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-all duration-200"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-r-lg px-4 transition-colors"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                <p>Ask about our services, events, or how to contact us!</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 