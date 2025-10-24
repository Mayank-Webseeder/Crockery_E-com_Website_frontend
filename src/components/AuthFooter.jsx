import React from 'react';
export function AuthFooter() {

  return (
    <footer className="absolute bottom-0 left-0 right-0 px-6 py-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs font-bold text-white/80">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p>© TANARIRI 2025, ALL RIGHTS RESERVED</p>
        </div>
        <p className="text-center sm:text-right">DESIGNED BY WEBSEEDER TECHNOLOGIES</p>
      </div>
    </footer>
  );
}
