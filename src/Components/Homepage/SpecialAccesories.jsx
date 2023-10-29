import React from 'react'
import img1 from "../../Assets/SpecialCategoriesImages/armsleeves.jpg"
import img2 from "../../Assets/SpecialCategoriesImages/bag.jpg"
import img3 from "../../Assets/SpecialCategoriesImages/bottle.jpg"
import img4 from "../../Assets/SpecialCategoriesImages/caps.jpg"
import img5 from "../../Assets/SpecialCategoriesImages/headwristbands.jpg"
import img6 from "../../Assets/SpecialCategoriesImages/shocks.jpg"
import img7 from "../../Assets/SpecialCategoriesImages/sunglasses.jpg"
import img8 from "../../Assets/SpecialCategoriesImages/yogamates.jpg"
import { Link } from 'react-router-dom'

const SpecialAccesories = () => {

  const imgData = [
    {
      id: 1,
      text: "ARM SLEEVES",
      image: img1,

    },
    {
      id: 2,
      text: "BAGPACK",
      image: img2,

    },
    {
      id: 3,
      text: "SPORTY BOTTLES",
      image: img3,

    },
    {
      id: 4,
      text: "CAPS",
      image: img4,

    },
    {
      id: 5,
      text: "HEAD AND WRISTBANDS",
      image: img5,

    },
    {
      id: 6,
      text: "SPORTS SHOCKS",
      image: img6,

    },
    {
      id: 7,
      text: "SUNGLASSES",
      image: img7,

    },
    {
      id: 8,
      text: "YOGAMATES",
      image: img8,

    },
  ]

  return (
   <div className=' mt-10 '>
    <p className='text-lg lg:text-4xl md:text-2xl xl:text-4xl sm:text-sm text-blue-800 font-bold xs:text-lg text-center'>SPECIAL CURATED ACCESSORIES</p>
     <div className="flex flex-wrap justify-center mt-7">
      {imgData.map((image, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 relative">
          <Link>
            <img src={image.image} alt={`Image ${index + 1}`} className="w-full h-[20rem] object-fill rounded-lg hover:scale-105 transition-all ease-in-out duration-300" />
            <div className='absolute bottom-9 left-[30%]'><button className='border rounded-full  p-2 px-6 sm:px-8 mt-2 sm:mt-0 hover:text-white text-blue-700 font-bold hover:bg-blue-600 bg-white transition-all ease-in-out duration-300'>{image.text}</button></div>
          </Link>
        </div>
      ))}
    </div>
   </div>
  )
}

export default SpecialAccesories