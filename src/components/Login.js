import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg')]">
      <Header />
      <div className="container mx-auto my-4 flex justify-center align-middle items-center">
        <form className="flex flex-col bg-black/[0.8] py-12 px-16 w-[450px]">
          <h3 className="text-white text-[32px] mb-6 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/20 py-3 mb-5 px-4 border border-white/90 rounded-sm"
            />
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email address"
            className="bg-white/20 py-3 mb-5 px-4 border border-white/90 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/20 py-3 mb-5 px-4 border border-white/90 rounded-sm"
          />
          <button className="p-3 bg-red-700 mt-5 text-white hover:bg-red-600 rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white my-3 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already register Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
