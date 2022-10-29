import { useState } from "react";
import Swal from "sweetalert2";
import { useCartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clear } = useCartContext();
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    phone: "",
  });

  const inputStyle =
    "border mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm  h-7 pl-2";
  const labelStyle = "block text-sm font-medium  text-gray-700";
  const MySwal = withReactContent(Swal);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const theDate = new Date().toISOString().slice(0, 10);

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: datos,
      items: cart,
      total: totalPrice,
      date: theDate,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(
      ({ id }) =>
        MySwal.fire({
          title: "Felicitaciones!",
          text: "Su numero de pedido es: " + id,
          icon: "success",
        })

      .then(navigate("/"))
    );
    clear();
  };

  return (
    <div className="max-w-7xl w-full">
      <form onSubmit={sendOrder}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="nombre" className={labelStyle}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  id="nombre"
                  autoComplete="given-name"
                  className={inputStyle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="apellido" className={labelStyle}>
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  required
                  id="apellido"
                  autoComplete="family-name"
                  className={inputStyle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-3 ">
                <label htmlFor="email" className={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  autoComplete="email"
                  className={inputStyle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-3">
                <label htmlFor="phone" className={labelStyle}>
                  Celular
                </label>
                <input
                  type="phone"
                  name="phone"
                  required
                  id="phone"
                  className={inputStyle}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 "
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
