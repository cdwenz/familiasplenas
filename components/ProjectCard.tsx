import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  aspectRatio: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  aspectRatio,
}) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        className={`object-contain max-w-full ${aspectRatio} w-[510px]`}
        alt={title}
      />
      <h3 className="mb-6 text-xl text-black max-md:max-w-full">{title}</h3>
      <button className="flex gap-4 justify-center items-center self-start mb-6 text-base font-bold text-orange-600">
        <span className="self-stretch my-auto">Ver proyecto</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/65a33c61f9a8401d86dd00571c6dd671/8ed895f401fc036fcf8faa6fef10278b69f9e51c6b99681589990db69fc23992?apiKey=65a33c61f9a8401d86dd00571c6dd671&"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>
    </div>
  );
};

export default ProjectCard;
