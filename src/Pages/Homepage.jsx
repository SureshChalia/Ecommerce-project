import React from 'react'
import { RiExchangeCnyFill } from "react-icons/ri"
import { PiGearFineBold } from "react-icons/pi"
import { MdOutlineSupportAgent } from "react-icons/md"
import { FaHandHoldingUsd } from "react-icons/fa"
import { FaTruckFast } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import HeaderSlider from '../Components/Homepage/HeaderSlider'
import BestSellerSlider from "../Components/Homepage/BestSellerSlider"
import barefoot from "../Assets/feet.webp";
import EveryoneBuying from '../Components/Homepage/EveryoneBuying'
import toesImage from "../Assets/toes.webp"
import SpecialAccesories from '../Components/Homepage/SpecialAccesories'
import Review from '../Components/Common/Review'

const Homepage = () => {
  return (
    <>
    <div className='bg-white'>
      <div>
        <div className='hidden sm:flex items-center justify-center h-full gap-9 bg-slate-200 p-6 text-gray-500 pt-40 class-method'>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-lg sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'><RiExchangeCnyFill /></p>
            <p className='whitespace-normal font-semibold text-base sm:text-sm md:text-sm lg:text-base xl:text-base'>Easy Return/ <br class='hidden lg:inline md:inline xl:inline' />Exchange</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-lg sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'><PiGearFineBold /></p>
            <p className=' whitespace-normal font-semibold text-base sm:text-sm md:text-sm lg:text-base xl:text-base'>Best <br class='hidden lg:inline md:inline xl:inline' /> QualityAssurance</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-lg sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'><MdOutlineSupportAgent /></p>
            <p className=' whitespace-normal font-semibold text-base sm:text-sm md:text-sm lg:text-base xl:text-base'>Prompt <br class='hidden lg:inline md:inline xl:inline' /> Support</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-lg sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'><FaHandHoldingUsd /></p>
            <p className=' whitespace-normal font-semibold text-base sm:text-sm md:text-sm lg:text-base xl:text-base'>Buy Now <br class='hidden lg:inline md:inline xl:inline' /> Pay Later </p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-lg sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'><FaTruckFast /></p>
            <p className=' whitespace-normal font-semibold text-base sm:text-sm md:text-sm lg:text-base xl:text-base'>Track <br class='hidden lg:inline md:inline xl:inline' /> Your Order</p>
          </div>
        </div>
        <div className='flex sm:hidden items-center justify-center h-full gap-7 bg-slate-200 p-5 text-gray-500 pt-36'>
          <Link to=""><div className='flex justify-center items-center gap-2'> <p className='text-5xl'><FaTruckFast /></p> <p className='font-semibold'>Track Your Order</p></div></Link>
        </div>
      </div>
      {/* header slider */}
      <div>
        <HeaderSlider />
      </div>
      {/* Best seller slider */}
      <div className='flex flex-col lg:flex-row w-11/12 mx-auto items-center px-4 lg:px-16 py-12 lg:py-24 gap-5 sm:px-0'>
        <div className='lg:w-[30%] w-full'>
          <p className='text-lg lg:text-4xl md:text-2xl xl:text-4xl sm:text-sm text-blue-800 font-bold xs:text-lg'>OUR <br /> BESTSELLERS</p>
          <p className='text-2xl text-blue-800 font-semibold xs:text-sm'>
            <Link to="/">Shop all <span className="">→</span></Link>
          </p>
        </div>
        <div className='lg:w-[70%] w-full mx-auto'>
          <BestSellerSlider />
        </div>
      </div>

      {/* why-barefoot-section */}
      <div className='flex flex-col w-11/12 mx-auto items-center gap-10'>
        <div className='text-lg lg:text-4xl md:text-2xl xl:text-4xl sm:text-sm text-blue-800 font-bold xs:text-lg'>WHY BAREFOOT ?</div>
        <div className=''>
          <img src={barefoot} alt="" loading='lazy' className='w-full object-contain h-auto sm:h-[24rem] md:h-[32rem] lg:h-[40rem] xl:h-[42rem]' />
        </div>
        <div className='flex flex-col sm:flex-row gap-2'>
          <button className='border rounded-full  p-2 px-6 sm:px-8 mt-2 sm:mt-0 text-white hover:text-blue-800 font-bold bg-blue-800 hover:bg-white transition-all ease-in-out duration-300'>Know More</button>
          <button className='border rounded-full  p-2 px-6 sm:px-8 mt-2 sm:mt-0 hover:text-white font-bold bg-white hover:bg-blue-800 transition-all ease-in-out duration-300'>Barefeet Quiz</button>
        </div>
      </div>

      {/* what evryone buying section */}

      <div>
        <EveryoneBuying />
      </div>

      {/* toes-breath-section */}
      <div className='bg-slate-200 pt-6 pb-6'>
        <div className='flex flex-col w-11/12 mx-auto  items-center'>
          <div className='text-lg lg:text-4xl md:text-2xl xl:text-4xl sm:text-sm text-blue-800 font-bold xs:text-lg text-center'>LET YOUR TOES BREATHE</div>
          <p className='text-blue-500 text-sm sm:text-base lg:text-lg xl:text-xl mb-2 max-w-xs sm:max-w-md lg:max-w-lg w-[90%] text-center'>Five toe socks are better than normal socks.</p>
          <div className=''>
            <img src={toesImage} alt="" loading='lazy' className='w-full object-contain h-auto sm:h-[24rem] md:h-[32rem] lg:h-[40rem] xl:h-[42rem]' />
          </div>
          <div className='mt-5'>
            <button className='border rounded-full  p-2 px-6 sm:px-8 mt-2 sm:mt-0 text-white hover:text-blue-800 font-bold bg-blue-800 hover:bg-white transition-all ease-in-out duration-300'>Shop Toe Shocks</button>
          </div>
        </div>
      </div>

      {/* special catagory accesories */}

      <div>
        <SpecialAccesories/>
      </div>

      {/* reviews  */}

      <div>
        <Review/>
      </div>
    </div>
    </>
  )
}

export default Homepage