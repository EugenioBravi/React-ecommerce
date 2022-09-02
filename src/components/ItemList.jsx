import React from "react";
import { ClipLoader } from "react-spinners";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 max-w-7xl w-full pl-12 min-h-screen">
      {products.length ? (
        products.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <>
        <div></div>
        <h3 className=" font-semibold text-lg  text-center w-7xl h-12 pt-10">Cargando productos <ClipLoader /></h3></>
      )}
    </div>
  );
};
export default ItemList;
