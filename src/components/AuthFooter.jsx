import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthFooter() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <footer className="absolute bottom-0 left-0 right-0 px-6 py-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs font-bold text-white/80">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <button
            onClick={handleBackToHome}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md transition-colors duration-200 text-white/90 hover:text-white border border-white/20 hover:border-white/30 cursor-pointer"
          >
            ← Back to Home
          </button>
          <p>© TANARIRI 2025, ALL RIGHTS RESERVED</p>
        </div>
        <p className="text-center sm:text-right">DESIGNED BY WEBSEEDER TECHNOLOGIES</p>
      </div>
    </footer>
  );
}
