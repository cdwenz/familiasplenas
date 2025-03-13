import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-black flex justify-center py-8">
      <div className="self-center mt-8 w-full max-w-[1250px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10">
              <div className="flex flex-col max-w-full w-[399px]">
                <h1 className="text-4xl text-orange-600 leading-[60px]">
                  Edificando las familias de hoy para el futuro
                  <span className="text-orange-600">.</span>
                </h1>
                <p className="mt-2 text-base">
                  Descubriendo el propósito de cada integrandte de la familia
                </p>
              </div>
              <button className="flex gap-4 justify-center items-center self-start p-6 mt-8 text-base font-bold text-white bg-orange-600 max-md:px-5">
                <span className="self-stretch my-auto">
                  Comienza hoy
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/5590d24a1ceac0473c2fcf5ba6c4101d0ea4a4480dc44ac6a15332761eebfa21?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/c627d88874e77932a47ec0b307b6a5393dc0700f458b8079c552a17d10689088?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
              className="object-contain grow w-full rounded-none aspect-[1.1] max-md:mt-10 max-md:max-w-full"
              alt="Digital product showcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
