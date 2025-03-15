"use client";

import { useState, useEffect } from 'react';
import { Type, X, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(1);
  
  useEffect(() => {
    const savedTextSize = localStorage.getItem('abc-text-size');
    if (savedTextSize) {
      setTextSize(parseFloat(savedTextSize));
      applyTextSize(parseFloat(savedTextSize));
    }
  }, []);
  
  const applyTextSize = (size: number) => {
    document.documentElement.style.fontSize = `${size * 100}%`;
    localStorage.setItem('abc-text-size', size.toString());
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
  
  const resetTextSize = () => {
    setTextSize(1);
    applyTextSize(1);
  };
  
  return (
    <div className="fixed left-3 bottom-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-lg flex items-center justify-center w-7 h-7"
        aria-label="Accessibility controls"
        title="Adjust text size"
      >
        <Type size={14} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-10 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 min-w-44"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Text Size</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close accessibility controls"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={decreaseTextSize}
                disabled={textSize <= 0.8}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                aria-label="Decrease text size"
                title="Decrease text size"
              >
                <Minus size={14} />
              </button>
              
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {Math.round(textSize * 100)}%
                </span>
              </div>
              
              <button
                onClick={increaseTextSize}
                disabled={textSize >= 1.5}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 w-7 h-7 flex items-center justify-center"
                aria-label="Increase text size"
                title="Increase text size"
              >
                <Plus size={14} />
              </button>
            </div>
            
            <button
              onClick={resetTextSize}
              className="mt-2 w-full text-xs text-blue-600 dark:text-blue-400 hover:underline"
              title="Reset to default text size"
            >
              Reset to Default
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 