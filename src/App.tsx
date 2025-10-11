import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Sustainability } from "./components/Sustainability";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Journal } from "./components/Journal";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Sustainability />
        <FeaturedProducts />
        <Journal />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
