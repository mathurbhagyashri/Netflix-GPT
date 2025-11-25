import React, { useState } from "react";
import Header from "./Header";
import background from "../utils/images/BackgroundImage.jpg";

const Login = () => {
const [isSignInForm,setIsSignInForm]= useState(true)

  const toggleSignIn =()=>{
  setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute flex">
        <img src={background} alt="background" />
      </div>

      <form className="w-3/12 absolute p-10 bg-black/70 my-40 mx-auto right-0 left-0 text-white rounded-xl ">
        <h1 className="font-bold text-3xl text-center py-4 mx-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-black/20 w-full text-white border border-gray rounded"
        /> } 

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-black/20 w-full text-white border border-gray rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black/20 border border-white rounded text-white"
        />

        
        <button className="py-2 my-6  bg-red-700  rounded-xl w-full cursor-pointer">
          {isSignInForm ? 'Sign-In' : 'Sign-Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}> {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>
      </form>
    </div>
  );
};

export default Login;
