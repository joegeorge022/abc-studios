"use client";

import { useState, useEffect } from 'react';
import { Type, X, Plus, Minus, AlignJustify, TextQuote, Sun, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(1);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  
  useEffect(() => {
    const savedTextSize = localStorage.getItem('abc-text-size');
    const savedLineHeight = localStorage.getItem('abc-line-height');
    const savedLetterSpacing = localStorage.getItem('abc-letter-spacing');
    const savedHighContrast = localStorage.getItem('abc-high-contrast');
    const savedReduceMotion = localStorage.getItem('abc-reduce-motion');
    
    if (savedTextSize) {
      setTextSize(parseFloat(savedTextSize));
      applyTextSize(parseFloat(savedTextSize));
    }
    if (savedLineHeight) {
      setLineHeight(parseFloat(savedLineHeight));
      applyLineHeight(parseFloat(savedLineHeight));
    }
    if (savedLetterSpacing) {
      setLetterSpacing(parseFloat(savedLetterSpacing));
      applyLetterSpacing(parseFloat(savedLetterSpacing));
    }
    if (savedHighContrast) {
      setHighContrast(savedHighContrast === 'true');
      applyHighContrast(savedHighContrast === 'true');
    }
    if (savedReduceMotion) {
      setReduceMotion(savedReduceMotion === 'true');
      applyReduceMotion(savedReduceMotion === 'true');
    }
  }, []);
  
  const applyTextSize = (size: number) => {
    document.documentElement.style.fontSize = `${size * 100}%`;
    localStorage.setItem('abc-text-size', size.toString());
  };
  
  const applyLineHeight = (height: number) => {
    document.documentElement.style.lineHeight = height.toString();
    localStorage.setItem('abc-line-height', height.toString());
  };
  
  const applyLetterSpacing = (spacing: number) => {
    document.documentElement.style.letterSpacing = `${spacing}px`;
    localStorage.setItem('abc-letter-spacing', spacing.toString());
  };
  
  const applyHighContrast = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('abc-high-contrast', enabled.toString());
  };
  
  const applyReduceMotion = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    localStorage.setItem('abc-reduce-motion', enabled.toString());
  };
  
  const increaseTextSize = () => {
    if (textSize < 1.5) {
      const newSize = Math.min(textSize + 0.1, 1.5);
      setTextSize(newSize);
      applyTextSize(newSize);
    }
  };
  
  const decreaseTextSize = () => {
    if (textSize > 0.8) {
      const newSize = Math.max(textSize - 0.1, 0.8);
      setTextSize(newSize);
      applyTextSize(newSize);
    }
  };
  
  const increaseLineHeight = () => {
    if (lineHeight < 2) {
      const newHeight = Math.min(lineHeight + 0.1, 2);
      setLineHeight(newHeight);
      applyLineHeight(newHeight);
    }
  };
  
  const decreaseLineHeight = () => {
    if (lineHeight > 1) {
      const newHeight = Math.max(lineHeight - 0.1, 1);
      setLineHeight(newHeight);
      applyLineHeight(newHeight);
    }
  };
  
  const increaseLetterSpacing = () => {
    if (letterSpacing < 2) {
      const newSpacing = Math.min(letterSpacing + 0.5, 2);
      setLetterSpacing(newSpacing);
      applyLetterSpacing(newSpacing);
    }
  };
  
  const decreaseLetterSpacing = () => {
    if (letterSpacing > 0) {
      const newSpacing = Math.max(letterSpacing - 0.5, 0);
      setLetterSpacing(newSpacing);
      applyLetterSpacing(newSpacing);
    }
  };
  
  const resetAll = () => {
    setTextSize(1);
    setLineHeight(1.5);
    setLetterSpacing(0);
    setHighContrast(false);
    setReduceMotion(false);
    applyTextSize(1);
    applyLineHeight(1.5);
    applyLetterSpacing(0);
    applyHighContrast(false);
    applyReduceMotion(false);
  };
  
  return (
    <div className="fixed left-3 bottom-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-lg flex items-center justify-center w-7 h-7"
        aria-label="Accessibility controls"
        title="Accessibility settings"
      >
        <Type size={14} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-10 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 min-w-[280px]"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Accessibility Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close accessibility controls"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Text Size</span>
                  <span className="text-xs text-gray-500">{Math.round(textSize * 100)}%</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={decreaseTextSize}
                    disabled={textSize <= 0.8}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Decrease text size"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded">
                    <div 
                      className="h-full bg-blue-600 rounded" 
                      style={{ width: `${((textSize - 0.8) / 0.7) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={increaseTextSize}
                    disabled={textSize >= 1.5}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Increase text size"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Line Height</span>
                  <span className="text-xs text-gray-500">{lineHeight.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={decreaseLineHeight}
                    disabled={lineHeight <= 1}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Decrease line height"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded">
                    <div 
                      className="h-full bg-blue-600 rounded" 
                      style={{ width: `${((lineHeight - 1) / 1) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={increaseLineHeight}
                    disabled={lineHeight >= 2}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Increase line height"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Letter Spacing</span>
                  <span className="text-xs text-gray-500">{letterSpacing.toFixed(1)}px</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={decreaseLetterSpacing}
                    disabled={letterSpacing <= 0}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Decrease letter spacing"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded">
                    <div 
                      className="h-full bg-blue-600 rounded" 
                      style={{ width: `${(letterSpacing / 2) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={increaseLetterSpacing}
                    disabled={letterSpacing >= 2}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                    aria-label="Increase letter spacing"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setHighContrast(!highContrast);
                    applyHighContrast(!highContrast);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded ${
                    highContrast 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-sm">High Contrast</span>
                  <Sun size={14} />
                </button>
                
                <button
                  onClick={() => {
                    setReduceMotion(!reduceMotion);
                    applyReduceMotion(!reduceMotion);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded ${
                    reduceMotion 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-sm">Reduce Motion</span>
                  <Zap size={14} />
                </button>
              </div>
              
              <button
                onClick={resetAll}
                className="w-full text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                Reset All Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 