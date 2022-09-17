import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import productsJSON from "../products.json";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getItem = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data.find((product) => product.id == id));
          } else {
            reject("Error");
          }
        }, time);
      });

    getItem(productsJSON, 2000)
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err, ": no existe producto"));
  }, [id]);

  return (
    <div className="bg-sky-200 h-[1100px] flex justify-center ">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
