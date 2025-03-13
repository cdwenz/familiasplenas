import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  imageSrc: string;
  title: string;
  aspectRatio: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/6555a481eceb5325586599fb23d67ce2676a1d316c17a91264b06beb4edc407f?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      title: "Abril 2025",
      aspectRatio: "aspect-square",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/6555a481eceb5325586599fb23d67ce2676a1d316c17a91264b06beb4edc407f?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      title: "Junio 2025",
      aspectRatio: "aspect-square",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/6555a481eceb5325586599fb23d67ce2676a1d316c17a91264b06beb4edc407f?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      title: "Lo que fue el 2024",
      aspectRatio: "aspect-square",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/6555a481eceb5325586599fb23d67ce2676a1d316c17a91264b06beb4edc407f?apiKey=65a33c61f9a8401d86dd00571c6dd671&",
      title: "Proyectos pasados",
      aspectRatio: "aspect-square",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between self-center mt-36 w-full text-black max-w-[1060px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-10">
          Conoce nuestros proximos eventos
        </h2>
        <p className="self-start text-base max-md:max-w-full">
          Lörem ipsum sasanera vanarat nat inte varad. Fisade nyde i
          datalektiker. Tågskryta äfån, för att kossade. Plaren henifiera.
          Infratt preginde tinade digital valuta fålirtad.{" "}
        </p>
      </div>
      <div className="self-center mt-20 w-full max-w-[1061px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              {projects.slice(2, 4).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
