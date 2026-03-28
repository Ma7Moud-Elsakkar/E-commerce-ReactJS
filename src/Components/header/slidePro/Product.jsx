import React, { useContext } from 'react'
import './SlidePro.css'
import { FaStar , FaRegStarHalfStroke , FaHeartCirclePlus , FaCartArrowDown } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CiBookmarkCheck } from "react-icons/ci";
import toast from 'react-hot-toast';






function Product({item}) {

  const navigate = useNavigate()

  const {cartItems , addCart , removeCart , addToFev, fevItems , removeFev} = useContext(CartContext)
  
  const isInCart = cartItems.some(i => i.id === item.id);

  const handleAddCart = () => {

      if(isInCart) {
    removeCart(item.id)
    toast.error(`${item.title} Removed From Cart`)
  } else {

    addCart(item)

    toast.success (
      <div className="toast-wrapper">
        <img src= {item.images[0]} alt={item.title} className='toast-img' />

        <div className="toast-content">
          <strong>{item.title}</strong>
          Added to Cart 
          <div>
            <button className='btn' onClick={() => navigate("/cart")}> View Cart </button>
          </div>
        </div>
      </div>

      , {duration : 3500}
    )

  }

  }

// favorites 

  const isInFev = fevItems.some(i => i.id === item.id);


const handelAddFev = () => {

  if(isInFev) {
    removeFev(item.id)
    toast.error(`${item.title} Removed From Favorits`)
  } else {

    addToFev(item)
    toast.success(`${item.title} Added To Favorits`)

  }

}


  return (
      <div className={`product ${isInCart ? 'in-cart' : ''}`} to="/">
      
      <Link to={`/product/${item.id}`}>

      <span className='status_cart'><CiBookmarkCheck /> In Cart </span>

      <div className="img_product">
        <img src={item.images[0]} alt={item.title} />
      </div>

      <div className="name_product">{item.title}</div>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />

        </div>

        <p className='price'><span>${item.price}</span></p>

      </Link>

        <div className="icons">
          <span className='btn_cart' onClick={handleAddCart}>
            <FaCartArrowDown />
          </span>
          <span className={` ${isInFev ? "isInFev" : ""} `} onClick={handelAddFev}>
            <FaHeartCirclePlus />
          </span>
          <span>
            <IoMdShare />
          </span>
        </div>
      </div>

  )
}

export default Product