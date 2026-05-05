function Hero() {

  return (
    // Toda la tarjeta — pt-20 en móvil, pt-32 en desktop
    <section className="pt-20 md:pt-32 flex flex-col justify-center items-center h-screen max-w-6xl mx-auto">
      {/* Contenedor principal — flex-col en móvil, flex-row en desktop */}
      <div className="flex flex-col md:flex-row px-6 md:px-15 gap-5 md:gap-24 items-center text-black-700">
        {/* Parte izquierda — foto de perfil */}
        <div className="relative">
          <img
            className="h-fit w-full md:w-md pt-5 object-cover mask-radial-at-center mask-radial-from-50% mask-radial-to-70%"
            src="src/assets/profile-photo.png"
            alt="Foto de perfil"
          />
        </div>

        {/* Parte derecha — texto */}
        <div className="flex flex-col md:w-xl gap-4 p-4">
          {/* h1 único de la página — text-2xl en móvil, text-4xl en desktop */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Soy Luis Manuel, Full Stack developer (Junior).
          </h1>
          {/* text-sm en móvil, text-base en desktop */}
          <p className="text-sm md:text-base md:mt-3 leading-relaxed">
            Cambié los cuchillos por el teclado y no me arrepiento ni un
            segundo. Ser cocinero me enseñó a ser constante y a no agobiarme
            cuando algo no sale a la primera, algo que me viene de lujo para
            programar. Me apasiona ver cómo voy aprendiendo cosas nuevas cada
            día y cómo puedo usar todo lo que ya sabía de antes para construir
            algo desde cero frente al ordenador.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
