import Layout from "../components/Layout";
import { useEffect } from "react";

function Privacy() {
  // Scroll arriba al entrar en la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-36 pb-20">
      <Layout>
        <div className="w-full max-w-2xl">
          {/* Cabecera */}
          <div className="border-b border-black w-full mb-10"></div>
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">
            Legal
          </p>
          <h1
            className="text-3xl md:text-5xl font-serif mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Política de privacidad
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Información adicional sobre los datos que se recopilan en esta web.
          </p>
          <div className="border-b border-black w-full mb-12"></div>

          {/* Contenido */}
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-gray-700">
            <section>
              <h2 className="font-semibold text-black mb-2">
                ¿Qué datos se recopilan?
              </h2>
              <p>
                Actualmente esta web no recopila ningún dato personal de los
                visitantes. No hay formularios de registro, ni sistemas de
                inicio de sesión, ni cookies de seguimiento.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">Contacto</h2>
              <p>
                Si utilizas el formulario de contacto o me escribes directamente
                a{" "}
                <a
                  href="mailto:luisma.cordon@gmail.com"
                  className="underline hover:text-red-500 transition-colors duration-200"
                >
                  luisma.cordon@gmail.com
                </a>
                , los datos que compartas (nombre, email, mensaje) serán
                utilizados únicamente para responder a tu consulta y no serán
                cedidos a terceros.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">Analytics</h2>
              <p>
                En el futuro está previsto añadir un sistema de analítica
                anónima para conocer el número de visitas que recibe la web. Se
                utilizará una herramienta que no recopile datos personales ni
                haga seguimiento individual de los usuarios. Esta política se
                actualizará en ese momento.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">Alojamiento</h2>
              <p>
                Este sitio está alojado en Vercel Inc. (EE. UU.), que puede
                procesar automáticamente la IP y los registros de acceso para
                garantizar el funcionamiento y la seguridad del servicio. Los
                datos pueden tratarse fuera del EEE, amparados por Cláusulas
                Contractuales Tipo conforme al RGPD. Más información en la
                política de privacidad de Vercel.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">Contacto</h2>
              <p>
                Para cualquier consulta relacionada con esta política, puedes
                escribirme a{" "}
                <a
                  href="mailto:luisma.cordon@gmail.com"
                  className="underline hover:text-red-500 transition-colors duration-200"
                >
                  luisma.cordon@gmail.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="border-b border-gray-200 w-full mt-12"></div>
          <p className="text-xs text-gray-400 mt-4">
            Última actualización: junio de 2026
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default Privacy;
