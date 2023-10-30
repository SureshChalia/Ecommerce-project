import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../Components/Cart/CartItem"


function CartPage({item}) {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  const [totalItems, setTotalItems] = useState(0);

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
    <div  className='pt-36 pb-36'>
      {
        cart.length > 0 ?
        (
        <div className='flex flex-row max-w-6xl mx-auto sm:flex-col md:flex-row gap-2 mb-10'>
         <div className='w-50'>
          {
            cart.map((item,index)=>{
              return <CartItem key={item._id} item={item} itemIndex={index}/>
            })
          }
         </div>

         <div className='flex flex-col justify-between mt-16 w-50'>
          <div>
            <div className='text-blue-700 font-bold'>YOUR CART</div>
            <div className='text-blue-700 font-bold text-[25px]'>SUMMARY</div>
            <p>
              <span className='font-semibold'>Total Item: {totalItems}</span>
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold'>Total Amount: <b>₹ {totalAmount}</b> </p>
            <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full'>Checkout Now</button>
          </div>
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

export default CartPage