import React from "react";

const TrustedCompanies: React.FC = () => {
  const companies = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/7f5d851ef96d6e5144bf3cbec124c59cf99bc57a0da53c77730b627a8dcc3267?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      width: "209px",
      aspectRatio: "3.37",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/52255762effac78b7d1a7a55879d5f0dd835397390befd53825c6e520906b8eb?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      width: "288px",
      aspectRatio: "5.24",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/81cccca8d5d98cf3946cc04eb007a82749350efa51e9740cb63bceb2311989e3?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      width: "170px",
      aspectRatio: "3.04",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/8e9d40d4d86f7c061a931fb22ad2e90c93973a2cf53a059a384a14b4c46146b7?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      width: "164px",
      aspectRatio: "1.8",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <p className="self-center mt-28 text-base text-center text-black max-md:mt-10">
        Las mejores organizaciones confían en nosotros.
      </p>
      <div className="flex flex-wrap gap-10 items-center self-center mt-7 max-md:max-w-full">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col self-stretch my-auto"
            style={{ width: company.width }}
          >
            <img
              loading="lazy"
              src={company.src}
              className="object-contain bg-blend-darken"
              style={{ aspectRatio: company.aspectRatio, width: company.width }}
              alt={`Trusted company logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;
