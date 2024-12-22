import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Mendley</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Reviews', 'Pricing', 'Science', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-500 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#login"
              className="text-gray-300 hover:text-purple-500 transition-colors text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#signup"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Start Free Trial
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {['Features', 'Reviews', 'Pricing', 'Science', 'Blog', 'Login'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#signup"
              className="block px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-center mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}