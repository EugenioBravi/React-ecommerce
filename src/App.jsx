import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};
export default App;
