import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isInCart, setIsInCart] = useState(false)

  //   {
  //     "url": "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true",
  //     "id": "1",
  //     "isFavorite": false
  // }

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const data = await response.json();
      setAllPhotos(data);
    }
    getPhotos();
  }, []);

  const toggleFavorite = (id) => {
    setAllPhotos(prevState => prevState.map(photo => {
      return photo.id === id ? 
        {...photo, isFavorite: !photo.isFavorite} 
        : photo
    }))
  }

  const addToCart = (newItem) => {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItem => prevItem.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, removeFromCart, cartItems, isInCart, emptyCart }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

