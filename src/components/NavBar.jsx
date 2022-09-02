import CartWidget from "./CartWidget";
import React from "react";

const Navbar = () => {
  const links =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="sticky bg-gray-800 py-2.5 flex justify-center">
      <div className="flex justify-between max-w-7xl w-full ">

        <h1 className="text-white text-bold text-3xl font-bold">Mi Tienda</h1>

        <ul className="flex pt-2">
          <li>
            <a href="#" className={links}>
              Menu
            </a>
          </li>

          <li>
            <a href="#" className={links}>
              Hombre
            </a>
          </li>

          <li>
            <a href="#" className={links}>
              Mujer
            </a>
          </li>

          <li>
            <a href="#" className={links}>
              Deportivo
            </a>
          </li>
        </ul>

        <div className="flex">
          <button className="text-white pr-4 text-sm font-medium">
            Ingresar
          </button>
          <button className="bg-blue-800 px-6 py-2 rounded cursor-pointer text-white text-sm font-medium">
            Registrarse
          </button>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;