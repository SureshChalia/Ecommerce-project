import React, {useState} from 'react'
import {FcGoogle} from "react-icons/fc"
import {FaFacebookF} from "react-icons/fa6"
import { Link ,useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setSignupData } from "../slices/authSlice"
import { sendOtp } from '../services/operations/authAPI'
import { toast } from "react-hot-toast"

const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber:"",
  })


  const { name, email, password, confirmPassword,contactNumber } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      name:"",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber:""
    })
    
  }


  return ( 
    <div>
      <section className="h-screen w-11/12 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 pt-36">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
            loading='laazy' />
        </div>
        <div className="md:w-1/3 max-w-sm ">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign up with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-white hover:bg-blue-200 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <FcGoogle className="mx-auto h-3.5 w-3.5"/>
            </button>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-white hover:bg-blue-200 text-blue-800 shadow-[0_4px_9px_-4px_#3b71ca]">
              <FaFacebookF className="mx-auto h-3.5 w-3.5"/>
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Your Name"  name="name"
              value={name}
              onChange={handleOnChange} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email Address"  name="email"
              value={email}
              onChange={handleOnChange} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password"  name="password"
              value={password}
              onChange={handleOnChange} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Confirm Password"  name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="number" placeholder="Contact Number" name='contactNumber' value={contactNumber} onChange={handleOnChange} />
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={handleOnSubmit}>Create Account</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            You have already an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp