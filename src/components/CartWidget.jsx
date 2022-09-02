import React from "react";
const CartWidget = () => {
  return (
    <button className="flex relative m-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 inline-block ml-2 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgb(209, 213, 219)"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <div className=" absolute bg-red-600  rounded-full w-5 h-5 text-white text-sm bottom-0 right-0 translate-x-[100%] translate-y-[-100%]">
        1
      </div>
    </button>
  );
};
export default CartWidget;