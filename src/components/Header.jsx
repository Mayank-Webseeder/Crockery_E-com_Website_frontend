import { useState, useRef, useEffect } from "react";
import { Search, Menu, X, ShoppingBag } from "lucide-react";
import { Input } from "./ui/input";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import { cn } from "./ui/utils";
import { useCart } from "../context/CartContext";
import { ProfileDropdown } from './ProfileDropdown';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

export function Header({ onCartOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { totalItems } = useCart();
  const productsTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { performSearch } = useSearch();

  const navLinkClass = (path) =>
    `transition-all duration-300 cursor-pointer whitespace-nowrap font-medium ${location.pathname === path
      ? "text-[#d87f4a] underline underline-offset-4"
      : "hover:text-[#d87f4a] hover:underline underline-offset-4"
    }`;

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    if (path !== "/products") {
      setIsProductsMenuOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!localSearchTerm.trim()) return;
    performSearch(localSearchTerm);
    navigate('/search-results');
    setLocalSearchTerm('');
    setIsSearchOpen(false);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) {
        clearTimeout(productsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Group */}
          <div className="flex items-center gap-4 lg:flex-1">
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleNavClick("/")}
            >
              <img
                src="/TanaRiri-Logo 2.png"
                alt="TanaRiri Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Centered Navigation (Desktop) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-8 flex-1 absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
          >
            <span onClick={() => handleNavClick("/")} className={navLinkClass("/")}>
              Home
            </span>
            <span
              onClick={() => handleNavClick("/products")}
              className={navLinkClass("/products")}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              Products
            </span>
            <span onClick={() => handleNavClick("/about")} className={navLinkClass("/about")}>
              About
            </span>
            <span onClick={() => handleNavClick("/contact")} className={navLinkClass("/contact")}>
              Contact
            </span>
          </nav>

          {/* Right Group */}
          <div className="flex items-center justify-end gap-3 lg:flex-1">
            <form onSubmit={handleSearchSubmit} className={cn("flex items-center gap-2 transition-all duration-300", isSearchOpen ? "w-36" : "w-0")}>
              <Input
                type="search"
                placeholder="Search..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                className={cn("h-9 transition-opacity duration-300 text-sm", isSearchOpen ? "opacity-100" : "opacity-0")}
              />
            </form>
            <Search
              className="w-5 h-5 cursor-pointer hover:text-[#d87f4a] transition-colors flex-shrink-0"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />

            <div className="w-px h-6 bg-gray-300" />

            <ProfileDropdown />

            <div className="w-px h-6 bg-gray-300" />

            <button
              className="relative flex items-center gap-2 cursor-pointer hover:text-[#d87f4a] transition-colors flex-shrink-0 px-2 py-1.5 rounded"
              onClick={onCartOpen}
            >
              <ShoppingBag className="w-5 h-5" />
              <span
                className="font-medium"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
              >
                Cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d87f4a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <ul className="space-y-3">
              <li>
                <span
                  onClick={() => handleNavClick("/")}
                  className={navLinkClass("/")}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleNavClick("/products")}
                  className={navLinkClass("/products")}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
                >
                  Products
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleNavClick("/about")}
                  className={navLinkClass("/about")}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleNavClick("/contact")}
                  className={navLinkClass("/contact")}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px' }}
                >
                  Contact
                </span>
              </li>
            </ul>
          </nav>
        )}

        {/* Products Mega Menu */}
        {isProductsMenuOpen && (
          <div
            className="absolute top-full left-0 w-full z-[9998]"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <ProductsMegaMenu onNavigate={handleNavClick} />
          </div>
        )}
      </div>
    </header>
  );
}
