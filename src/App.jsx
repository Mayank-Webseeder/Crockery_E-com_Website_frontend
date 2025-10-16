import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { JournalPage } from "./pages/JournalPage";
import { ContactPage } from "./pages/ContactPage";
import { FiltersSidebar } from "./components/FiltersSidebar";
import { CartProvider } from "./context/CartContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsCartSidebarOpen(false);
    setIsFiltersSidebarOpen(false);
  };

  const handleCartOpen = () => {
    setIsCartSidebarOpen(true);
    setIsFiltersSidebarOpen(false);
  };

  const handleCartClose = () => {
    setIsCartSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "products":
        return <ProductsPage />;
      case "about":
        return <AboutPage />;
      case "journal":
        return <JournalPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCartOpen={handleCartOpen}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      <FiltersSidebar
        isOpen={isFiltersSidebarOpen}
        onClose={() => setIsFiltersSidebarOpen(false)}
      />
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={handleCartClose}
        onNavigate={handleNavigate} // This line was missing
      />
    </div>
  );
}

// Export the App function that wraps AppContent with CartProvider
export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}