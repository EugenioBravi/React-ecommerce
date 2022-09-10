import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productsJSON from "../products.json";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
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
        setProducts((category)? res.filter((product) => product.category == category):res);
      })
      .catch((err) => console.log(err, ": no hay productos"));
  }, [category]);

  return (
    <div className="bg-sky-200 h-auto flex justify-center ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
