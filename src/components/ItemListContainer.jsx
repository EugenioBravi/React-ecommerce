import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");

    if (category) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter)
        .then((res) => setProducts(res.docs.map((prod) => prod.data())))
        .catch((err) => console.log(err, ": no hay productos"));
    } else {
      getDocs(queryCollection)
        .then((res) => setProducts(res.docs.map((prod) => prod.data())))
        .catch((err) => console.log(err, ": no hay productos"));
    }
  }, [category]);

  return (
    <div className="bg-sky-200 h-auto flex justify-center ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
