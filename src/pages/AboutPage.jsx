import React from "react";
import { SectionDivider } from "../components/SectionDivider";
import { StayInspired } from "../components/StayInspired";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// --- SVG Icons for Design Philosophy ---

const AuthenticSimplicityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3L3 20L20 37L37 20L20 3Z" stroke="#4A5568" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const TimelessRelevanceIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z" stroke="#D87F4A" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 12V20L26 23" stroke="#D87F4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const MaterialHonestyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 16H30" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 24H30" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 10V30" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 10V30" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const HumanCenteredFunctionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10H18V18H10V10Z" stroke="#4A5568" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M22 10H30V18H22V10Z" stroke="#4A5568" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 22H18V30H10V22Z" stroke="#4A5568" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M22 22H30V30H22V22Z" stroke="#4A5568" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);


export const AboutPage = () => {
  return (
    <>
      <section className="py-16 lg:py-20 bg-background">
            <div className="w-full px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Right Column - starts lower */}
                <div className="space-y-6 lg:pt-24">
                  {/* Content */}
                  <div>
                    <h1
                      className="mb-4"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "68px",
                      }}
                    >
                      Our Story
                    </h1>
                    <div className="space-y-4 text-neutral-700 leading-relaxed">
                      <p>
                       Furnistar was born from a passion for authentic design and exceptional quality. We create furniture that bridges timeless aesthetics with the evolving needs of modern life, believing that our homes should reflect both who we are and who we aspire to become.
                      </p>
                      <br />
                      <p>
                        Our journey began with a deep appreciation for Scandinavian design heritage—where function meets beauty in perfect harmony. Yet we recognized the need to push beyond tradition, embracing innovation while honoring the craftsmanship that has defined great furniture for centuries.
                      </p>
                      <br />
                      <p>
                       We believe in creating pieces that tell stories worth passing down through generations. Today, every piece we create is conceived not just as furniture, but as an integral part of life's most meaningful moments—from quiet morning coffees to gathered celebrations with loved ones.
                      </p>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
    
                  {/* Image */}
                  <div className="aspect-[2/3] overflow-hidden">
                    <ImageWithFallback
                      src="/about-2-1024x734.jpg"
                      alt="Pottery making process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Left Column */}
                <div className="space-y-6">
                  {/* Image */}
                  <div className="aspect-[2/3] overflow-hidden">
                    <ImageWithFallback
                      src="/about-1-1024x683.jpg"
                      alt="Crafting sustainable crockery"
                      className="w-full h-full object-cover"
                    />
                  </div>
    
                  {/* Content */}
                  <div>
                    <h1
                      className="mb-4"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "58px",
                      }}
                    >
                      Where Timeless Design Meets Modern Living
                    </h1>
                    <div className="space-y-4 text-neutral-700 leading-relaxed">
                      <p >
                        Born from a passion for authentic design and exceptional quality, Furnistar emerged with a simple yet profound mission: to create furniture that tells a story worth passing down through generations. Founded on the belief that our homes should reflect both who we are and who we aspire to become, we bridge the gap between timeless aesthetics and the evolving needs of modern life.
                      </p>
                      <br />
                      
                      <p >
                        Our journey began with a deep appreciation for the Scandinavian design heritage—where function meets beauty in perfect harmony. Yet we recognized the need to push beyond tradition, embracing innovation while honoring the craftsmanship that has defined great furniture for centuries. Today, Furnistar stands as a testament to thoughtful design, where every piece is conceived not just as furniture, but as an integral part of life's most meaningful moments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      
        {/* 3. Design Philosophy Section */}
        <section className="design-philosophy-section py-20 px-4 md:px-8 lg:px-12">
          <h2 className="text-5xl font-playfair mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 max-w-7xl mx-auto">
            <div className="text-left">
              <div className="flex justify-start mb-4"><AuthenticSimplicityIcon /></div>
              <h3 className="text-xl font-semibold mb-2">Authentic Simplicity</h3>
              <p className="text-gray-600 text-justify">We believe in the power of restraint. Our designs strip away the unnecessary to reveal the essential, creating pieces that speak with quiet confidence.</p>
            </div>
            <div className="text-left">
              <div className="flex justify-start mb-4"><TimelessRelevanceIcon /></div>
              <h3 className="text-xl font-semibold mb-2">Timeless Relevance</h3>
              <p className="text-gray-600 text-justify">Trends fade, but great design endures. We create pieces that remain compelling across decades, adapting gracefully to changing lifestyles.</p>
            </div>
            <div className="text-left">
              <div className="flex justify-start mb-4"><MaterialHonestyIcon /></div>
              <h3 className="text-xl font-semibold mb-2">Material Honesty</h3>
              <p className="text-gray-600 text-justify">We let materials speak their truth. From solid oak grain to smooth stone, we celebrate natural characteristics that make each piece unique.</p>
            </div>
            <div className="text-left">
              <div className="flex justify-start mb-4"><HumanCenteredFunctionIcon /></div>
              <h3 className="text-xl font-semibold mb-2">Human-Centered Function</h3>
              <p className="text-gray-600 text-justify">Every piece begins with understanding how people live. We design furniture that enhances daily moments with intuitive functionality and comfort.</p>
            </div>
          </div>
        </section>

        {/* 4. Meet the Makers Section */}
        <section className="meet-the-makers-section py-12 px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 max-w-7xl mx-auto">
            {/* Left side: Text */}
            <div className="lg:w-1/3"> {/* Adjusted width for text column */}
              <h2 className="text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Meet the Makers</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Behind every Furnistar piece is a dedicated team of designers, craftspeople, and specialists who share a common passion for exceptional furniture.<br /> We believe that great design comes from collaboration, expertise, and an unwavering commitment to quality.
              </p>
            </div>

            {/* Right side: Avatars and Descriptions */}
            <div className="lg:w-2/3 flex flex-col sm:flex-row justify-start items-start gap-8"> {/* Adjusted width and alignment for avatar container */}
              {/* Maria's Profile */}
              <div className="flex flex-col items-start text-left w-full sm:w-1/2"> {/* Adjusted alignment for individual profile */}
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src="/maria_larsson.jpg" alt="Maria Larsson" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1" style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "38px",
                      }}>Maria Larsson</h3>
                <p className="text-gray-600 text-lg">Creative Director</p>
                <p className="text-gray-700 text-sm mt-2 leading-snug">
                  With fifteen years in furniture design, Maria blends Scandinavian heritage with global influences. She believes the best furniture design happens when form, function, and feeling unite.
                </p>
              </div>
              {/* Erik's Profile */}
              <div className="flex flex-col items-start text-left w-full sm:w-1/2"> {/* Adjusted alignment for individual profile */}
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src="/erik_johannsen.webp" alt="Erik Johannsen" />
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1 " style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "38px",
                      }}>Erik Johannsen</h3>
                <p className="text-gray-600 text-lg">Master Craftsman</p>
                <p className="text-gray-700 text-sm mt-2 leading-snug">
                  Leading our production with three decades of woodworking experience, Erik ensures every piece meets our standards. His deep understanding of wood and joinery helps translate designs into enduring furniture.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* 5. Sustainability & Craftsmanship */}
        <section className="py-20 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Sustainability */}
              <div className="relative overflow-hidden">
                  <img src="/assests/sustain2.jpeg" alt="Sustainability" className="w-full h-full object-cover"/>
                  {/* Replaced bg-black bg-opacity-20 with inline style for rgba background */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                      <h3 className="text-4xl text-white mb-4" style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "58px",
                      }}>Sustainability</h3>
                      <br />
                      <br />
                      <br />
                      <p className="text-white">Sustainability is integral to our design philosophy. We believe great furniture should be kind to both people and planet.</p> <br />
                      <p className="text-white mt-2">Our wood comes exclusively from FSC-certified forests, ensuring healthy forest ecosystems. We prioritize local sourcing when possible, reducing transportation impacts while supporting regional craftspeople.</p>
                  </div>
              </div>
              {/* Craftsmanship */}
              <div className="relative overflow-hidden">
                  <img src="/assests/craftman.jpg" alt="Craftsmanship" className="w-full h-full object-cover"/>
                   {/* Replaced bg-black bg-opacity-10 with inline style for rgba background */}
                   <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                      <h3 className="text-4xl text-white mb-4" style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "58px",
                      }}>Craftsmanship</h3>
                      <br />
                      <br />
                      <br />
                      <p className="text-white">Excellence comes from deliberate choices at every step. Our craftspeople combine time-honored techniques with modern precision, ensuring each piece meets our standards for beauty and durability.</p> <br />
                      <p className="text-white mt-2">We source materials from certified sustainable forests and trusted suppliers. Our solid wood undergoes careful selection and seasoning, while metal components are precision-engineered for longevity.</p>
                  </div>
              </div>
          </div>
        </section>

        {/* 6. Quote Section */}
        <section className="py-20 px-4 md:px-8 lg:px-12 text-center">
           <blockquote className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl italic leading-relaxed text-gray-800" style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        fontSize: "28px",
                      }}>
                "Every joint, every grain, every finish tells a story. Our job is to make sure it's a story worth telling for generations."
            </p>
            <footer className="mt-6 text-lg text-gray-600">
                Erik Johannsen
                <div className="text-sm text-gray-500">Master Craftsman</div>
            </footer>
        </blockquote>
        </section>

        <StayInspired />
        <SectionDivider />
    </>
  );
};

export default AboutPage;