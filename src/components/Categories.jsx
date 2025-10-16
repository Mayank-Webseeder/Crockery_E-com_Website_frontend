import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Dinnerware",
    image:
      "https://images.unsplash.com/photo-1740811620405-8a505f3eb13c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZGlubmVyd2FyZSUyMHBsYXRlc3xlbnwxfHx8fDE3NjAxNzk3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Serveware",
    image:
      "https://images.unsplash.com/photo-1510035618584-c442b241abe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXdhcmUlMjBib3dsfGVufDF8fHx8MTc2MDE3OTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Drinkware",
    image:
      "https://images.unsplash.com/photo-1574585046455-827418063fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJpbmt3YXJlJTIwY3Vwc3xlbnwxfHx8fDE3NjAxNzk3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Tea Sets",
    image:
      "https://images.unsplash.com/photo-1565550967973-727d4372df7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGVhcG90JTIwc2V0fGVufDF8fHx8MTc2MDE3OTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Fine China",
    image:
      "https://images.unsplash.com/photo-1700224315422-e84cd25b3a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwY2hpbmElMjBwbGF0ZXN8ZW58MXx8fHwxNzYwMTc5NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Cutlery",
    image:
      "https://images.unsplash.com/photo-1755235021007-46868b346577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY3JvY2tlcnklMjB0YWJsZXdhcmV8ZW58MXx8fHwxNzYwMTc5NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Categories() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="w-full px-4 lg:px-8">
        <h2 className="mb-8 text-3xl">Shop by category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {categories.map((category, index) => (
            <CategoryCard
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