import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.find((prod) => prod.id === id);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return { ...product, quantity: product.quantity + quantity };
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (item) => {
    const itemRemoved = cart.filter((product) => product.id !== item.id);
    setCart(itemRemoved);
  };

  const clear = () => {
    setCart([]);
  };
  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        clear,
        isInCart,
        removeItem,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
