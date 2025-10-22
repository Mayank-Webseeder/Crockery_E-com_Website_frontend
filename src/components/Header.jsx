import { useState } from "react";
import { Search, Menu, X, ShoppingBag } from "lucide-react";
import { Input } from "./ui/input";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import { cn } from "./ui/utils";
import { useCart } from "../context/CartContext";
import { ProfileDropdown } from './ProfileDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header({ onCartOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition-all duration-300 cursor-pointer whitespace-nowrap ${
      location.pathname === path
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

  return (
    <header
      className="sticky top-0 z-50 bg-background border-b border-border"
      onMouseLeave={() => setIsProductsMenuOpen(false)}
    >
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
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 absolute left-1/2 -translate-x-1/2">
            <span onClick={() => handleNavClick("/")} className={navLinkClass("/")}>Home</span>
            <span onClick={() => handleNavClick("/products")} className={navLinkClass("/products")} onMouseEnter={() => setIsProductsMenuOpen(true)}>Products</span>
            <span onClick={() => handleNavClick("/about")} className={navLinkClass("/about")}>About</span>
            <span onClick={() => handleNavClick("/contact")} className={navLinkClass("/contact")}>Contact</span>
          </nav>

          {/* Right Group */}
          <div className="flex items-center justify-end gap-4 lg:flex-1">
            <div className={cn("flex items-center gap-2 transition-all duration-300", isSearchOpen ? "w-36" : "w-0")}>
              <Input
                type="search"
                placeholder="Search..."
                className={cn("h-9 transition-opacity duration-300", isSearchOpen ? "opacity-100" : "opacity-0")}
              />
            </div>
            <Search
              className="w-5 h-5 cursor-pointer hover:text-[#d87f4a] transition-colors flex-shrink-0"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <hr />
            <ProfileDropdown />
            <hr />
            <button
              className="relative flex items-center gap-1 cursor-pointer hover:text-[#d87f4a] transition-colors flex-shrink-0"
              onClick={onCartOpen}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-sm">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 bg-[#d87f4a] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <ul className="space-y-2">
              <li><span onClick={() => handleNavClick("/")} className={navLinkClass("/")}>Home</span></li>
              <li><span onClick={() => handleNavClick("/products")} className={navLinkClass("/products")}>Products</span></li>
              <li><span onClick={() => handleNavClick("/about")} className={navLinkClass("/about")}>About</span></li>
              <li><span onClick={() => handleNavClick("/contact")} className={navLinkClass("/contact")}>Contact</span></li>
            </ul>
          </nav>
        )}

        {isProductsMenuOpen && <div className="absolute top-full left-0 w-full"><ProductsMegaMenu onNavigate={handleNavClick} /></div>}
      </div>
    </header>
  );
}