import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Sustainability() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          {/* Image */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY3JhZnRzbWFuc2hpcCUyMGhhbmRzfGVufDF8fHx8MTc2MDE4MTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Crafting sustainable crockery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
              The Art of Crockery Making
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Every furniture embodies a legacy of meticulous craftsmanship and unwavering dedication. We believe that our choices impact the planet, and we strive to make a positive difference through our high-quality designs. By selecting sustainable resources and promoting fair trade, we aim to deliver products that our customers can feel proud to own.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:order-1">
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
              Made with Care for a Cleaner Future
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At TanaRiri, we prioritize eco-friendly materials and ethical production practices in every aspect of our business. Our unwavering commitment to sustainability ensures that every piece of crockery we create is not only beautiful and stylish but also made with a sense of responsibility towards the environment.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden lg:order-2">
            <ImageWithFallback 
              src="/sustainability.webp"
              alt="Pottery making process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
