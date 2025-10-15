import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface ExamTabsProps {
  tabs: TabData[];
  examName: string;
  examYear: string;
  className?: string;
}

const ExamTabs: React.FC<ExamTabsProps> = ({ 
  tabs, 
  examName, 
  examYear, 
  className = "" 
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex justify-center space-x-2 px-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-3 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? 'text-gray-800 bg-gray-100'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {tab.label}
              {/* Active tab indicator */}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  layoutId="activeTab"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="min-h-[400px]"
          >
            {activeTabData?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExamTabs;
