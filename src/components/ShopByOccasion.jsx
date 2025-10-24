import { ImageWithFallback } from "./figma/ImageWithFallback";

function OccasionCard({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden aspect-[3/4]"
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-lg p-2">{title}</h3>
      </div>
    </div>
  );
}




const occasions = [
  {
    title: "Tea Set",
    image:
      "https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzYwMzQ3NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Dinner Set",
    image:
      "https://images.unsplash.com/photo-1634864418654-f0c877ad7897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdW5jaCUyMGRpbmluZyUyMHRhYmxlfGVufDF8fHx8MTc2MDM0NzQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Coffee Mugs",
    image:
      "https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzYwMzQ3NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Cups & Saucers",
    image:
      "https://images.unsplash.com/photo-1668365139546-fee374c0b678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjB0aW1lJTIwY3JvY2tlcnl8ZW58MXx8fHwxNzYwMzQ3NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Milk Pot/Sugar Pot",
    image:
      "https://images.unsplash.com/photo-1551807306-69951ee44e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGxhdGUlMjBjZXJhbWljfGVufDF8fHx8MTc2MDM0NzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1759629523494-b342430f2100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBzZXJ2aW5nJTIwZGlzaHxlbnwxfHx8fDE3NjAzNDc0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ShopByOccasion() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="w-full px-4 lg:px-8">
        <h2 className="mb-8 text-3xl" style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 400,
          fontSize: "48px",
        }}>Shop by occasion</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {occasions.map((occasion, index) => (
            <OccasionCard
              key={index}
              title={occasion.title}
              image={occasion.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}