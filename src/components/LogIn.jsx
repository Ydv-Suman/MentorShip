import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="relative top-[18%] px-4 sm:px-0 flex justify-center">
      <div className="bg-green-300 rounded-2xl p-1 w-full max-w-md">
        <div className="bg-white border border-gray-400 rounded-2xl p-6 shadow-lg text-black w-full">
          <p className="text-blue-600 font-bold text-3xl text-center mb-4">LogIn</p>

          <p className="font-semibold">
            Email:
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-1xl bg-blue-300 w-full mt-1"
            />
          </p>

          <p className="font-semibold mt-4">
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              className="p-2 rounded-1xl bg-blue-300 w-full mt-1"
            />
          </p>

          <div className="flex justify-center mt-4">
            <button className="p-2 bg-blue-400 rounded-2xl w-32 h-10 cursor-pointer font-semibold">
              Log in
            </button>
          </div>

          <div className="flex justify-center mt-3">
            <button className="p-2 bg-blue-400 rounded-2xl w-40 h-10 cursor-pointer font-semibold">
              Forget Password?
            </button>
          </div>

          <p className="text-center mt-6 font-semibold">Don't have account</p>

          <div className="flex justify-center mt-3">
            <button className="p-2 bg-blue-400 rounded-2xl w-40 h-10 cursor-pointer font-semibold">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
