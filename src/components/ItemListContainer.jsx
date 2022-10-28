import React from "react";
import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { collection } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { firestore } from "../Firebase/Index";
const ItemListContainer = () => {
  const { category } = useParams();
  const queryCollection = collection(firestore, "items");
  const query = useFirestoreQuery(["items"], queryCollection);

  if (query.isLoading) {
    return (
      <div className="bg-sky-200 h-screen flex justify-center font-bold">
        Cargando productos <ClipLoader />
      </div>
    );
  }
  const snapshot = query.data;

  let products = snapshot.docs.map((docSnapshot) => docSnapshot.data());

  if (category) {
    products = products.filter((product) => product.category == category);
  }
  return (
    <div className="bg-sky-200 h-auto flex justify-center ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;