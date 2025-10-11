import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">TanaRiri</h3>
            <p className="text-muted-foreground mb-6">
              Crafting elegant crockery for modern living since 2020.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-muted-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4">Shop</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Dinnerware</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Serveware</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Drinkware</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tea Sets</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Fine China</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4">Help</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4">About</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 TanaRiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
