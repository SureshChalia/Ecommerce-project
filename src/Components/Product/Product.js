import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from"../../slices/cartSlice"
import toast from 'react-hot-toast';

function Product({product}) {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart=()=>{
    dispatch(add(product));
    toast.success("Item added to cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(product._id))
    toast.error("Item removed from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-solid border-2 border-gray-100 hover:shadow-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{product.productName}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[13px] text-left">{product.productDescription.split(" ").slice(0,50).join(" ") + "..."}</p>
      </div>
      <div className='h-36 w-44 rounded-md'>
        <img  className="w-full h-full object-fitt rounded-md" src={product.productImage} alt="" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-2">
        <div>
          <p className="text-blue-600 font-semibold">₹ {product.productPrice}</p>
        </div>
        {console.log("cart",cart)}
        
        {
          
          cart.some((p) => p._id === product._id) ?
          (<button
          className="text-white bg-blue-700 border-2 border-gray-100 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-blue-900
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            remove Item 
          </button>) :
          (<button
          className="text-white border-2 border-gray-100 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase bg-blue-700 
          hover:bg-blue-900
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
    </div>
  )
}

export default Product