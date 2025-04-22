import { Component } from "react";
import bg from "../assets/mentoship-bg.jpg"
import { Link } from "react-router-dom";

class LogIn extends Component{
    render(){
        return(
            <div className="min-h-screen bg-cover bg-center text-gray-500 relative"
                    style={{backgroundImage: `url(${bg})`}}>
                <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2">
                    <div className="bg-white border border-gray-400 rounded-xl p-6 shadow-lg text-black w-[400px]">
                        <p className="text-blue-600 mb-5 font-bold text-3xl text-center">
                            Log in to your account
                        </p>

                        <p className="mb-3">Email:
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </p>

                        <p className="mb-4">Password:
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </p>

                        <p>
                            <button className="cursor-pointer w-20 h-7 bg-green-500 rounded-full flex items-center justify-center">Log In</button>
                        </p>

                        <p className="mt-4 text-center font-semibold text-blue-400">
                            Forgot Password?
                        </p>

                        <p className="mt-4">
                            <button className="block mx-auto cursor-pointer w-40 h-7 bg-blue-500 rounded-full flex items-center justify-center">Create Account</button>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
export default LogIn