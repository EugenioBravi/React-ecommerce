import ItemCount from "./ItemCount";
import { useState } from "react";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {
  const { title, price, description, thumbnail, stock } = item;
  const [productQuantity, setProductQuantity] = useState(0);

  const { addProduct } = useCartContext();

  function onAdd(quantity) {
    setProductQuantity(quantity);
    addProduct(item, quantity);
  }

  return (
    <div className="bg-gray-200  w-[850px] h-96 my-4 p-3 flex rounded-xl text-black shadow-md shadow-black text-center">
      <div>
        <h2 className="uppercase font-medium mb-2 ">{title}</h2>
        <img
          src={thumbnail}
          alt=""
          className="h-[300px] w-[300] border border-gray-500"
        />
        <h3 className="my-2 text-lg">Precio: ${price} </h3>
      </div>
      <div className="ml-4">
        <p className="w-[450px] font-medium mb-16 ">
          Descripcion : {description}
        </p>
        {productQuantity ? (
          <Link
            to="/cart"
            className="my-2 py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white"
          >
            Proceed to checkout
          </Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}

        <h3 className="my-6 text-lg">Stock disponible: {stock} </h3>
      </div>
    </div>
  );
};
export default ItemDetail;
