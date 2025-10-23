import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, User, LogOut, Heart, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-1.5 cursor-pointer p-2 rounded-md hover:text-[#d87f4a] hover:bg-gray-100/80 transition-colors">
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">{isLoggedIn ? "Account" : "Login"}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-30 border border-gray-200">
          {!isLoggedIn ? (
            <>
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-sm text-gray-500" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "22px" }}>
                  New customer? <br />
                </h3>
                <br />
                <br />
                <Link to="/signup" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "20px" }}>
                  Sign Up
                </Link>
              </div>
              <br />
              <div className="border-t border-gray-100 mt-2 pt-2">
             <Link to="/wishlist" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
           </div>
           <br />
              <ul className="py-2">
                <li>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                    <User className="w-4 h-4" /> Login
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul className="py-2">
              <li>
                <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                  <User className="w-4 h-4" /> My Profile
                </Link>
              </li>
              <br />
              
              <li>
                <Link to="/orders" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                  <ShoppingBag className="w-4 h-4" /> Orders
                </Link>
              </li>
              <br />
              <div className="border-t border-gray-100 mt-2 pt-2">
             <Link to="/wishlist" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
           </div>
           <br />
              <li>
                <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-3 hover:text-[#d87f4a] text-sm text-gray-800 hover:bg-gray-50" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "18px" }}>
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </li>
            </ul>
          )}
           
        </div>
      )}
    </div>
  );
}