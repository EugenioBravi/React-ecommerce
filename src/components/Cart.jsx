import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
const Cart = () => {
  const { cart, totalPrice, clear } = useCartContext();
  return (
    <div className="w-screen h-screen flex items-center flex-col bg-gray-300 font-medium pt-3">
      {cart.length ? (
        cart.map((product) => (
          <ItemCart key={product.id} product={product}></ItemCart>
        ))
      ) : (
        <>
          <h1 className="my-2"> No hay productos en el carrito</h1>
          <Link className="bg-blue-500 py-1 px-2" to={"/"}>
            Volver al menu
          </Link>
        </>
      )}
      {cart.length ? (
        <>
          <h2 className="bg-white w-[768px] text-center border border-gray-500">
            Total: ${totalPrice}
          </h2>{" "}
          <button
            className="py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white"
            onClick={() => clear()}
          >
            Vaciar carrito
          </button>
          <Link
            to="/form"
            className="my-2 py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white"
          >
            Terminar compra
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Cart;
