import React, { useRef, useState } from "react";
import Header from "./Header";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value, password.current.value);
    if (email.current.value && password.current.value) {
      if (isSignIn) {
        // Sign In
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorCode, errorMessage);
            setTimeout(() => {
              setErrMessage('');
            }, 3000);
          });
      } else {
        // Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(">>>>", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode, errorMessage);
    setTimeout(() => {
      setErrMessage('');
    }, 3000);
    // ..
  });
  navigate("/");
      }
    }
  };

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-sm mx-auto"
        >
          <h1 className="font-bold text-black">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Submit
          </button>
          <p className="text-red-700">{errMessage? errMessage : ''}</p>
          <Link className="my-5 cursor-pointer hover:text-red-700" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Nexflix? Sign Up now"
              : "Already has an account? Please Sign in"}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
