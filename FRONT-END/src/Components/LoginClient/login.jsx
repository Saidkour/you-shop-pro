import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const email = useRef('');
    const password = useRef('');

    const handleSubmit = async () => {
        const emailvalue = email.current.value;
        const passwordvalue = password.current.value;

        if (emailvalue.trim() !== '' || passwordvalue.trim() !== ''){
            console.log('loged',emailvalue , password)
        } else {
            console.log('error')
        }
    }

  return (
    <form className="w-full h-[82vh] flex flex-col justify-center items-center ">
      <div className="lg:w-5/12 w-11/12 p-2 text-gray-500 flex justify-center items-center font-light mb-3">
        LOG IN
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="w-6 h-6 ms-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <div className="border border-yellow-500 shadow-xl lg:w-5/12 w-11/12 p-6 rounded-md flex flex-col justify-center items-center">
        <div className="w-10/12 flex justify-between items-center mb-3">
          <label className="font-bold " htmlFor="email">
             {/* <span className="text-red-400"> {error} </span> */}
              Email: 
          </label>
          <input
            id="email"
            className="w-8/12 p-1 outline-yellow-400 border-2 border-gray-200"
            ref={email}
            type="email"
          />
        </div>
        <div className="w-10/12 flex justify-between items-center mb-3">
          <label className="font-bold " htmlFor="password">
             {/* <span className="text-red-400"> {error} </span>   */}
             Password:
          </label>
          <input
            id="password"
            className="w-8/12 p-1 outline-yellow-400 border-2 border-gray-200"
            ref={password}
            type="password"
          />
        </div>
        <div className=" w-10/12 text-start">
          {/* <span className="text-red-400 text-sm">{error} </span> */}
        </div> 
        <div className="w-10/12 flex justify-between items-center mt-6 ">
          <button
            onClick={handleSubmit}
            className=" bg-yellow-500 px-4 py-2 rounded-sm text-white font-medium hover:bg-yellow-600 transition-all"
            type="submit"
          >
           submit
          </button>
          <Link
            className="font-light text-yellow-500 underline hover:text-yellow-600 transition-all"
            // to="/forgetpassword"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </form>
  );
}
