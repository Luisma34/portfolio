import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function NotFound() {
  return (
    <div className="pt-25 md:pt-36 pb-15 min-h-screen">
      <Layout>
        <div className="border-b w-9/12 md:w-full"></div>
        <div className="pt-2 md:pt-5 pb-2 md:pb-5 w-full text-center">
          <p className="text-red-500 leading-relaxed md:text-xl font-sans">
            404
          </p>
          <h1 className="text-2xl md:text-4xl leading-relaxed font-sans">
            Página no encontrada.
          </h1>
          <p className="md:pt-2 text-gray-500 max-w-2xl mx-auto">
            La página que buscas no existe.{" "}
            <Link
              to="/"
              className="underline text-red-500 hover:opacity-70 transition-opacity"
            >
              Volver al inicio
            </Link>
          </p>
        </div>
        <div className="border-b w-9/12 md:w-full"></div>
      </Layout>
    </div>
  );
}

export default NotFound;
