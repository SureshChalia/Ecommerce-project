import React, { useState } from 'react'
import Spinner from '../../../../Pages/Spinner';
import { useEffect } from 'react';
import { getAllProducts } from "../../../../services/operations/productDetailsAPI"

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await getAllProducts();
      setProducts(result);
      console.log(result, "all products");
    } catch (error) {
      console.log("Error occured during fetching the all products", error);
      setProducts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, [])


  return (
    <div>
      {
        loading ? <Spinner /> :
          products.length > 0 ?
            <div className='flex flex-wrap gap-4 '>
              {
                products.map((product) => (<div className='flex flex-col items-center justify-center p-2 border rouned-md gap-2 w-[280px] h-[360px]' key={product.id}>
                  <p className='font-bold text-blue-600'>{product.productName}</p>
                  <div className='h-36 w-44 rounded-md'>
                    <img className="w-full h-full object-fitt rounded-md" src={product.productImage} alt="" />
                  </div>
                  {/* <img src={product.productImage} alt="product images" className='w-full h-full object-fitt rounded-md' /> */}
                  <p className='text-gray-600 text-center'>{product.productDescription.split(" ").slice(0,30).join(" ") + "..."}</p>
                  <p className='font-bold text-blue-600'>₹ {product.productPrice}</p>
                  <div className='flex gap-2 items-center'>
                    <button className='px-4 py-1 bg-blue-600 text-white text-sm rounded-sm shadow-md cursor-pointer select-none leading-normal  whitespace-nowrap border border-transparent active:bg-[#0064bd] active:shadow-none  hover:shadow-[0_0_0_4px_rgba(0, 149, 255, .15)]  '>Edit</button>
                    <button className='px-4 py-1 bg-[#f34b4b] text-white text-sm rounded-sm shadow-md cursor-pointer select-none leading-normal  whitespace-nowrap border border-transparent active:bg-[#bd1f00] active:shadow-none  hover:shadow-[0_0_0_4px_rgba(0, 149, 255, .15)]  '>Delete</button>
                  </div>
                </div>))
              }
            </div> :
            <div className="flex justify-center items-center">
              <p>No Products Found...</p>
            </div>
      }
    </div>
  )
}
export default Products