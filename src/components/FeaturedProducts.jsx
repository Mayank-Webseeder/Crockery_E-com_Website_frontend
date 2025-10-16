import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";

const products = [
  {
    id: "fp1", // Added unique ID
    name: "Artisan Ceramic Bowl Set",
    price: 89.99,
    image: "/Artisan Ceramic Bowl Set 1.jpg",
    hoverImage: "/Artisan Ceramic Bowl Set 2.webp",
    isNew: true,
  },
  {
    id: "fp2", // Added unique ID
    name: "Classic Dinner Plate Set",
    price: 129.99,
    image: "/Classic Dinner Plate Set 1.png",
    hoverImage: "/Classic Dinner Plate Set 2.png",
    isNew: false,
  },
  {
    id: "fp3", // Added unique ID
    name: "Handcrafted Ceramic Mug",
    price: 34.99,
    image: "/Handcrafted Ceramic Mug 1.png",
    hoverImage: "/Handcrafted Ceramic Mug 2.png",
    isNew: true,
  },
  {
    id: "fp4", // Added unique ID
    name: "Elegant Serving Platter",
    price: 159.99,
    image: "/Elegant Serving Platter 1.png",
    hoverImage: "/Elegant Serving Platter 2.png",
    isNew: false,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 400,
              fontSize: "48px",
            }}
          >
            Explore Products
          </h1>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product} // This is the corrected part: pass the whole object
            />
          ))}
        </div>
      </div>
    </section>
  );
}