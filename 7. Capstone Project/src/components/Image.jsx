import React from "react";
import { PropTypes } from "prop-types";
import { useState, useContext } from "react";
import { Context } from "../Context";

function Image(props) {
  const { toggleFavorite, addToCart, toggleIcon, isInCart, cartItems } =
    useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  const heartIcon = isHovered && (
    <i className={props.img.isFavorite
        ? "ri-heart-fill favorite" 
        : "ri-heart-line favorite"
      }
      onClick={() => toggleFavorite(props.img.id)}>
    </i>
  )

  const cartIcon = isHovered && (
    <i className={isInCart 
        ? "ri-shopping-cart-fill cart" 
        : "ri-add-circle-line cart"
      }
      onClick={() => {addToCart(props.img);toggleIcon();
      }}>
    </i>
  );

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <img src={props.img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.defaultProps = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
