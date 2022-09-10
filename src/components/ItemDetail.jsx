import ItemCount from "./ItemCount";

const ItemDetail = ({
  item: { title, price, thumbnail, description, stock },
}) => {
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
        <p className="w-[450px] font-medium mb-16 ">Descripcion : {description}</p>
        <ItemCount stock={stock} initial={1} />
        <h3 className="my-6 text-lg">Stock disponible: {stock} </h3>
      </div>
    </div>
  );
};
export default ItemDetail;
