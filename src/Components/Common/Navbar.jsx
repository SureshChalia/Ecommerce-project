import React, { useState } from 'react'
import logo from "../../Assets/logo.avif"
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux'




const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);
  const { cart } = useSelector((state) => state);
  
  const closeNavbar = () => {
    setNavbar(false);
  };


  return (
    <div className='fixed w-full z-50'>
      <div className='flex items-center justify-center h-full bg-slate-400' >  <p className='p-2 text-white text-xs sm:text-base text-center md:text-lg'>Free Shipping Across India. COD Available above 1500 INR. Pay in 3 Using Snapmint.</p> </div>
      <nav className="w-full bg-gradient-to-b from-slate-100 to-indigo-200 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl font-bold text-blue-800 "> <img src={logo} alt="" /> </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-blue-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-blue-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
                </li>
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="" onClick={closeNavbar}>Men</NavLink>
                </li>
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="" onClick={closeNavbar}>Women</NavLink>
                </li>
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="" onClick={closeNavbar}>Shoes</NavLink>
                </li>
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="" onClick={closeNavbar}>Sports</NavLink>
                </li>
                <li className="text-blue-800 font-semibold hover:text-indigo-400">
                  <NavLink to="/productpage"  onClick={closeNavbar}>Accessories</NavLink>
                </li>
              </ul>

              <div className="mt-3 gap-2 flex items-center md:hidden">
                {
                  token === null && (
                    <Link
                      to="/login"
                      className="inline-block w-fit px-4 py-2 text-center text-white bg-blue-800 rounded-md shadow hover:bg-gray-800"
                    >
                      Log in
                    </Link>
                  )
                }
                {
                  token !== null && (
                    <Dropdown/>
                  )
                }
                <Link to="/cart">
                  <div className="relative w-fit">
                    < FaShoppingCart className="text-2xl text-blue-800" />
                    {
                      cart.length > 0 &&
                      <span
                        className="absolute -top-1 -right-2 bg-blue-800 text-xs w-5 h-5 flex 
                             justify-center items-center animate-bounce rounded-full text-white"
                      >{cart.length}</span>
                    }
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:flex md:items-center">
            {
              token === null && (
                <Link
                  to="/login"
                  className="px-4 py-2 text-white bg-blue-800 rounded-md shadow hover:bg-gray-800"
                >
                  Log in
                </Link>
              )
            }
            {
              token !== null && (
                
                  <Dropdown/>
               
              )
            }
            <Link to="/cart">
              <div className="relative">
                < FaShoppingCart className="text-2xl text-blue-800" />
                {
                  cart.length > 0 &&
                  <span
                    className="absolute -top-1 -right-2 bg-blue-800 text-xs w-5 h-5 flex 
                             justify-center items-center animate-bounce rounded-full text-white"
                  >{cart.length}</span>
                }
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar