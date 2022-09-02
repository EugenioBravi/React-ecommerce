import ItemCount from "./ItemCount";

const Item = ({ title, thumbnail, price, stock }) => {
  return (
    <div className="bg-gray-700 hover:shadow-lg hover:shadow-black ease-in-out duration-300 w-[350px] my-4 p-3 flex-1 rounded-xl text-white shadow-md shadow-black">
      <h2 className="uppercase font-medium mb-2 ">{title}</h2>
      <img
        src={thumbnail}
        alt=""
        className="h-[300px] w-full border border-black"
      />
      <h3 className="my-2 text-lg">Precio: ${price} </h3>
      <ItemCount stock={stock} initial={1} />
      <button className="my-2 py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300">
        Agregar al carrito
      </button>
    </div>
  );
};
export default Item;
