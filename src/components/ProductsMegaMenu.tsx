import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ProductsMegaMenuProps {
  onNavigate: (page: string) => void;
}

export function ProductsMegaMenu({ onNavigate }: ProductsMegaMenuProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string, page?: string) => {
    setActiveLink(link);
    if (page) {
      onNavigate(page);
    }
  };

  const linkClass = (link: string) =>
    `cursor-pointer transition-colors ${
      activeLink === link
        ? "text-[#d87f4a] underline underline-offset-4"
        : "hover:text-[#d87f4a] hover:underline underline-offset-4"
    }`;

  return (
    <div className="absolute left-0 right-0 top-full bg-white border border-border shadow-lg z-50"> {/* Changed positioning and width */}
      <div className="px-12 py-10">
        <div className="flex gap-12">
          {/* Column 1 - Living Room */}
          <div className="min-w-[140px]">
            <h3 className="mb-4">Living Room</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("armchairs")} className={linkClass("armchairs")}>
                  Armchairs
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("coffee-tables")} className={linkClass("coffee-tables")}>
                  Coffee Tables
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("sideboards")} className={linkClass("sideboards")}>
                  Sideboards
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("sofas")} className={linkClass("sofas")}>
                  Sofas
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Bedroom */}
          <div className="min-w-[140px]">
            <h3 className="mb-4">Bedroom</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("beds")} className={linkClass("beds")}>
                  Beds
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("nightstands")} className={linkClass("nightstands")}>
                  Nightstands
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("wardrobes")} className={linkClass("wardrobes")}>
                  Wardrobes
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Dining Room & Lighting */}
          <div className="min-w-[140px]">
            <h3 className="mb-4">Dining Room</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("benches")} className={linkClass("benches")}>
                  Benches
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("dining-chairs")} className={linkClass("dining-chairs")}>
                  Dining Chairs
                </span>
              </li>
            </ul>

            <h3 className="mt-6 mb-4">Lighting</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("ceiling")} className={linkClass("ceiling")}>
                  Ceiling
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("floor-lamps")} className={linkClass("floor-lamps")}>
                  Floor Lamps
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("table-lamps")} className={linkClass("table-lamps")}>
                  Table Lamps
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("wall-lamps")} className={linkClass("wall-lamps")}>
                  Wall Lamps
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Home Decor & Outdoor */}
          <div className="min-w-[140px]">
            <h3 className="mb-4">Home Decor</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("mirrors")} className={linkClass("mirrors")}>
                  Mirrors
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("rugs")} className={linkClass("rugs")}>
                  Rugs
                </span>
              </li>
            </ul>

            <h3 className="mt-6 mb-4">Outdoor</h3>
            <ul className="space-y-2.5 text-muted-foreground">
              <li>
                <span onClick={() => handleLinkClick("outdoor-accessories")} className={linkClass("outdoor-accessories")}>
                  Accessories
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("outdoor-chairs")} className={linkClass("outdoor-chairs")}>
                  Chairs
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("outdoor-benches")} className={linkClass("outdoor-benches")}>
                  Benches
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("outdoor-lounge")} className={linkClass("outdoor-lounge")}>
                  Lounge
                </span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("outdoor-tables")} className={linkClass("outdoor-tables")}>
                  Tables
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5 - Image "Just In" */}
          <div className="w-32">
            <div
              className="aspect-[3/4] overflow-hidden mb-3 cursor-pointer"
              onClick={() => handleLinkClick("just-in", "products")}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1520624197313-3fa687a6add5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjA0NTA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Just In"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={`text-center cursor-pointer ${linkClass("just-in-link")}`}
              onClick={() => handleLinkClick("just-in-link", "products")}
            >
              Just In
            </h3>
          </div>

          {/* Column 6 - Image "Outlet" */}
          <div className="w-32">
            <div
              className="aspect-[3/4] overflow-hidden mb-3 cursor-pointer"
              onClick={() => handleLinkClick("outlet", "products")}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680503397692-cd0da21a0bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBzYWxlfGVufDF8fHx8MTc2MDUwNjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Outlet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={`text-center cursor-pointer ${linkClass("outlet-link")}`}
              onClick={() => handleLinkClick("outlet-link", "products")}
            >
              Outlet
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
