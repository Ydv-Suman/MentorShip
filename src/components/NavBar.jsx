import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="bg-green-100 w-full px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Logo and Navigation Links */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10">
                    <Link to="/home">
                        <h1 className="font-bold text-5xl text-center sm:text-left">
                            Mentor<span className="text-blue-500">Ship</span>
                        </h1>
                    </Link>
                    
                    <nav className="flex flex-wrap gap-3 text-lg font-semibold justify-center sm:justify-start">
                        <p className="cursor-pointer"><Link to="/home">Home</Link></p>
                        <p className="cursor-pointer"><Link to="/mentors">Mentors</Link></p>
                        <p className="cursor-pointer"><Link to="/blogs">Blogs</Link></p>
                        <p className="cursor-pointer"><Link to="/feedback">Feedback</Link></p>
                        <p className="cursor-pointer"><Link to="/appointment">Appointment</Link></p>
                        <p className="cursor-pointer"><Link to="/about">About</Link></p>
                    </nav>
                </div>

                {/* Log In Button */}
                <div className="text-xl self-center sm:self-auto">
                    <nav>
                        <p className="cursor-pointer text-white hover:text-red-600 w-28 h-9 bg-blue-500 p-2 rounded-full flex items-center justify-center">
                            <Link to="/login">Log In</Link>
                        </p>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
