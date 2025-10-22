import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FiltersSidebar } from "./components/FiltersSidebar";
import { CartProvider } from "./context/CartContext";
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ProfilePage } from './pages/ProfilePage';
import { OrdersPage } from './pages/OrdersPage';
import { LostPasswordPage } from './pages/LostPasswordPage';
import './index.css';

export default function App() {
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartSidebarOpen(true);
    setIsFiltersSidebarOpen(false);
  };

  const handleCartClose = () => {
    setIsCartSidebarOpen(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header
            onCartOpen={handleCartOpen}
          />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Routes for the dropdown links */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/lost-password" element={<LostPasswordPage />} />
            </Routes>
          </main>
          <Footer />
          <FiltersSidebar
            isOpen={isFiltersSidebarOpen}
            onClose={() => setIsFiltersSidebarOpen(false)}
          />
          <CartSidebar
            isOpen={isCartSidebarOpen}
            onClose={handleCartClose}
          />
        </div>
      </Router>
    </CartProvider>
  );
}