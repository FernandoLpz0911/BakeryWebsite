// src/contexts/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Log when the state is initialized from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localCart = localStorage.getItem('cartItems');
      const parsedCart = localCart ? JSON.parse(localCart) : [];
      console.log('CartContext: Initializing state from localStorage. Loaded:', parsedCart); // LOGGING
      return parsedCart;
    } catch (error) {
      console.error("CartContext: Error parsing cart from localStorage on init:", error); // LOGGING
      return [];
    }
  });

  // Log when cartItems state changes and is saved to localStorage
  useEffect(() => {
    console.log('CartContext: cartItems state changed. Attempting to save:', cartItems); // LOGGING
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('CartContext: Successfully saved cart to localStorage.'); // LOGGING
    } catch (error) {
      console.error("CartContext: Error saving cart to localStorage:", error); // LOGGING
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      console.log('CartContext: addToCart called. Product:', product.name, 'Quantity:', quantity); // LOGGING
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        console.log('CartContext: Item updated. New state:', updatedItems); // LOGGING
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...product, quantity }];
        console.log('CartContext: New item added. New state:', newItems); // LOGGING
        return newItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const filteredItems = prevItems.filter(item => item.id !== productId);
      console.log('CartContext: removeFromCart called. Product ID:', productId, 'New state:', filteredItems); // LOGGING
      return filteredItems;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        const filteredItems = prevItems.filter(item => item.id !== productId);
        console.log('CartContext: updateQuantity to 0. Item removed. New state:', filteredItems); // LOGGING
        return filteredItems;
      }
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      console.log('CartContext: updateQuantity. New state:', updatedItems); // LOGGING
      return updatedItems;
    });
  };

  const getTotalItems = () => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    console.log('CartContext: getTotalItems called. Total:', total); // LOGGING
    return total;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    setCartItems
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};