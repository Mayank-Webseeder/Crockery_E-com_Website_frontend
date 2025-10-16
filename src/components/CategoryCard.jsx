import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CategoryCard({ title, image, onClick }) {
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
        <h3 className="text-white text-xl">{title}</h3>
      </div>
    </div>
  );
}