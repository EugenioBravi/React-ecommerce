import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productsJSON from "./products.json";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Error");
          }
        }, time);
      });

    getProducts(productsJSON, 2000)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err, ": no hay productos"));
  }, []);

  return (
    <div className="bg-gray-100 h-auto flex justify-center ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
