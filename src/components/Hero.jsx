import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[800px] w-full overflow-hidden">
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
        <div className="max-w-xl text-white">
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 400,
              fontSize: "48px",
            }}
          >
            Made with Care for a Cleaner Future
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-white/90 leading-relaxed">
            Explore our curated selection of handcrafted crockery and tableware, designed to elevate every meal into a memorable experience.
          </p>
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 gap-2 text-md px-6 py-4"
          >
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}