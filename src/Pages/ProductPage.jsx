import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Pages/Spinner';
import Product from '../Components/Product/Product';
import {getAllProducts} from "../services/operations/productDetailsAPI"

function ProductPage() {
  const [loading,setLoading]=useState(false);
  const [products,setProducts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const result = await getAllProducts();
      setProducts(result);
      console.log(result, "all products");
    } catch (error) {
      console.log("Error occured during fetching the all products",error);
      setProducts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return (
    <div className='pt-36 pb-36'>
     {
      loading?<Spinner/>:
      products.length>0?
      (
        <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[50vh]">
          {
            products.map((product)=>{
              return <Product key={product._id} product={product}/>
            })
          }
        </div>
      ):
      <div className="flex justify-center items-center">
        <p>No Data Found...</p>
      </div>
     }
    </div>
  )
}

export default ProductPage