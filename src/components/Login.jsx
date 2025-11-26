import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../utils/images/BackgroundImage.jpg";
import {checkValidData} from '../utils/validate.js'

const Login = () => {
const [isSignInForm,setIsSignInForm]= useState(true);
const [errorMessage,setErrorMessage]= useState('')

const name= useRef(null);
const email= useRef(null);
const password= useRef(null);


  const toggleSignIn =()=>{
  setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick=()=>{    
   const message= isSignInForm ? checkValidData("",email.current.value,password.current.value) : checkValidData(name.current.value,email.current.value,password.current.value);

   console.log("message",message);
   setErrorMessage(message)

  }
  return (
    <div>
      <Header />
      <div className="absolute flex">
        <img src={background} alt="background" />
      </div>

      <form className="w-3/12 absolute p-10 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-xl" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="font-bold text-3xl text-center py-4 mx-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-black/20 w-full text-white border border-gray rounded focus:ring-2 focus:ring-white-600 focus:outline-none"
        /> } 

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-black/20 w-full text-white border border-gray rounded focus:border-white-500 focus:ring-2 focus:ring-white-600 focus:outline-none "
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black/20 border border-white rounded text-white focus:ring-2 focus:ring-white-600 focus:outline-none"
        />

        <p className="text-red-500 text-lg font-bold py-2">
          {errorMessage}
        </p>
 
        <button className="py-2 my-6  bg-red-700  rounded-xl w-full cursor-pointer" onClick={handleButtonClick}>
          {isSignInForm ? 'Sign-In' : 'Sign-Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}> {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>
      </form>
    </div>
  );
};

export default Login;
