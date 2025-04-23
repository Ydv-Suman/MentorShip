import React from "react";
import { Link } from "react-router-dom";

function LogIn(){
    return(
        <div className="absolute top-[18%] left-[50%] transform -translate-x-1/2 p-1 bg-green-300 rounded-2xl ">
            <div className="bg-white border border-gray-400 rounded-2xl p-6 shadow-lg text-black w-[400px]">
            <p className="text-blue-600 font-bold text-3xl text-center mb-4">LogIn</p>
            <p className="font-semibold"> Email:
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="p-2 rounded-1xl bg-blue-300  w-60 ml-8"
                />
            </p>
            <p className="font-semibold">Password:
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="p-2 rounded-1xl bg-blue-300 w-60 mt-2"
                />
            </p>
            <button className="p-2 bg-blue-400 rounded-2xl w-20 h-10 cursor-pointer mt-3 ml-[40%] font-semibold">Log in</button>
            <button className="p-2 bg-blue-400 rounded-2xl w-40 h-10 cursor-pointer mt-3 ml-[28%] font-semibold">Forget Password?</button>
            <p className="ml-[30%] mt-[10%] font-semibold">Don't have account</p>
            <button className="p-2 bg-blue-400 rounded-2xl w-40 h-10 cursor-pointer mt-3 ml-[28%] font-semibold">Create Account</button>
            </div>


        </div>
    )
}
export default LogIn;