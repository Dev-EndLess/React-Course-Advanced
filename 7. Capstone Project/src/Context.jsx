import React, { createContext, useEffect, useState } from "react";
const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

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

  function toggleFavorite(id) {
    setAllPhotos((prevPhotos) =>
      prevPhotos.map((photo) => {
        return photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo;
      })
    );
  }

  function addToCart(photo) {
    setCartItems((prevPhoto) => [...prevPhoto, photo]);
  }
  console.log(cartItems);

  function toggleIcon() {}

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        isInCart,
        toggleIcon,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
