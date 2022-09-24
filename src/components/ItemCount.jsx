import { useState } from "react";
const ItemCount = ({ stock, initial, onAdd }) => {
  const buttonStyle =
    "bg-blue-700 h-10 w-10  flex justify-center items-center ";
  const [counter, setCounter] = useState(stock == 0 ? "Sin stock" : initial);

  const addProduct = () => {
    setCounter(counter < stock ? counter + 1 : counter);
  };
  const subProduct = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };
  return (
    <>
      <div className="flex justify-center">
        <button className={buttonStyle} onClick={subProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <div className="h-10 min-w-[40px] w-auto px-1 flex justify-center items-center bg-white border border-gray-500 mx-1 text-black ">
          {counter}
        </div>
        <button className={buttonStyle} onClick={addProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
      <button
        className="my-2 py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white"
        disabled={stock == 0}
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </button>
    </>
  );
};
export default ItemCount;
