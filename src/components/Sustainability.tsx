import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Sustainability() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Image */}
            <div className="aspect-[2/3] overflow-hidden">
              <ImageWithFallback 
                src="/sustain 2.png"
                alt="Crafting sustainable crockery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '60px' }}>
                The Art of Crockery Making
              </h1>
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Every furniture embodies a legacy of meticulous craftsmanship and unwavering dedication. We believe that our choices impact the planet, and we strive to make a positive difference through our high-quality designs. By selecting sustainable resources and promoting fair trade, we aim to deliver products that our customers can feel proud to own.
                </p>
                <p>
                  Our artisans blend traditional techniques with modern sensibilities, ensuring each piece is both timeless and environmentally conscious.
                </p>
                </div>
            </div>
          </div>

          {/* Right Column - starts lower */}
          <div className="space-y-8 lg:pt-32">
            {/* Content */}
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '60px' }}>
                Made with Care for a Cleaner Future
              </h1>
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  <p>
                    At TanaRiri, we prioritize eco-friendly materials and ethical production practices in every aspect of our business. Our unwavering commitment to sustainability ensures that every piece of crockery we create is not only beautiful and stylish but also made with a sense of responsibility towards the environment.
                  </p>
                  <p>
                    We continuously innovate to reduce our environmental footprint, from sourcing renewable materials to minimizing waste in our production processes. Our goal is to inspire conscious choices and contribute to a greener, more sustainable future for all.
                  </p>
                </div>
            </div>

            {/* Image */}
            <div className="aspect-[2/3] overflow-hidden">
              <ImageWithFallback 
                src="/sustain 3.png"
                alt="Pottery making process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
