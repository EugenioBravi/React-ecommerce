import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import productsJSON from "../products.json";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getItem().then((data) => {
      if (data) {
    
        setItem(data)
      }
    })
  }, []);

  const getItem = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(productsJSON.find( product => product.id == id ));
      }, 2000);
    })
  }

  return (
    <div className="bg-sky-200 h-[1100px] flex justify-center ">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
