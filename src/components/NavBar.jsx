import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="bg-green-100">
            <div className="flex flex-row gap-10 items-center">
                <Link to="/home">
                    <h1 className="ml-3 font-bold text-5xl text-center">Mentor<span className=" text-blue-500">Ship</span></h1>
                </Link>
                
                <nav className="flex flex-row gap-3 text-l text-center font-semibold">
                    <p className="cursor-pointer"><Link to="/home">Home</Link></p>
                    <p className="cursor-pointer"><Link to="/mentors">Mentors</Link></p>
                    <p className="cursor-pointer"><Link to="/blogs">Blogs</Link></p>
                    <p className="cursor-pointer"><Link to="/about">About</Link></p>
                    <p className="cursor-pointer"><Link to="/feedback">Feedback</Link></p>
                </nav>
            </div>
            <div>
                <nav className="absolute top-1.5 right-32 text-xl">
                    <p className="cursor-pointer text-white hover:text-red-600 w-20 h-9 bg-blue-500 p-2 rounded-full flex items-center justify-center"><Link to="/login">Log In</Link></p>
                </nav>
                <nav className="absolute top-1.5 right-10 text-xl">
                    <p className="cursor-pointer text-white hover:text-cyan-500 w-20 h-9 bg-blue-500 p-3 rounded-full flex items-center justify-center">Register</p>
                </nav>
            </div>

        </div>
    )
}
export default NavBar