import ItemDetail from "./ItemDetail";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getFirestore, doc } from "firebase/firestore";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const querydb = getFirestore();
  const queryDoc = doc(querydb, "items", id);
  const getItem = useFirestoreDocument(["items", id], queryDoc);

  if (getItem.isLoading) {
    return (
      <div className="bg-sky-200 h-[1100px] flex justify-center font-bold">
        Cargando producto <ClipLoader />
      </div>
    );
  }

  const item = getItem.data.data();

  return (
    <div className="bg-sky-200 h-[1100px] flex justify-center ">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
