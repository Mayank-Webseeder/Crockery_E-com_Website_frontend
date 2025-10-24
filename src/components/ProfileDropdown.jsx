import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, User, LogOut, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  // If not logged in, show simple login button
  if (!isLoggedIn) {
    return (
      <Link
        to="/login"
        className="flex items-center gap-1.5 cursor-pointer px-2 py-1.5 rounded hover:text-[#d87f4a] transition-colors"
      >
        <User className="w-4 h-4" />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: '500' }}>
          Login
        </span>
      </Link>
    );
  }

  // If logged in, show dropdown
  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div className="flex items-center gap-1.5 cursor-pointer px-2 py-1.5 rounded hover:text-[#d87f4a] transition-colors">
        <User className="w-4 h-4" />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: '500' }}>
          Account
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-[9999]"
          style={{ width: '180px' }}>
          {/* Profile link */}
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center text-gray-700 hover:bg-gray-50 hover:text-[#d87f4a] transition-colors"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '14px',
              padding: '10px 16px',
              gap: '8px'
            }}
          >
            <User size={15} />
            My Profile
          </Link>
          {/* Orders link */}
          <Link
            to="/orders"
            onClick={() => setIsOpen(false)}
            className="flex items-center text-gray-700 hover:bg-gray-50 hover:text-[#d87f4a] transition-colors"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '14px',
              padding: '10px 16px',
              gap: '8px'
            }}
          >
            <ShoppingBag size={15} />
            Orders
          </Link>
          {/* Divider */}
          <div style={{ borderTop: '1px solid #e5e7eb', margin: '4px 0' }}></div>
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center text-gray-700 hover:bg-gray-50 hover:text-[#d87f4a] transition-colors text-left"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '14px',
              padding: '10px 16px',
              gap: '8px'
            }}
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
