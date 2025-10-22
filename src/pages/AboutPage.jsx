import React from "react";
import { SectionDivider } from "../components/SectionDivider";
import { StayInspired } from "../components/StayInspired";


export const AboutPage = () => {
  return (
    <div className="about-page-container">
      {/* 1. Our Story Section (Top First) */}
      <section className="our-story-section py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-playfair mb-4">Our Story</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
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
          <img
            src="/about-1-1024x683.jpg"
            alt="Copenhagen Canal with boats"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "1024px", height: "auto" }}
          />
        </div>
      </section>

      {/* 2. Where Timeless Design Meets Modern Living */}
      <section className="timeless-design-section py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
          <img
            src="/about-2-1024x734.jpg"
            alt="Old woodwork shop"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "1024px", height: "auto" }}
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-4xl font-playfair mb-4">Where Timeless Design Meets Modern Living</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Born from a passion for authentic design and exceptional quality, Furnistar emerged with a simple yet profound mission: to
            create furniture that tells a story worth passing down through generations.
          </p>
        </div>
      </section>

      {/* 3. Design Philosophy Section */}
      <section className="design-philosophy-section py-12 px-4 md:px-8 lg:px-12 bg-gray-50">
        <h2 className="text-4xl font-playfair mb-8 text-center">Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Philosophy items go here */}
        </div>
      </section>

      {/* 4. Meet the Makers Section */}
      <section className="meet-the-makers-section py-12 px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-playfair mb-8">Meet the Makers</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
          Behind every Furnistar piece is a dedicated team of designers, craftspeople, and specialists
          who share a common passion for exceptional furniture.
        </p>
        <SectionDivider />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Maker profiles go here */}
        </div>
      </section>
      <StayInspired />
      <SectionDivider />
    </div>
  );
};

export default AboutPage;