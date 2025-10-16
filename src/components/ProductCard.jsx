import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Step 1: Import the useCart hook

export function ProductCard({ product }) { // Changed props to accept the whole product object
  const { name, price, image, hoverImage, isNew } = product; // Destructure product object
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart(); // Step 2: Get the addToCart function from context

  const handleAddToCart = () => {
    addToCart(product); // Step 3: Call addToCart with the product
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square mb-3 overflow-hidden bg-muted">
        <ImageWithFallback
          src={isHovered ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Badges */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-0.5 text-xs">
            New
          </div>
        )}
      </div>

      <div className="flex items-start gap-2">
        {/* Heart icon */}
        <button
          className={`pt-1 hover:text-[#d87f4a] transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Heart className="w-5 h-5" />
        </button>

        <div className="flex-1">
          <h3 className="mb-1 text-md">{name}</h3>
          <div className="relative h-5">
            {/* Price */}
            <p
              className={`text-muted-foreground transition-opacity duration-300 text-sm ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              ${price.toFixed(2)}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart} // Step 4: Attach the onClick handler
              className={`absolute top-0 left-0 flex items-center gap-1 hover:text-[#d87f4a] transition-all duration-300 text-sm ${
                isHovered ? "opacity-100" : "opacity-0"
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