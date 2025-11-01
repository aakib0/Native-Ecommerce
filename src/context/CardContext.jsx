import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cartItems]);

 
  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart)); // Parse JSON string to array
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };


  const saveCart = async () => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  
  const addToCart = product => {
    setCartItems(prevItems => {
    
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
     
        return prevItems.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  };

 
  const removeFromCart = productId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };


  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId); 
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? {...item, quantity} : item,
        ),
      );
    }
  };

  
  const clearCart = () => {
    setCartItems([]);
  };

  
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

 
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};