import { useState } from "react";
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
import { SlidersHorizontal, LayoutGrid, LayoutList, Grid3x3 } from "lucide-react";

// (Keep the categoryImages and products arrays as they were)
const categoryImages = [
  {
    title: "Dinnerware Collection",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaXZpbmclMjByb29tJTIwY2hhaXJ8ZW58MXx8fHwxNzYwNTA2NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Serveware Sets",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMzk4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Tea & Coffee Sets",
    image:
      "https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzYwNDUxODAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Fine China",
    image:
      "https://images.unsplash.com/photo-1520624197313-3fa687a6add5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjA0NTA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Artisan Pottery",
    image:
      "https://images.unsplash.com/photo-1622433388405-1a28d05f85f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWdodGluZyUyMGZpeHR1cmVzfGVufDF8fHx8MTc2MDUwNjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Table Accessories",
    image:
      "https://images.unsplash.com/photo-1650338031185-1e97add7a389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjBkaW5pbmd8ZW58MXx8fHwxNzYwNTA2NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const products = [
  {
    id: 1,
    name: "Artisan Bowl",
    price: 290.0,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
    hoverImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    badge: "FEATURED",
  },
  {
    id: 2,
    name: "Ceramic Dinner Plate",
    price: 475.0,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800",
    hoverImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
  },
  {
    id: 3,
    name: "Handmade Tea Cup",
    price: 199.0,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
    hoverImage: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800",
    discount: "-15%",
  },
  {
    id: 4,
    name: "Porcelain Bowl Set",
    price: 599.0,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
  },
  {
    id: 5,
    name: "Glazed Serving Dish",
    price: 150.0,
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800",
    hoverImage: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=800",
  },
  {
    id: 6,
    name: "Ceramic Dinner Set",
    price: 320.0,
    image: "https://images.unsplash.com/photo-1584990347449-3ec4c0a8f861?w=800",
    hoverImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    isNew: true,
  },
  {
    id: 7,
    name: "Stoneware Mug",
    price: 425.0,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
    hoverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
  {
    id: 8,
    name: "Vintage Vase Collection",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800",
    hoverImage: "https://images.unsplash.com/photo-1581858870852-5d32b7d523c7?w=800",
  },
  {
    id: 9,
    name: "Modern Plate Set",
    price: 265.0,
    image: "https://images.unsplash.com/photo-1574770118503-13d535dd1b5b?w=800",
    hoverImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
  },
  {
    id: 10,
    name: "Terracotta Planter",
    price: 390.0,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
  },
  {
    id: 11,
    name: "Ceramic Candle Holders",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=800",
    hoverImage: "https://images.unsplash.com/photo-1584990347449-3ec4c0a8f861?w=800",
  },
  {
    id: 12,
    name: "Glazed Soup Bowl",
    price: 125.0,
    image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?w=800",
    hoverImage: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=800",
  },
  {
    id: 13,
    name: "Porcelain Tea Set",
    price: 145.0,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
    hoverImage: "https://images.unsplash.com/photo-1581858870852-5d32b7d523c7?w=800",
  },
  {
    id: 14,
    name: "Handpainted Plate",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800",
    hoverImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
  },
  {
    id: 15,
    name: "Ceramic Serving Tray",
    price: 89.0,
    image: "https://images.unsplash.com/photo-1565083222079-35801f57fc60?w=800",
    hoverImage: "https://images.unsplash.com/photo-1594755400810-c9a380f6e901?w=800",
  },
];


export function ProductsPage() {
  const [viewMode, setViewMode] = useState("grid3");
  const [sortBy, setSortBy] = useState("default");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const gridClass = {
    list: "grid-cols-1",
    grid2: "grid-cols-1 md:grid-cols-2",
    grid3: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
  }[viewMode];

  return (
    <div>
      {/* Category Images with Overlay Text */}
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
      <div className="w-full px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-1 text-2xl">Products</h2>
          <p className="text-muted-foreground text-sm">15 of 78 results</p>
        </div>

        {/* Filters and View Options */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border border-border rounded p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
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
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${gridClass} gap-4`}>
          {products.map((product) => (
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
              
              {/* Pass the entire product object as a prop */}
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
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="w-10 h-10 bg-black text-white flex items-center justify-center">1</button>
          <button className="w-10 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center">2</button>
          <button className="w-10 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center">3</button>
          <span className="px-2">...</span>
          <button className="w-10 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center">5</button>
          <button className="w-10 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center">6</button>
          <button className="px-4 h-10 border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2">Next →</button>
        </div>
      </div>

      <FiltersSidebar
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />

      <SectionDivider />
      <StayInspired />
    </div>
  );
}