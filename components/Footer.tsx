import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/805ae540d7f8e34c55af154c262206b03c5f89198b86a07e9dc752dee4840a5d?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
    },
    {
      name: "Github",
      icon: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/00a62609e9459a625ceedf6ed0af9cdf8de56aa0630a79226560eff7551a67ea?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
    },
    {
      name: "Twitter",
      icon: "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/d924e28770ef898b7be6235831c00592927d1c0b8acaa0676e98c7ab9bfc718d?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
    },
  ];

  return (
    <footer className="flex overflow-hidden flex-col items-start px-20 py-24 w-full text-base text-white bg-black max-md:px-5 max-md:max-w-full">
      <div className="text-orange-600">
        Descubre el verdadero propósito de {" "}
        <span className="text-orange-600">tu familia.</span>
      </div>
      <nav className="flex flex-wrap gap-10 items-center mt-8 text-3xl whitespace-nowrap">
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
      <div className="flex flex-wrap gap-10 self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="my-auto">
          2025 - Familias Plenas - Todos los derechos reservados
        </div>
        <div className="flex flex-1 gap-8 items-start whitespace-nowrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.name.toLowerCase()}`}
              className="flex gap-4 items-center"
            >
              <img
                loading="lazy"
                src={link.icon}
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt={`${link.name} icon`}
              />
              <span className="self-stretch my-auto">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
