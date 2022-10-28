import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="sticky bg-[#465775] py-2.5 flex justify-center">
      <div className="flex justify-between max-w-7xl w-full ">

        <h1 className="text-white text-bold text-3xl font-bold"><Link to="/">Mi Tienda</Link></h1>

        <ul className="flex pt-2">
          <li>
             <Link to={"/"} className={links} >
              Menu</Link>
           
          </li>

          <li>
            <Link to={"/categoria/mens-shirts"} className={links} >
              Hombre</Link>
            
          </li>

          <li>
            <Link to={"/categoria/womens-dresses"} className={links}>
              Mujer
            </Link>
          </li>

          <li>
            <Link to={"/categoria/sunglasses"} className={links}>
              Lentes para el sol
            </Link>
          </li>
        </ul>

        <div className="flex">
        <Link to={"/log"} className={`${links} bg-blue-400 p2`} >
              Login</Link>
              <Link to={"/reg"} className={`${links} bg-blue-800 p2`} >
              Register</Link>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;