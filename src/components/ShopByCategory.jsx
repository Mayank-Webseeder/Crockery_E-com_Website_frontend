import { ImageWithFallback } from "./figma/ImageWithFallback";

function LargeCategoryCard({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden aspect-[4/5]"
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl">{title}</h3>
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Tableware",
    image: "/tableware1.webp",
  },
  {
    title: "Kitchenware",
    image: "/kitchenware.webp",
  },
  {
    title: "Serving Pieces",
    image: "/serving.jpg",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="w-full px-4 lg:px-8">
        <h1
          className="mb-8"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 400,
            fontSize: "48px",
          }}
        >
          Shop by category
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <LargeCategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}