import React from "react";
import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg"
          alt="background-image"
        />
      </div>

      <form className=" absolute w-4/12 p-12 bg-black bg-opacity-50  my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className="font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mt-3 w-full bg-black bg-opacity-65 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-6 w-full bg-black bg-opacity-65 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black bg-opacity-65 rounded-md"
        />
        <button className="p-3 my-4 font-bold bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
