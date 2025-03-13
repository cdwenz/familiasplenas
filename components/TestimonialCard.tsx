import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  rating: number;
  text: string;
  name: string;
  position: string;
  logoSrc: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  rating,
  text,
  name,
  position,
  logoSrc,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className} max-md:ml-0 max-md:w-full`}>
      <div className="overflow-hidden grow pr-10 w-full bg-white max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-start px-4 pt-80 pb-5 aspect-[1.111] max-md:pt-24 max-md:pr-5 max-md:mt-10">
              <img
                loading="lazy"
                src={imageSrc}
                className="object-cover absolute inset-0 size-full"
                alt={`Testimonial from ${name}`}
              />
              <div className="flex relative flex-col justify-center px-4 py-2 bg-white">
                <img
                  loading="lazy"
                  src={logoSrc}
                  className="object-contain bg-blend-darken aspect-[3.38] w-[54px]"
                  alt="Company logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              Continuing from where we left off:
              <div className="flex flex-col self-start">
                <div className="flex gap-2 items-start">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      loading="lazy"
                      src={
                        i < Math.floor(rating)
                          ? "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/efb3af2b55a847d42ab7f229d45eb26ca861241d2566f27dedf0f96afbd6986f?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
                          : "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/de2dc9b9639efd5d56fb2307c530077fd80f7d3ed5cc6abca69abe652744ba1e?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
                      }
                      className="object-contain shrink-0 aspect-[1.08] w-[26px]"
                      alt={
                        i < Math.floor(rating) ? "Filled star" : "Empty star"
                      }
                    />
                  ))}
                </div>
                <div className="mt-2 text-base font-bold text-black">
                  {rating}/5
                </div>
              </div>
              <p className="mt-6 text-base text-black">{text}</p>
              <div className="flex shrink-0 mt-7 h-px bg-zinc-300" />
              <div className="flex flex-col self-start mt-7">
                <div className="text-base font-bold text-black">{name}</div>
                <div className="text-sm text-gray-500">{position}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
