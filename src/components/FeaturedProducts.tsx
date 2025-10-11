import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";

const products = [
  {
    name: "Artisan Ceramic Bowl Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591623657169-a09670423dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNlcmFtaWMlMjBib3dsfGVufDF8fHx8MTc2MDEwMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  },
  {
    name: "Classic Dinner Plate Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584990347784-da6aaa2a4bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwbGF0ZSUyMHNldHxlbnwxfHx8fDE3NjAxNzk3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  },
  {
    name: "Handcrafted Ceramic Mug",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1724905136845-b56958ce82cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwY3VwfGVufDF8fHx8MTc2MDE3OTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  },
  {
    name: "Elegant Serving Platter",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1758272256506-b52fac1d17ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwcGxhdHRlciUyMGRpc2h8ZW58MXx8fHwxNzYwMTc5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  },
  {
    name: "Premium Tea Set Collection",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1565550967973-727d4372df7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGVhcG90JTIwc2V0fGVufDF8fHx8MTc2MDE3OTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  },
  {
    name: "Modern Dinnerware Collection",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1740811620405-8a505f3eb13c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZGlubmVyd2FyZSUyMHBsYXRlc3xlbnwxfHx8fDE3NjAxNzk3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  },
  {
    name: "Minimalist Bowl Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1510035618584-c442b241abe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXdhcmUlMjBib3dsfGVufDF8fHx8MTc2MDE3OTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  },
  {
    name: "Fine China Drinkware Set",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1574585046455-827418063fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJpbmt3YXJlJTIwY3Vwc3xlbnwxfHx8fDE3NjAxNzk3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl">Featured Products</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
