import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-6">
        <div className="text-2xl font-bold">MentorShip</div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 font-medium text-sm sm:text-base">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/mentors" className="hover:text-gray-300">Mentors</Link>
          <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/appointment" className="hover:text-gray-300">Appointment</Link>
          <Link to="/feedback" className="hover:text-gray-300">Feedback</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
