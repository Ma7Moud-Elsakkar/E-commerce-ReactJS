import React, { useContext } from 'react'
import { CartContext } from '../../Components/header/context/CartContext'
import { IoTrashOutline } from "react-icons/io5";
import './cart.css'
import PageTransition from '../../Components/header/PageTransition';

function CartPage () {


  const {cartItems , increaseQuantity , decreaseQuantity , removeCart} = useContext(CartContext)

  const total = cartItems.reduce((acc , item) => acc + item.price * item.quantity, 0)




  return (
    <PageTransition>
          <div className='checkout'>
      <div className="order">
        <h1>Shopping Cart</h1>

        <div className="items">
          {cartItems.length === 0 ? (
            <div className="empty">
              <p className='alart_empty'>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item , index) => (
              <div className="item_cart" key={index}>
                <div className="image_name">
                  <div className="img_item">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="content">

                    <h4>{item.title}</h4>
                    <p className='price_item'>${item.price}</p>

                    <div className="quantity_control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className='quantity'>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>

                </div>
                  <button onClick={() => removeCart(item.id)} className='delete_item'><IoTrashOutline /></button>
              </div>
            ) )
          ) }
        </div>


        <div className="bottom_summary">
          <div className="shop_table">
            <p>Total</p>
            <span className='total_checkout'>${total.toFixed(2)}</span>
          </div>

          <div className="button_div">
            <button type='submit'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

export default CartPage