import React, { useState, useContext } from 'react'
import { Context } from "../Context"

function CartItem({item}) {
  const { removeFromCart } = useContext(Context)
  const [isHovered, setIsHovered] = useState(false);

  const iconClassname = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className='cart-item'>
      <img src={item.url} width="200px" />
      <p>5.99 $</p>
      <i 
      className={iconClassname}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      onClick={() => removeFromCart(item.id)}></i>
    </div>
  )
}

export default CartItem
