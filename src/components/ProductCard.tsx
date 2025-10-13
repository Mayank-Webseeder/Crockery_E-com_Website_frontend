import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
}

export function ProductCard({ name, price, image, hoverImage, isNew }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square mb-4 overflow-hidden bg-muted">
        <ImageWithFallback 
          src={isHovered ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Badges */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1">
            New
          </div>
        )}
      </div>
      
      <div className="flex items-start gap-3">
        {/* Heart icon - shown on hover, aligned to left */}
        <button 
          className={`pt-1 hover:text-[#d87f4a] transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Heart className="w-5 h-5" />
        </button>

        <div className="flex-1">
          <h3 className="mb-2">{name}</h3>
          <div className="relative h-6">
            {/* Price - shown by default */}
            <p className={`text-muted-foreground transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
              ${price.toFixed(2)}
            </p>
            
            {/* Add to Cart - shown on hover */}
            <button 
              className={`absolute top-0 left-0 flex items-center gap-2 hover:text-[#d87f4a] transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
