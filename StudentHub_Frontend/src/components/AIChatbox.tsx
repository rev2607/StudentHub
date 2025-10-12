import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIChatboxProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbox: React.FC<AIChatboxProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Student Hub AI. How can I help you with your academic questions today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (replace with actual AI API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('jee') || input.includes('engineering')) {
      return "I can help you with JEE Main and Advanced preparation! JEE Main is conducted twice a year, and JEE Advanced is for top 2.5 lakh candidates. Would you like to know about specific topics, study strategies, or college admissions?";
    }
    
    if (input.includes('neet') || input.includes('medical')) {
      return "Great! NEET is the gateway to medical colleges in India. The exam tests Physics, Chemistry, and Biology. I can help you with study tips, important topics, or college selection. What specific aspect would you like to know about?";
    }
    
    if (input.includes('college') || input.includes('admission')) {
      return "I can assist you with college selection, admission processes, and cutoff information. Are you looking for information about specific colleges, courses, or admission procedures?";
    }
    
    if (input.includes('exam') || input.includes('test')) {
      return "I can help you with various competitive exams like JEE, NEET, GATE, UPSC, and more. What exam are you preparing for, and what specific information do you need?";
    }
    
    if (input.includes('study') || input.includes('preparation')) {
      return "Study strategies vary by exam and subject. I can provide personalized study plans, time management tips, and effective preparation techniques. Which exam or subject are you focusing on?";
    }
    
    return "That's an interesting question! I'm here to help with your academic journey. Could you provide more details about what specific information you're looking for? I can assist with exam preparation, college selection, study strategies, and more.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[var(--site-green)] to-[#7bb53a] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Student Hub AI</h3>
              <p className="text-sm opacity-90">Your Academic Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.isUser
                      ? 'bg-[var(--site-green)] text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-[var(--site-green)] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-full bg-gray-200 text-gray-700">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="px-4 py-2 rounded-lg bg-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about exams, colleges, or studies..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-[var(--site-green)] text-white p-2 rounded-lg hover:bg-[#7bb53a] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatbox;
