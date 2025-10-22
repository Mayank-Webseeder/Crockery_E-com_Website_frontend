import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background pt-12 pb-6">
      <div className="w-full px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h1
              className="mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "29px",
              }}
            >
              Handcrafted by
              <br />
              TanaRíri
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <img src="/eco-icon.png" alt="Eco Friendly" className="w-8 h-8" />
              <img src="/TanaRiri-Logo.png" alt="TanaRiri Logo" className="w-8 h-8" />
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-4 text-md">Collections</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/products" className="hover:text-foreground transition-colors">Products</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Shop By Category</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Shop By Occasions</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bestseller Collection</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 text-md">Customer Care</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Refunds & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-md">Information</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="mb-4 text-md">Stay Connected</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get exclusive updates, design tips, and previews of our newest collections.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#d87f4a] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-300 pt-6 flex justify-between items-center text-xs text-gray-500">
          <p>&copy; TANARIRI 2025, ALL RIGHTS RESERVED</p>
          <p> DESIGNED BY WEBSEEDER TECHNOLOGY</p>
        </div>
      </div>
    </footer>
  );
}