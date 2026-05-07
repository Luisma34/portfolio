import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hero() {
  return (
    // h-screen para que ocupe toda la pantalla
    // flex-col + justify-center para centrar el contenido verticalmente
    // pt-72 en movil para que la imagen no quede debajo del navbar (provisional)
    <section className="pt-72 md:pt-32 flex flex-col justify-center items-center h-screen max-w-6xl mx-auto">
      {/* flex-col en movil (imagen arriba, texto abajo) y flex-row en desktop (lado a lado) */}
      <div className="flex flex-col md:flex-row px-6 md:px-15 gap-5 md:gap-24 items-center text-black-700">
        {/* Foto de perfil */}
        {/* relative por si quiero añadir algo encima de la foto en el futuro */}
        <div className="relative">
          <img
            className="mx-auto h-fit w-2/3 md:w-full md:pt-32"
            src="src/assets/profile-photo.png"
            alt="Foto de perfil"
          />
        </div>

        {/* Bloque de texto */}
        <div className="flex flex-col w-sm md:w-4xl gap-4 p-4 items-end justify-end">
          {/* Solo hay un h1 por pagina, importante para el SEO */}
          <h1 className="text-xl md:text-4xl font-serif">
            Soy Luis Manuel, Full Stack developer (Junior).
          </h1>

          {/* leading-relaxed para que el texto no quede tan apretado */}
          <p className="text-sm md:text-base md:mt-3 leading-relaxed font-sans">
            Programador web titulado en DAW. Te invito a explorar mi portfolio
            para conocerme un poco más. Si buscas a alguien con compromiso y
            ganas de crecer, no dudes en ponerte en contacto conmigo.
          </p>

          <div className="flex self-start transition duration-1000 gap-5 text-white w-fit h-fit bg-transparent pt-2">
            <a className="w-13 h-13 flex items-center justify-center rounded-full bg-[rgb(44,44,44)] ">
              <FaGithub />
            </a>
            <a className="w-13 h-13 flex items-center justify-center rounded-full bg-[rgb(44,44,44)] ">
              <FaWhatsapp />
            </a>
            <a className="w-13 h-13 flex items-center justify-center rounded-full bg-[rgb(44,44,44)]  ">
              <SiGmail className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
