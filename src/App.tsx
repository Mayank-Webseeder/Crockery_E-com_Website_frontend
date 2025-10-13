import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { JournalPage } from "./pages/JournalPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    <div className="min-h-screen">
      <Header 
        onCartOpen={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}
