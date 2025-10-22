import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function ProductsMegaMenu({ onNavigate }) {
  const [activeLink, setActiveLink] = useState(null);

  // Modified handleLinkClick to accept a category and construct the path
  const handleLinkClick = (link, category = null) => {
    setActiveLink(link);
    let path = "/products"; // Always navigate to the products page
    if (category) {
      path += `?category=${category}`; // Add category as a query parameter
    }
    onNavigate(path); // Call onNavigate with the constructed path
  };

  const linkClass = (link) =>
    `cursor-pointer transition-colors text-sm ${
      activeLink === link
        ? "text-[#d87f4a] underline underline-offset-4"
        : "hover:text-[#d87f4a] hover:underline underline-offset-4"
    }`;

  return (
    <div className="bg-white border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex w-full justify-between gap-8">
          {/* Column 1 - Living Room */}
          <div className="min-w-[120px]">
            <h3 className="mb-3 text-md">Living Room</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span
                  onClick={() => handleLinkClick("armchairs", "armchairs")} // Pass category
                  className={linkClass("armchairs")}
                >
                  Armchairs
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("coffee-tables", "coffee-tables")} // Pass category
                  className={linkClass("coffee-tables")}
                >
                  Coffee Tables
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("sideboards", "sideboards")} // Pass category
                  className={linkClass("sideboards")}
                >
                  Sideboards
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("sofas", "sofas")} // Pass category
                  className={linkClass("sofas")}
                >
                  Sofas
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Bedroom */}
          <div className="min-w-[120px]">
            <h3 className="mb-3 text-md">Bedroom</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span
                  onClick={() => handleLinkClick("beds", "beds")} // Pass category
                  className={linkClass("beds")}
                >
                  Beds
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("nightstands", "nightstands")} // Pass category
                  className={linkClass("nightstands")}
                >
                  Nightstands
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("wardrobes", "wardrobes")} // Pass category
                  className={linkClass("wardrobes")}
                >
                  Wardrobes
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Dining Room & Lighting */}
          <div className="min-w-[120px]">
            <h3 className="mb-3 text-md">Dining Room</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span
                  onClick={() => handleLinkClick("benches", "benches")} // Pass category
                  className={linkClass("benches")}
                >
                  Benches
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("dining-chairs", "dining-chairs")} // Pass category
                  className={linkClass("dining-chairs")}
                >
                  Dining Chairs
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Home Decor & Outdoor */}
          <div className="min-w-[120px]">
            <h3 className="mb-3 text-md">Home Decor</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span
                  onClick={() => handleLinkClick("mirrors", "mirrors")} // Pass category
                  className={linkClass("mirrors")}
                >
                  Mirrors
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleLinkClick("rugs", "rugs")} // Pass category
                  className={linkClass("rugs")}
                >
                  Rugs
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5 - Image "Just In" */}
          <div className="w-24">
            <div
              className="aspect-[3/4] overflow-hidden mb-2 cursor-pointer"
              onClick={() => handleLinkClick("just-in", "just-in")} // Pass category
            >
              <ImageWithFallback
                src="/menu 1.jpg"
                alt="Just In"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={`text-center cursor-pointer text-sm ${linkClass(
                "just-in-link"
              )}`}
              onClick={() => handleLinkClick("just-in-link", "just-in")} // Pass category
            >
              Just In
            </h3>
          </div>

          {/* Column 6 - Image "Outlet" */}
          <div className="w-24">
            <div
              className="aspect-[3/4] overflow-hidden mb-2 cursor-pointer"
              onClick={() => handleLinkClick("outlet", "outlet")} // Pass category
            >
              <ImageWithFallback
                src="/menu 2.jpg"
                alt="Outlet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={`text-center cursor-pointer text-sm ${linkClass(
                "outlet-link"
              )}`}
              onClick={() => handleLinkClick("outlet-link", "outlet")} // Pass category
            >
              Outlet
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}