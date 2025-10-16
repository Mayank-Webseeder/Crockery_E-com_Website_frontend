import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

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
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Categories
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
                  Product Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Warranty
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
            <h4 className="mb-4 text-md">About Us</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Journal
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
    </footer>
  );
}