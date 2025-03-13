const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-20 py-24 w-full bg-white max-md:px-5">
      <div className="max-w-[1060px] w-full">
        <div className="flex flex-col gap-5 justify-between text-black">
          <div className="text-base text-orange-600">Quiénes Somos</div>
          <h2 className="mt-2 text-3xl font-bold leading-10 max-md:max-w-full">
            Familia Schrrab
          </h2>
        </div>

        <div className="flex gap-10 mt-16 max-md:flex-col">
          <div className="w-1/2 max-md:w-full">
            <p className="text-base text-black mb-6">
              Marcelo y Patricia Wagner , son Argentinos , están casados hace 33
              años tienen dos hijos y dos nietos, son pastores y misioneros,
              actualmente viven en Moscu Rusia , lugar al que Dios los llamo,
              están orientados y enfocados en las familias y la edificación de
              las mismas.
            </p>
            <p className="text-base text-black mb-6">
              Fueron directores internacionales del ministerio Family-id ,
              desarrollando la tarea de dictar seminarios y capacitacion a
              lideres en toda Hispanoamérica y luego desde Rusia a Eurasia,
              hasta que Family-id dejo sin funcionamiento el ministerio
              internacional.
            </p>
            <p className="text-base text-black">
              Son los fundadores del Ministerio Familias plenas , desde donde
              desarrollan un trabajo para edificar las familias , ayudando a
              descubrir el propósito de cada una , sus valores, misión , vision
              , ademas de brindar herramientas para lograr metas , , como es el
              funcionamiento de una familia dependiente frente a una
              independiente, cuales son las necesidades de la esposa, el esposo
              y los hijos, compartimos acerca de la importancia del legado y
              como actuar para que nuestras futuras generaciones sirvan al Señor
              , el rol de los Padres en las distintas etapas de crianza de
              nuestros hijos , la importancia de la inversión de tiempo en
              nuestros hijos y nietos.
            </p>
            <p className="text-base text-black">
              También tenemos otros seminarios acerca del discipulado familiar y
              en paralelo De la Iglesia.Como edificar un altar familiar.etc.ß
            </p>
          </div>

          <div className="w-1/2 max-md:w-full">
            <img
              src="https://placehold.co/600x400"
              alt="Nuestro equipo"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
