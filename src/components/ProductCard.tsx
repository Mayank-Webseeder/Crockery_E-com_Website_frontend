import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export function ProductCard({ name, price, image, isNew }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-sm bg-muted">
        <ImageWithFallback 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-sm">
            New
          </div>
        )}
        
        {/* Wishlist button */}
        <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-5 h-5" />
        </button>
        
        {/* Quick add button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="mb-2">{name}</h3>
        <p className="text-muted-foreground">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
