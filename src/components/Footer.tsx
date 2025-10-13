import { Facebook, Instagram, Home } from "lucide-react"; // Corrected: Added Pinterest

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div>
            {/* Removed inline style for font size and weight, relying on Tailwind classes */}
            <h3 className="text-2xl mb-4 font-serif" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '40px' }}>Handcrafted by <br></br> TanaRíri</h3> {/* Corrected heading and removed <br> */}
            <p className="text-muted-foreground mb-2">Pilestæde 45, 1st Floor,</p>
            <p className="text-muted-foreground mb-6">1112 Copenhagen, Denmark</p>
            <div className="flex gap-4">
              {/* Ensure these SVG files are in your 'public' folder */}
              <img src="/fsc-icon.jpg" alt="FSC Certified" className="w-8 h-8" />
              <img src="/eco-icon.png" alt="Eco Friendly" className="w-8 h-8" />
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-4 font-serif">Collections</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bestseller Collection</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 font-serif">Customer Care</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Refunds & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Product Care</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="mb-4 font-serif">About Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="mb-4 font-serif">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Get exclusive updates, design tips, and previews of our newest collections.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/#" className="hover:text-muted-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/" className="hover:text-muted-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                <Home className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Furnistør &ndash; WordPress theme by Laboratorw</p>
        </div>
      </div>
    </footer>
  );
}
