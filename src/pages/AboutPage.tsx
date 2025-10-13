import { Sustainability } from "../components/Sustainability";
import { Features } from "../components/Features";
import { SectionDivider } from "../components/SectionDivider";

export function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="w-full px-8 lg:px-16 mb-16">
        <h1 className="mb-6">About TanaRiri</h1>
        <div className="max-w-3xl space-y-6 text-muted-foreground">
          <p>
            TanaRiri is a Copenhagen-based crockery and tableware brand dedicated to creating beautiful, sustainable pieces that elevate everyday dining experiences.
          </p>
          <p>
            Founded with a passion for craftsmanship and a commitment to environmental responsibility, we work with skilled artisans to bring you thoughtfully designed products that stand the test of time.
          </p>
        </div>
      </div>
      <Sustainability />
      <SectionDivider />
      <Features />
    </div>
  );
}
