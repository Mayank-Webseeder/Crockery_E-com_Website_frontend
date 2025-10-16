import { Hero } from "../components/Hero";
import { ShopByOccasion } from "../components/ShopByOccasion";
import { SectionDivider } from "../components/SectionDivider";
import { Sustainability } from "../components/Sustainability";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { CollectionEdit } from "../components/CollectionEdit";
import { ShopByCategory } from "../components/ShopByCategory";
import { Features } from "../components/Features";
import { FAQ } from "../components/FAQ";
import { StayInspired } from "../components/StayInspired";

export function HomePage() {
  return (
    <>
      <Hero />
      <ShopByOccasion />
      <SectionDivider />
      <Sustainability />
      <SectionDivider />
      <FeaturedProducts />
      <SectionDivider />
      <CollectionEdit />
      <SectionDivider />
      <ShopByCategory />
      <Features />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <StayInspired />
    </>
  );
}