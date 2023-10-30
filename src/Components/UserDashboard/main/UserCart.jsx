import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../../../Components/Cart/CartItem"


function UserCart({item}) {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const shippingCharges = 50;

  useEffect(()=>{
    const calculatedTotalAmount = cart.reduce((acc, curr) => {
      return acc + curr.productPrice * curr.quantity;
    }, 0);

    const calculatedTotalItems = cart.reduce((acc, curr) => {
      // Accumulate the quantity of each item
      return acc + curr.quantity;
    }, 0);

    setTotalAmount(calculatedTotalAmount);
    setTotalItems(calculatedTotalItems);
  },[cart])

  return (
    <div  className='h-full bg-gray-100'>
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      {
        cart.length > 0 ?
        (
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
         <div className='rounded-lg md:w-2/3'>
          {
            cart.map((item,index)=>{
              return <CartItem key={item._id} item={item} itemIndex={index}/>
            })
          }
         </div>

         <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
         <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Total Items</p>
            <p className="text-gray-700">{totalItems}</p>
          </div>
         <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal Amount</p>
            <p className="text-gray-700">₹ {totalAmount}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping Charges</p>
            <p className="text-gray-700">₹ {shippingCharges}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total Paybill</p>
            <div>
              <p className="mb-1 text-lg font-bold text-right">₹ {totalAmount + shippingCharges}</p>
              <p className="text-sm text-gray-700 text-right">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Checkout Now
          </button>
         </div>
 
        </div>
        ):
        (<div className='flex flex-col justify-center items-center h-screen gap-3 '>
          <h1 className='text-blue-800 font-bold'>Cart Empty</h1>
          <Link to="/productpage">
          <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full'>
            Shop Now
          </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default UserCart