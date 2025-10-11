import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top banner - optional promotional message */}
        <div className="text-center py-2 border-b border-border">
          <p className="text-sm text-muted-foreground">Free shipping on orders above $50</p>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl tracking-wide">TanaRiri</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="hover:text-muted-foreground transition-colors">Home</a>
            <a href="#products" className="hover:text-muted-foreground transition-colors">Products</a>
            <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
            <a href="#journal" className="hover:text-muted-foreground transition-colors">Journal</a>
            <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="hover:text-muted-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-muted-foreground transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="hover:text-muted-foreground transition-colors">Home</a>
              <a href="#products" className="hover:text-muted-foreground transition-colors">Products</a>
              <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
              <a href="#journal" className="hover:text-muted-foreground transition-colors">Journal</a>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
