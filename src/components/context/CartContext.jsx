import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

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
  
  return (
    <CartContext.Provider
      value={{
        totalPrice,
        totalProducts,
        clear,
        cart,
        isInCart,
        removeItem,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
