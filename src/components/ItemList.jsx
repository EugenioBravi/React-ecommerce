import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 max-w-7xl w-full pl-12 min-h-screen">
      {products.length ? (
        products.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <>
          <h3 className=" font-semibold text-3xl ml-auto h-12 pt-10 w-screen">
            La categoria no existe
          </h3>
        </>
      )}
    </div>
  );
};
export default ItemList;
