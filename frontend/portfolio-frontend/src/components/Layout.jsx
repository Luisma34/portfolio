// Creamos el layout para no tener que modificar el tamaño de todos los componentes uno a uno.
// {} Es para que podamos usar directamente lo que necesitemos.
function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center md:max-w-6xl xl:max-w-full xl:px-15 md:mx-auto">
      {children}
    </div>
  );
}

export default Layout;
