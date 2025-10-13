import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";

const products = [
  {
    name: "Artisan Ceramic Bowl Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591623657169-a09670423dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNlcmFtaWMlMjBib3dsfGVufDF8fHx8MTc2MDEwMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1635166197966-73207e005887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMHRhYmxlfGVufDF8fHx8MTc2MDM0NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  },
  {
    name: "Classic Dinner Plate Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584990347784-da6aaa2a4bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwbGF0ZSUyMHNldHxlbnwxfHx8fDE3NjAxNzk3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1759753865666-a6bd3da8971d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MDM0NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  },
  {
    name: "Handcrafted Ceramic Mug",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1724905136845-b56958ce82cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwY3VwfGVufDF8fHx8MTc2MDE3OTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1555763349-8eecb62a02b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwY29mZmVlfGVufDF8fHx8MTc2MDI2OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true
  },
  {
    name: "Elegant Serving Platter",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1758272256506-b52fac1d17ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwcGxhdHRlciUyMGRpc2h8ZW58MXx8fHwxNzYwMTc5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1738421525319-7a9d839bdf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZGlubmVyd2FyZSUyMHNldHxlbnwxfHx8fDE3NjAzNDU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="w-full px-8 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '60px' }}>
            Explore Products
          </h1>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
