
import { Link } from "react-router-dom";
const Item = ({ title, thumbnail, stock, id }) => {
  return (
    <div className="bg-gray-200 hover:shadow-lg hover:shadow-black ease-in-out duration-300 w-[350px] my-4 p-3 flex-1 rounded-xl text-black shadow-md shadow-black text-center">
      <h2 className="uppercase font-medium mb-2 ">{title}</h2>
      <img
        src={thumbnail}
        alt=""
        className="h-[300px] w-full border border-gray-500"
      />
      <h3 className="my-2 text-lg">Stock: {stock} </h3>
   
      <Link to={`/item/${id}`} className="my-2 py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-400 text-white text-center">
        Ver detalles del producto
      </Link>
    </div>
  );
};
export default Item;
