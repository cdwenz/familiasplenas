import React from "react";
import img from "@/public/logo_fplenas.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center pl-20 py-8 w-full max-md:pl-5 max-md:max-w-full bg-black">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1170px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 my-auto text-base whitespace-nowrap max-md:max-w-full">
          <div className="flex gap-2 justify-center items-center font-bold">
            <Image src={img} alt="logo familias plenas" className="w-10 h-10" />
            <div className="self-stretch my-auto">Familias Plenas</div>
          </div>
          <nav className="flex flex-auto gap-10 justify-center items-center">
            <a href="#agenda" className="self-stretch my-auto">
              Agenda
            </a>
            <a href="#courses" className="self-stretch my-auto">
              Seminarios
            </a>
            <a href="#blog" className="self-stretch my-auto">
              Blog
            </a>
            <a href="#downloads" className="self-stretch my-auto">
              Descargas
            </a>
            <a href="#about" className="self-stretch my-auto">
              Equipo
            </a>
            <a href="#opinions" className="self-stretch my-auto">
              Opiniones
            </a>
            <a href="#contact" className="self-stretch my-auto">
              Contacto
            </a>
          </nav>
        </div>
        <button className="flex gap-4 justify-center items-center p-4 text-sm font-bold text-white bg-orange-600">
          <span className="self-stretch my-auto">Iniciar Sesión</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/5590d24a1ceac0473c2fcf5ba6c4101d0ea4a4480dc44ac6a15332761eebfa21?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
