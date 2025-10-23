import { useState, useMemo, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProductCard } from "../components/ProductCard";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";
import { FiltersSidebar } from "../components/FiltersSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { SlidersHorizontal, LayoutGrid, Grid3x3 } from "lucide-react";
import { allProducts as products } from "../data/products"; // ✨ CORRECT: Using central product data

// --- Data ---
// Note: The large 'products' array has been removed from here and is now imported above.

const categoryImages = [
  {
    title: "Dinnerware Collection",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaXZpbmclMjByb29tJTIwY2hhaXJ8ZW58MXx8fHwxNzYwNTA2NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Serveware Sets",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMzk4NjA1fDA&ixlib.rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Tea & Coffee Sets",
    image:
      "https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzYwNDUxODAzfDA&ixlib.rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Fine China",
    image:
      "https://images.unsplash.com/photo-1520624197313-3fa687a6add5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjA0NTA5NzJ8MA&ixlib.rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Artisan Pottery",
    image:
      "https://images.unsplash.com/photo-1622433388405-1a28d05f85f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWdodGluZyUyMGZpeHR1cmVzfGVufDF8fHx8MTc2MDUwNjQ0MXww&ixlib.rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Table Accessories",
    image:
      "https://images.unsplash.com/photo-1650338031185-1e97add7a389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjBkaW5pbmd8ZW58MXx8fHwxNzYwNTA2NDQwfDA&ixlib.rb-4.1.0&q=80&w=1080",
  },
];

export function ProductsPage() {
  const [viewMode, setViewMode] = useState("grid3");
  const [sortBy, setSortBy] = useState("default");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const productsSectionRef = useRef(null);

  const gridClass = {
    list: "grid-cols-1",
    grid2: "grid-cols-1 md:grid-cols-2",
    grid3: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
  }[viewMode];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        sorted.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.id - a.id;
        });
        break;
      default:
        sorted.sort((a, b) => a.id - b.id);
        break;
    }
    return sorted;
  }, [sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      {/* Category Images */}
      <div className="w-full px-4 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categoryImages.map((category) => (
            <div key={category.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-center px-2 text-sm">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div ref={productsSectionRef} className="w-full px-8 lg:px-16 py-16 scroll-mt-20">
        <div className="w-full">
          {/* Filters and View Options */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div>
              <h2 className="text-2xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 400, fontSize: "70px" }}>
                Products
              </h2>
              <p className="text-muted-foreground text-sm">
                Showing {paginatedProducts.length} of {products.length} results
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 border border-border rounded p-1">
                <button
                  onClick={() => setViewMode("grid2")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid2" ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid3")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid3" ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
              </div>
              <Button
                variant="outline"
                className="gap-2 h-10"
                onClick={() => setIsFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-10">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid ${gridClass} gap-4`}>
            {paginatedProducts.map((product) => (
              <div key={product.id} className="relative">
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-white border border-[#d87f4a] text-[#d87f4a] px-2 py-0.5 text-xs z-10">
                    {product.badge}
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-[#d87f4a] text-white px-2 py-0.5 text-xs z-10">
                    {product.discount}
                  </div>
                )}
                <ProductCard product={product} />
                {product.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through mt-1">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-16">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                ← Previous
              </button>
            )}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>

      <FiltersSidebar
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
      <StayInspired />
      <SectionDivider />
    </div>
  );
}