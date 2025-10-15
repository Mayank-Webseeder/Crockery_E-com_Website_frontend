import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { ProductsMegaMenu } from "./ProductsMegaMenu";

interface HeaderProps {
  onCartOpen: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ onCartOpen, currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  const navLinkClass = (page: string) =>
    `transition-all duration-300 cursor-pointer ${
      currentPage === page
        ? 'text-[#d87f4a] underline underline-offset-4'
        : 'hover:text-[#d87f4a] hover:underline underline-offset-4'
    }`;

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    // Close products menu if navigating away
    if (page !== "products") {
      setIsProductsMenuOpen(false);
    }
  };

  // This function will close the mega menu if the mouse leaves the entire header content area.
  // This ensures the menu stays open as long as you're hovering over the 'Products' link OR the menu itself.
  const handleHeaderContentMouseLeave = () => {
    setIsProductsMenuOpen(false);
  };

  return (
    <header>
      {/* This div is the main content wrapper and the relative parent for the mega menu */}
      <div
        className="w-full px-8 lg:px-16 relative"
        onMouseLeave={handleHeaderContentMouseLeave} // Attach mouse leave to this parent
      >
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
            <span
              onClick={() => handleNavClick("products")}
              className={navLinkClass("products")}
              onMouseEnter={() => setIsProductsMenuOpen(true)} // Open menu when hovering over "Products" link
            >
              Products
            </span>
            <span onClick={() => handleNavClick("about")} className={navLinkClass("about")}>About</span>
            <span onClick={() => handleNavClick("journal")} className={navLinkClass("journal")}>Journal</span>
            <span onClick={() => handleNavClick("contact")} className={navLinkClass("contact")}>Contact</span>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            <Search
              className="w-5 h-5 cursor-pointer hover:text-[#d87f4a] transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <div className="relative cursor-pointer" onClick={onCartOpen}>
              <ShoppingBag className="w-5 h-5 hover:text-[#d87f4a] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#d87f4a] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
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
            <ul className="space-y-3">
              <li><span onClick={() => handleNavClick("home")} className={navLinkClass("home")}>Home</span></li>
              <li><span onClick={() => handleNavClick("products")} className={navLinkClass("products")}>Products</span></li>
              <li><span onClick={() => handleNavClick("about")} className={navLinkClass("about")}>About</span></li>
              <li><span onClick={() => handleNavClick("journal")} className={navLinkClass("journal")}>Journal</span></li>
              <li><span onClick={() => handleNavClick("contact")} className={navLinkClass("contact")}>Contact</span></li>
            </ul>
          </nav>
        )}

        {/* Products Mega Menu - Rendered as a direct child of the main relative container */}
        {isProductsMenuOpen && (
          <ProductsMegaMenu onNavigate={onNavigate} />
        )}
      </div>
    </header>
  );
}
