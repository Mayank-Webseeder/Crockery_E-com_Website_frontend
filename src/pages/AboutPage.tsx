import React from 'react';

// You might also have imports for other images used in 'Meet the Makers' etc.
// Example:
// import mariaLarsson from '../assets/maria_larsson.jpg'; 
// import erikJohannsen from '../assets/erik_johannsen.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      {/* 1. Our Story Section (Top First) */}
      <section className="our-story-section py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-playfair mb-6">Our Story</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Furnistar was born from a passion for authentic design and exceptional quality. We create furniture that
            bridges timeless aesthetics with the evolving needs of modern life, believing that our homes should reflect
            both who we are and who we aspire to become.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our journey began with a deep appreciation for Scandinavian design heritage—where function meets beauty in
            perfect harmony. Yet we recognized the need to push beyond tradition, embracing innovation while honoring the
            craftsmanship that has defined great furniture for centuries. Furnistar stands as a testament to thoughtful design,
            where every piece is conceived not just as furniture, but as an integral part of life's most meaningful moments—from
            quiet morning coffees to gathered celebrations with loved ones.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {/* Use the public path directly in the src attribute */}
          <img
            src="/about-1-1024x683.jpg"
            alt="Copenhagen Canal with boats"
            className="w-full h-auto object-cover"
            style={{ maxWidth: '1024px', height: 'auto' }} 
          />
        </div>
      </section>

      {/* 2. Where Timeless Design Meets Modern Living */}
      <section className="timeless-design-section py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
          {/* Use the public path directly in the src attribute */}
          <img
            src="/about-2-1024x734.jpg"
            alt="Old woodwork shop"
            className="w-full h-auto object-cover"
            style={{ maxWidth: '1024px', height: 'auto' }}
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-5xl font-playfair mb-6">Where Timeless Design Meets Modern Living</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Born from a passion for authentic design and exceptional quality, Furnistar emerged with a simple yet profound mission: to
            create furniture that tells a story worth passing down through generations.
          </p>
        </div>
      </section>

      {/* 3. Design Philosophy Section */}
      <section className="design-philosophy-section py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h2 className="text-5xl font-playfair mb-12 text-center">Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Philosophy items go here */}
        </div>
      </section>

      {/* 4. Meet the Makers Section */}
      <section className="meet-the-makers-section py-16 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-5xl font-playfair mb-12">Meet the Makers</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
          Behind every Furnistar piece is a dedicated team of designers, craftspeople, and specialists
          who share a common passion for exceptional furniture.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Maker profiles go here */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;