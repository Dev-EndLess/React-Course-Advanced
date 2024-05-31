import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
  const { cartItems, emptyCart } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("it-IT", {style: 'currency', currency: 'EUR'})
  const [buttonText, setButtonText] = useState(true)

  const hideIfEmpty = cartItems.length > 0
  const displayButton = buttonText ? 'Place Order' : 'Ordering...'

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item}/>
  ))

  const placeOrder = () => {
    setButtonText(prevState => !prevState)
    setTimeout(() => {
      console.log('Order Placed!')
      emptyCart()
      setButtonText(prevState => !prevState)
    }, 2000)
  }


  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost'>Total: {totalCostDisplay}</p>
      {
        hideIfEmpty ?
        <div className='order-button'>
        <button onClick={() => placeOrder()}>
          {displayButton}
        </button> 
      </div> : <p className='text-empty'>You have no items in your Cart</p>
      } 
    </main>
  )
}

export default Cart