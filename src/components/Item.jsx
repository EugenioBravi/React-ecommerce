import ItemCount from "./ItemCount";

const Item = ({ title, thumbnail, price, stock }) => {
  return (
    <div className="bg-gray-700 hover:bg-gray-600 hover:shadow-lg hover:shadow-black w-[350px] my-4 p-3 flex-1 rounded-xl text-white shadow-md shadow-black">
      <h2 className="uppercase font-medium mb-2 ">{title}</h2>
      <img
        src={thumbnail}
        alt=""
        className="h-[300px] w-full border border-black"
      />
      <h3 className="my-2 text-lg">Precio: ${price} </h3>
      <ItemCount stock={stock} initial={1} />
    </div>
  );
};
export default Item;
