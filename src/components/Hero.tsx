import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" 
        >
          <source src="/crockery-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '60px' /* Adjust this to match "shop by occasion" text size */ }}>
            Made with Care for a Cleaner Future
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
            Explore our curated selection of handcrafted crockery and tableware, designed to elevate every meal into a memorable experience.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 gap-2 text-lg px-8 py-6"
          >
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
