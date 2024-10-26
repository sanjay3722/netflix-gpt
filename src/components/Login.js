import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className="login-bg">
      <Header />
      <form className="bg-black p-10 rounded-sm text-white flex flex-col gap-5 w-[350px] bg-opacity-80">
        <h2 className="text-lg font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
        />
        <button className="w-full text-sm bg-red-600 py-2 rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div>
          <p className="cursor-pointer text-sm" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already registered? Sign In Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
