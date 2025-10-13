import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

interface HeaderProps {
  onCartOpen: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ onCartOpen, currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinkClass = (page: string) => 
    `transition-all duration-300 cursor-pointer ${
      currentPage === page 
        ? 'text-[#d87f4a] underline underline-offset-4' 
        : 'hover:text-[#d87f4a] hover:underline underline-offset-4'
    }`;

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="w-full px-8 lg:px-16">
        {/* Main header */}
        <div className="flex items-center justify-between py-6">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo/Brand */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <h1 className="text-2xl tracking-wide">TanaRíri</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <span onClick={() => handleNavClick("home")} className={navLinkClass("home")}>Home</span>
            <span onClick={() => handleNavClick("products")} className={navLinkClass("products")}>Products</span>
            <span onClick={() => handleNavClick("about")} className={navLinkClass("about")}>About</span>
            <span onClick={() => handleNavClick("journal")} className={navLinkClass("journal")}>Journal</span>
            <span onClick={() => handleNavClick("contact")} className={navLinkClass("contact")}>Contact</span>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-[#d87f4a] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartOpen}
              className="flex items-center gap-2 hover:text-[#d87f4a] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">CART</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-in slide-in-from-top">
            <Input 
              type="search"
              placeholder="Search products..."
              className="w-full h-12"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <span onClick={() => handleNavClick("home")} className={navLinkClass("home")}>Home</span>
              <span onClick={() => handleNavClick("products")} className={navLinkClass("products")}>Products</span>
              <span onClick={() => handleNavClick("about")} className={navLinkClass("about")}>About</span>
              <span onClick={() => handleNavClick("journal")} className={navLinkClass("journal")}>Journal</span>
              <span onClick={() => handleNavClick("contact")} className={navLinkClass("contact")}>Contact</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
