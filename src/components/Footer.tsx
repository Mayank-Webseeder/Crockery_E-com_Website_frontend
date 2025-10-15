import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '30px' }}>Handcrafted by<br />TanaRíri</h1>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Pilestraede 45, 1st Floor,</p>
              <p>1112 Copenhagen, Denmark</p>
              <div className="flex gap-4">
            {/* Ensure these SVG files are in your 'public' folder */}
            <img src="/fsc-icon.jpg" alt="FSC Certified" className="w-8 h-8" />
            <img src="/eco-icon.png" alt="Eco Friendly" className="w-8 h-8" />
          </div>
            </div>
            </div>
            
            

          {/* Collections */}
          <div>
            <h4 className="mb-6">Collections</h4>
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
            <h4 className="mb-6">Customer Care</h4>
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
            <h4 className="mb-6">About Us</h4>
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
            <h4 className="mb-6">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Get exclusive updates, design tips, and previews of our newest collections.
            </p>
            <div className="flex gap-4">
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
