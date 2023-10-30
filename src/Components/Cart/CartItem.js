import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { GrFormAdd } from "react-icons/gr"
import { HiOutlineMinusSm } from "react-icons/hi"
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
      <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
        <div className='h-24 w-24'>
          <img src={item.productImage} alt="cart item" className="rounded-lg sm:w-40 w-full h-full object-fitt" />
        </div>
        <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{item.productName}</h2>
            <p className="mt-1 text-xs text-gray-700">{item.productDescription}</p>
          </div>
          <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
            <div className='flex items-center border-gray-100'>
              <button onClick={decreaseItemQuantity} className='cursor-pointer rounded-l bg-gray-100 py-1 px-2 duration-100 hover:bg-blue-500 hover:text-blue-50' style={{ width: '30px', height: '30px' }} >

                <HiOutlineMinusSm />
              </button>
              <p className="h-8 w-8 border bg-white text-center text-xs outline-none pt-2">{item.quantity}</p>
              <button onClick={increaseItemQuantity} className='cursor-pointer rounded-l bg-gray-100 py-1 px-2 duration-100 hover:bg-blue-500 hover:text-blue-50' style={{ width: '30px', height: '30px' }}>
                <GrFormAdd />
              </button>
            </div>
            <div className="flex items-center space-x-4">
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
    </div>
  )
}

export default CartItem