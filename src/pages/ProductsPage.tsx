import { FeaturedProducts } from "../components/FeaturedProducts";
import { ShopByCategory } from "../components/ShopByCategory";
import { SectionDivider } from "../components/SectionDivider";

export function ProductsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="w-full px-8 lg:px-16 mb-12">
        <h1 className="mb-4">Our Products</h1>
        <p className="text-muted-foreground max-w-2xl">
          Discover our curated collection of handcrafted crockery and tableware, designed to bring elegance to every meal.
        </p>
      </div>
      <FeaturedProducts />
      <SectionDivider />
      <ShopByCategory />
    </div>
  );
}
