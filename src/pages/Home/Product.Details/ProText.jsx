import React, { useContext } from 'react'
import { CartContext } from '../../../Components/header/context/CartContext'
import { BsCartPlus } from 'react-icons/bs'
import { FaHeartCirclePlus, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ProText({product}) {


    const {cartItems , addCart, addToFev, fevItems , removeFev} = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id === product.id);

    const navigate = useNavigate()



        const handleAddCart = () => {
        addCart(product)

        toast.success (
        <div className="toast-wrapper">
            <img src= {product.images[0]} alt={product.title} className='toast-img' />

            <div className="toast-content">
            <strong>{product.title}</strong>
            Added to Cart 
            <div>
                <button className='btn' onClick={() => navigate("/cart")}> View Cart </button>
            </div>
            </div>
        </div>

        , {duration : 3500}
        )
    }

//favorites

  const isInFev = fevItems.some(i => i.id === product.id);
    
const handelAddFev = () => {

  if(isInFev) {
    removeFev(product.id)
    toast.error(`${product.title} Removed From Favorits`)
  } else {

    addToFev(product)
    toast.success(`${product.title} Added To Favorits`)

  }

}



    
    return (
        <div className="item_info">

            <h1 className='name'>{product.title}</h1>

            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />

            </div>

            <p className='price'>$ {product.price}</p>

            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
            <h5>Brand: <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5><span className='stock'> Hurry Up! Only {product.stock} Products Left in Stock </span> </h5>

            <button onClick={handleAddCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
                {isInCart ? "Item in Cart" : "Add To Cart"}  
                <BsCartPlus />
            </button>

            <div className="icons">
                <span className={` ${isInFev ? "isInFev" : ""} `} onClick={handelAddFev}>
                    <FaHeartCirclePlus />
                </span>
                <span className='share'>
                    <IoMdShare />
                </span>
            </div>


        </div>
    )
}

export default ProText