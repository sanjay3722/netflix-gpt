import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Handle Submit Button
  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidateData(
      email.current.value,
      password.current.value
      // fullName.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign up logic

    if (!isSignInForm) {
      //  Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/C4D03AQFGApGyXQVsJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651600638837?e=1735776000&v=beta&t=tftJOZrpuwPgmISzjfIqo17jiMXFR8mb2t8NMXxiqy8",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code + ": " + error.message);
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  return (
    <div className="login-bg">
      <Header />
      <form
        className="bg-black p-10 rounded-sm text-white flex flex-col gap-5 w-[350px] bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        {errorMessage ? (
          <p className="text-center text-red-500 text-sm">{errorMessage}</p>
        ) : null}

        <h2 className="text-lg font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm ? (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
          />
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-3 py-2 text-sm bg-gray-800 rounded-sm"
        />
        <button
          className="w-full text-sm bg-red-600 py-2 rounded-sm"
          onClick={handleButtonClick}
        >
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
