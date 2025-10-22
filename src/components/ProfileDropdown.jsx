// src/components/ProfileDropdown.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, LogIn } from 'lucide-react'; // Added LogIn icon for consistency

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Login Button/Link */}
      <Link to="/login" className="flex items-center gap-1.5 cursor-pointer p-2 rounded-md hover:text-[#d87f4a] hover:bg-gray-100/80 transition-colors">
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">Login</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-80 bg-white shadow-xl rounded-lg overflow-hidden z-30 border border-gray-200">
          
          {/* "New customer?" Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between ">
            <h3 className="text-sm text-gray-500 hover:text-[#d87f4a]"  style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "17px",
              }}>New customer?</h3>
            <Link to="/signup" className="text-blue-600 hover:text-[#d87f4a] hover:underline text-sm font-semibold" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "17px",
              }}>
              Sign Up
            </Link>
          </div>

          {/* Menu Items List */}
          <ul className="py-2">
            <li>
              <Link to="/profile" className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] hover:underline text-sm text-gray-800 hover:bg-gray-50" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "15px",
              }}>
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/orders" className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] hover:underline text-sm text-gray-800 hover:bg-gray-50" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "15px",
              }}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] hover:underline text-sm text-gray-800 hover:bg-gray-50" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "15px",
              }}>
                Wishlist
              </Link>
            </li>
            
            {/* ✨ Login link added back to the list */}
            <li className="border-t border-gray-100 mt-2 pt-2">
              <Link to="/login" className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] hover:underline text-sm text-gray-800 hover:bg-gray-50" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "17px",
              }}>
                 Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}