import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function CollectionEdit() {
  return (
    <section className="py-12 lg:py-16 bg-[#1a1a1a] text-white">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1721328004336-c19ee38adcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2VyYW1pYyUyMGludGVyaW9yfGVufDF8fHx8MTc2MDM0NTUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ceramic collection display"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753164725849-54c0698969e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGNsb3NldXB8ZW58MXx8fHwxNzYwMzQ1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ceramic pottery closeup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "48px",
              }}
            >
              The Artisan Edit
            </h1>
            <p className="text-white/80 mb-6 leading-relaxed">
              Unwind in style. Discover our handpicked selection of ceramic
              dinnerware, serveware, and drinkware designed for effortless
              elegance and timeless appeal.
            </p>
            <div>
              <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}