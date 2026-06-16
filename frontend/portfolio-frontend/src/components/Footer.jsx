import { Link } from "react-router-dom";
import Layout from "./Layout";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black mt-10">
      {/* Bloque principal */}
      <Layout>
        <div className="w-full py-10 flex flex-col md:flex-row items-start gap-16 md:gap-32">
          {/* Izquierda */}
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-xl font-serif"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Luis M. Cordón
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Desarrollador web Full Stack titulado en DAW.
            </p>
          </div>

          {/* Centro  */}
          <div className="flex flex-col gap-2 max-w-xs">
            <blockquote className="text-sm text-gray-400 italic leading-relaxed">
              "Talk is cheap. Show me the code."
            </blockquote>
            <span className="text-xs text-gray-300">— Linus Torvalds</span>
          </div>

          {/* Derecha  */}
          <div className="flex gap-8 md:gap-16 text-sm">
            {/* Páginas */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-xs uppercase tracking-widest text-red-500">
                Páginas
              </span>
              <a
                href="#home"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                Inicio
              </a>
              <Link
                to="/about"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                Sobre mí
              </Link>
              <Link
                to="/projectsPage"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                Proyectos
              </Link>
              <Link
                to="/contact"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                Contacto
              </Link>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-xs uppercase tracking-widest text-red-500">
                Contacto
              </span>
              <a
                href="mailto:luisma.cordon@gmail.com"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/luis-manuel-cord%C3%B3n-%C3%A1lvarez-357620356/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Luisma34"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 hover:underline transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Layout>

      {/* Copyright */}
      <Layout>
        <div className="border-t border-gray-200 w-full py-4 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            © {year} Luis Manuel Cordón Álvarez
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link
              to="/privacy"
              className="hover:text-red-500 hover:underline transition-colors duration-200"
            >
              Política de privacidad
            </Link>
            <span>Hecho con React & Tailwind CSS</span>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
