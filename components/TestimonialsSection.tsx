import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/4138dbb694209978c05e5177ccfc04277342fcd00db2894dc3b0129b1481f758?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      rating: 4.5,
      text: "Lörem ipsum decivis ähöhisa tidat för ons. Presk fyvis pladan. Midir backflyt fastän ir. Termotos sedäck men sask epicentrism. Lörem ipsum decivis ähöhisa tidat för ons.",
      name: "Fernando Sand",
      position: "Product designer",
      logoSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/51c4ad29b2c93f14d630105da120435e46bb9ee8c05119b3acd0f13196e4766d?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/0d7626ff1abdc597dc383ba533d2eccf3aa23927e39c76c34f464d2488aec661?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      rating: 4.5,
      text: "Lörem ipsum decivis ähöhisa tidat för ons. Presk fyvis pladan. Midir backflyt fastän ir. Termotos sedäck men sask epicentrism. Lörem ipsum decivis ähöhisa tidat för ons.",
      name: "Ana Velázquez",
      position: "Product designer",
      logoSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/51c4ad29b2c93f14d630105da120435e46bb9ee8c05119b3acd0f13196e4766d?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
    },
  ];

  return (
    <>
      <div className="flex flex-col self-start mt-48 max-md:mt-10 max-md:max-w-full">
        <div className="text-base text-orange-600">Testimonios</div>
        <h2 className="mt-2 text-3xl font-bold text-black max-md:max-w-full">
          Nuestros amigos nos recomiendan
        </h2>
      </div>
      <div className="mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <TestimonialCard {...testimonials[0]} className="w-[64%]" />
          <TestimonialCard {...testimonials[1]} className="w-[36%]" />
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
