import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./components/context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/form" element={<Form />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/log" element={<Login />} />
            <Route path="/reg" element={<Register />} />
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
export default App;
