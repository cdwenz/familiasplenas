import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 mt-28 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[976px]">
        <div className="flex flex-col justify-center items-center w-full min-h-[150px]">
          <h2 className="text-7xl text-orange-600 leading-[120px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
            <span className="text-white">Trabajemos</span>{" "}
            <span className="text-orange-600">juntos.</span>
          </h2>
          <p className="text-xl text-white max-md:max-w-full">
            Queres edificar a tu familia con bases sólidas? Contactanos y
            hagamoslo juntos.
          </p>
        </div>
        <button className="flex gap-4 justify-center items-center p-6 mt-12 text-base font-bold text-white bg-orange-600 max-md:px-5 max-md:mt-10">
          <span className="self-stretch my-auto">Comienza hoy</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/de344eb6f0afa5891bb97e26cc87331f220f0553e3629d3bfc33fb0701dde100?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
