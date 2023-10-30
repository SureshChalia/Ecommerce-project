import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import {GrFormAdd} from "react-icons/gr"
import {HiOutlineMinusSm} from "react-icons/hi"
import { useDispatch } from 'react-redux'
import { remove, increaseQuantity, decreaseQuantity } from "../../slices/cartSlice"
import toast from 'react-hot-toast';


function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item._id));
    toast.success("Item Removed");
  }

  const increaseItemQuantity = () => {
    dispatch(increaseQuantity(item._id));
  };

  const decreaseItemQuantity = () => {
    if (item.quantity === 1) {
      // If the quantity is already 1 and user tries to decrease, remove the item from the cart
      removeFromCart();
    } else {
      dispatch(decreaseQuantity(item._id));
    }
  };

  return (
    <div>
      <div className='flex flex-row items-center gap-8 p-4 mt-10 ml-5 rounded-xl  border-b-2 w-100'>
        <div className='h-[7rem] w-[10rem]'>
          <img src={item.productImage} alt="cart item" className="w-full h-full object-fitt rounded-md"/>
        </div>
        <div className='flex flex-col gap-3 mt-0 pt-0 w-11/12 '>
          <h1 className="text-gray-700 font-semibold text-lg text-left  mt-0 ">{item.productName}</h1>
          <h1 className=" text-gray-400 font-normal text-[15px] text-left ">{item.productDescription}</h1>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <button onClick={decreaseItemQuantity} className='bg-gray-300 rounded-full hover:cursor-pointer flex items-center justify-center' style={{ width: '30px', height: '30px' }} >
                <HiOutlineMinusSm />
              </button>
              <p className='text-blue-600 font-semibold'>{item.quantity}</p>
              <button onClick={increaseItemQuantity} className='bg-gray-300 rounded-full hover:cursor-pointer flex items-center justify-center' style={{ width: '30px', height: '30px' }}>
                <GrFormAdd />
              </button>
            </div>
            <p className="text-blue-600 font-semibold">₹ {item.productPrice * item.quantity}</p>
            <div
              onClick={removeFromCart}
              className='flex items-center justify-center bg-red-400 rounded-full hover:cursor-pointer'
              style={{ width: '30px', height: '30px' }} 
            >
              <AiFillDelete className='m-1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem