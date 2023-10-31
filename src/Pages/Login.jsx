import React ,{useState} from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa6"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import {login} from "../services/operations/authAPI"

const Login = () => {


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div>
      <section className="h-screen w-11/12 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  mx-5 md:mx-0 md:my-0 pt-36">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
            loading='laazy' />
        </div>
        <div className="md:w-1/3 max-w-sm ">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-white hover:bg-blue-200 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <FcGoogle className="mx-auto h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-white hover:bg-blue-200 text-blue-800 shadow-[0_4px_9px_-4px_#3b71ca]">
              <FaFacebookF className="mx-auto h-3.5 w-3.5" />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded focus:outline-none"
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleOnChange} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 focus:outline-none"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange} />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1 focus:outline-none" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
          </div>
          <div className="text-center md:text-left">
            <button  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            onClick={handleOnSubmit} type="submit">Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup">Register</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login