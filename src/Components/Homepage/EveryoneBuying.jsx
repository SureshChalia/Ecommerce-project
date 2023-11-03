import React from 'react'
import image1 from "../../Assets/EveryoneBuying/vibrams.webp";
import image2 from "../../Assets/EveryoneBuying/skinners.jpg"
import image3 from "../../Assets/EveryoneBuying/luna.jpg"
import image4 from "../../Assets/EveryoneBuying/furoshiki.jpg"

const EveryoneBuying = () => {
  return (
    <div className='flex flex-col lg:max-w-7xl mx-auto  mt-12  border-gray-500'>
      <div className='flex flex-col items-center text-center p-4'>
        <p className='text-base lg:text-4xl md:text-2xl xl:text-4xl text-blue-800 font-bold xs:text-lg mb-2 w-full'>WHAT EVERYONE IS BUYING</p>
        <p className='text-blue-500 text-sm sm:text-base lg:text-lg xl:text-xl mb-2 max-w-xs sm:max-w-md lg:max-w-lg w-[90%]'>
          Make sure you set off in footwear that respects your feet and lets you move without limit.
        </p>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-wrap justify-center gap-5'>
          <div className='w-full md:w-1/2 lg:flex-none lg:w-[45%] mx-2  relative group'>
            <img src={image1} alt='Image 1' className='w-full h-[70%] rounded-lg object-fill transform transition-transform group-hover:scale-105' />
            <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[35%]'>
              <button className='bg-white text-blue-700 hover:text-white font-bold px-7 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Men</button>
              <button className='bg-white text-blue-700 hover:text-white font-bold px-4 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Women</button>
            </div>
            <p className='text-base lg:text-3xl md:text-2xl xl:text-3xl text-blue-800 font-bold xs:text-lg mb-2 text-center py-3'>VIBRAM FIVE FINGERS</p>
          </div>
          <div className='w-full md:w-1/2 lg:flex-none lg:w-[45%] mx-2  relative group'>
            <img src={image2} alt='Image 2' className='w-full h-[70%] rounded-lg object-fill transform transition-transform group-hover:scale-105' />
            <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[35%]'>
              <button className='bg-white text-blue-700 hover:text-white font-bold px-7 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Now</button>
            </div>
            <p className='text-base lg:text-3xl md:text-2xl xl:text-3xl text-blue-800 font-bold xs:text-lg mb-2 text-center py-3'>SKINNERS SOCK SHOES</p>
          </div>
        </div>
        <div>
          <div className='flex flex-wrap justify-center gap-5'>
            <div className='w-full md:w-1/2 lg:flex-none lg:w-[45%] mx-2 relative group'>
              <img src={image3} alt='Image 1' className='w-full h-[70%] rounded-lg  object-fill transform transition-transform group-hover:scale-105' />
              <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[35%]'>
                <button className='bg-white text-blue-700 hover:text-white font-bold px-7 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Now</button>
              </div>
              <p className='text-base lg:text-3xl md:text-2xl xl:text-3xl text-blue-800 font-bold xs:text-lg mb-2 text-center py-3'>LUNA SANDALS</p>
            </div> 
            <div className='w-full md:w-1/2 lg:flex-none lg:w-[45%] mx-2  relative group'>
              <img src={image4} alt='Image 2' className='w-full h-[70%] object-fill rounded-lg transform transition-transform group-hover:scale-105' />
              <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[35%]'>
                <button className='bg-white text-blue-700 hover:text-white font-bold px-7 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Men</button>
                <button className='bg-white text-blue-700 hover:text-white font-bold px-4 py-2 rounded-full mx-2 hover:bg-blue-700 transition-all duration-300'>Shop Women</button>
              </div>
              <p className='text-base lg:text-3xl md:text-2xl xl:text-3xl text-blue-800 font-bold xs:text-lg mb-2 text-center py-3'>FUROSHIKI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EveryoneBuying