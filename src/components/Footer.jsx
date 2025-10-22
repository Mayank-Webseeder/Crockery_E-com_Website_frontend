import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-12 pb-6">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
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
            <div className="space-y-1 text-muted-foreground mb-4 text-sm">
             
              <div className="flex items-center gap-2 mt-2">
                
                <img src="/eco-icon.png" alt="Eco Friendly" className="w-8 h-8" />
                <img src="/TanaRiri-Logo.png" alt="TanaRiri Logo" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-4 text-md">Collections</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shop By Category
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shop By Occasions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Bestseller Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 text-md">Customer Care</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Refunds & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="mb-4 text-md">Information</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="mb-4 text-md">Stay Connected</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get exclusive updates, design tips, and previews of our newest collections.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#d87f4a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d87f4a] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section (New Content) */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        {/* Left Side: Copyright */}
        <div className="order-2 sm:order-1 mt-4 sm:mt-0">
          <span>&copy; TANARIRI 2025, ALL RIGHTS RESERVED</span>
        </div>

        {/* Right Side: Designed By and ujjawalkeshri */}
        <div className="order-1 sm:order-2 flex flex-col items-center sm:items-end">
          <span className="mb-1">DESIGNED BY WEBSEEDER TECHNOLOGY</span>
          {/* Using 8px for visibility */}
        </div>
      </div>
    </footer>
  );
}