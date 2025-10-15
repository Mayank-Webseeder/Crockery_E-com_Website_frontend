import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { useState } from "react";

interface FiltersSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const colors = [
  { name: "Baby Blue", count: 2 },
  { name: "Beehive", count: 1 },
  { name: "Beige", count: 4 },
  { name: "Betulia", count: 1 },
  { name: "Black", count: 8 },
  { name: "Black Oak", count: 2 },
  { name: "Blue", count: 2 },
  { name: "Bordeaux", count: 1 },
  { name: "Brown", count: 2 },
  { name: "Gin", count: 1 },
  { name: "Gold", count: 3 },
  { name: "Gray", count: 5 },
  { name: "Green", count: 4 },
  { name: "Ivory", count: 2 }
];

export function FiltersSidebar({ isOpen, onClose }: FiltersSidebarProps) {
  const [activeTab, setActiveTab] = useState<"ambientes" | "amurin">("ambientes");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0]);
  const [showAllColors, setShowAllColors] = useState(false);

  const toggleColor = (colorName: string) => {
    setSelectedColors(prev => 
      prev.includes(colorName) 
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    );
  };

  const displayedColors = showAllColors ? colors : colors.slice(0, 7);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3>Filters</h3>
            <button 
              onClick={onClose}
              className="text-[#d87f4a] hover:text-[#b86a3d] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border">
            <button
              onClick={() => setActiveTab("ambientes")}
              className={`pb-2 px-1 transition-colors ${
                activeTab === "ambientes" 
                  ? "border-b-2 border-[#d87f4a] text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ambientes
            </button>
            <button
              onClick={() => setActiveTab("amurin")}
              className={`pb-2 px-1 transition-colors ${
                activeTab === "amurin" 
                  ? "border-b-2 border-[#d87f4a] text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Amurin
            </button>
          </div>

          {/* Search */}
          <div className="mb-8 flex gap-2">
            <Input 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-10 bg-background"
            />
            <Button 
              className="bg-black text-white hover:bg-black/90 h-10 px-6"
            >
              Search
            </Button>
          </div>

          {/* Color Filters */}
          <div className="mb-8">
            <h3 className="mb-6">Color</h3>
            <div className="space-y-3">
              {displayedColors.map((color) => (
                <div key={color.name} className="flex items-center gap-3">
                  <Checkbox 
                    id={color.name}
                    checked={selectedColors.includes(color.name)}
                    onCheckedChange={() => toggleColor(color.name)}
                  />
                  <label 
                    htmlFor={color.name}
                    className="flex-1 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {color.name} ({color.count})
                  </label>
                </div>
              ))}
            </div>
            
            {!showAllColors && (
              <button
                onClick={() => setShowAllColors(true)}
                className="mt-4 text-[#d87f4a] hover:underline text-sm"
              >
                Show 14 more
              </button>
            )}
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="mb-6">Filter by price</h3>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={11000}
              step={100}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>Max. Price</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
