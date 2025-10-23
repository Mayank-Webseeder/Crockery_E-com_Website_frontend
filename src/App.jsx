import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AuthFooter } from "./components/AuthFooter"; // Import the new component
import { CartSidebar } from "./components/CartSidebar";
import { FiltersSidebar } from "./components/FiltersSidebar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ProfilePage } from './pages/ProfilePage';
import { OrdersPage } from './pages/OrdersPage';
import { LostPasswordPage } from './pages/LostPasswordPage';
import './index.css';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchProvider } from './context/SearchContext'; // Import SearchProvider
import { SearchResultsPage } from './pages/SearchResultsPage';

// Layout for pages that should only show the form (Login, SignUp, etc.)
const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="z-10"> {/* Ensure content is above the video overlay */}
        <Outlet />
      </main>
      <AuthFooter /> {/* Add the footer here */}
    </div>
  );
};

// Layout for all other pages with Header and Footer
const MainLayout = ({ onCartOpen, onFiltersOpen }) => {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartOpen={onCartOpen} onFiltersOpen={isProductsPage ? onFiltersOpen : null} />
      <main className="flex-grow">
        <Outlet context={{ onFiltersOpen }} />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);

  const handleCartOpen = () => setIsCartSidebarOpen(true);
  const handleCartClose = () => setIsCartSidebarOpen(false);

  const handleFiltersOpen = () => setIsFiltersSidebarOpen(true);
  const handleFiltersClose = () => setIsFiltersSidebarOpen(false);

  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            {/* Routes with only the form */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/lost-password" element={<LostPasswordPage />} />
            </Route>

            {/* Routes with Header and Footer */}
            <Route element={<MainLayout onCartOpen={handleCartOpen} onFiltersOpen={handleFiltersOpen} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage onFiltersOpen={handleFiltersOpen} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
            </Route>
          </Routes>
          <CartSidebar
            isOpen={isCartSidebarOpen}
            onClose={handleCartClose}
          />
          <FiltersSidebar
            isOpen={isFiltersSidebarOpen}
            onClose={handleFiltersClose}
          />
        </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}