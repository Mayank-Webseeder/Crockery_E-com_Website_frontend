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
          {isLoggedIn ? "Account" : "Login"}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-[9999]"
          style={{ width: '180px' }}>
          {!isLoggedIn ? (
            <>
              {/* New customer section - reduced padding */}
              <div style={{ padding: '12px 16px 10px 16px', backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', color: '#666', marginBottom: '6px' }}>
                  New customer?
                </div>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="inline-block bg-[#d87f4a] text-white rounded hover:bg-[#c5703d] transition-colors"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '13px',
                    fontWeight: '500',
                    padding: '6px 12px'
                  }}
                >
                  Sign Up
                </Link>
              </div>
              {/* Login link - reduced padding */}
              <Link
                to="/login"
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
                Login
              </Link>
            </>
          ) : (
            <>
              {/* Profile link - reduced padding */}
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
              {/* Orders link - reduced padding */}
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
              {/* Divider with minimal margin */}
              <div style={{ borderTop: '1px solid #e5e7eb', margin: '4px 0' }}></div>
              {/* Logout button - reduced padding */}
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
            </>
          )}
        </div>
      )}
    </div>
  );
}
