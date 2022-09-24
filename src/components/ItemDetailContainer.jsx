import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc)
    .then((res) => setItem(res.data()))
    .catch((err) => console.log(err, ": no existe producto"));
  }, [id]);

  return (
    <div className="bg-sky-200 h-[1100px] flex justify-center ">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
