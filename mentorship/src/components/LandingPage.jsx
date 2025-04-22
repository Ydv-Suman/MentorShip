import { Component } from "react";
import bg from "../assets/mentoship-bg.jpg"
import { Link } from 'react-router-dom';


class LandingPage extends Component{
    render(){
        return(
            <div className="min-h-screen bg-cover bg-center text-gray-500 relative"
            style={{backgroundImage: `url(${bg})`}}>
                <div className="inline-flex flex-row space-x-4 text-xl">
                    <h1 className="text-5xl italic font-bold">Mentor<span className="text-red-600">Ship</span></h1>
                    <nav className="inline-flex flex-row space-x-4 text-xl items-center">
                        <p className="cursor-pointer underline ">Home</p>
                        <p className="cursor-pointer">Mentors</p>
                        <p className="cursor-pointer"><Link to="/about">About</Link></p>



                    </nav>
                    <nav className="absolute top-6 right-28 text-xl">
                        <p className="cursor-pointer text-white hover:text-red-600 w-20 h-9 bg-blue-500 rounded-full flex items-center justify-center"><Link to="/login">Log In</Link></p>
                    </nav>
                    <nav className="absolute top-6 right-10 text-xl">
                        <p className="cursor-pointer text-white hover:text-cyan-500 w-20 h-9 bg-blue-500 rounded-full flex items-center justify-center">Register</p>
                    </nav>
                </div>
                <div>
                    <div className="absolute top-2/5 left-1">
                        <p className="font-bold text-green-600 text-4xl">Find the Right Mentor.<br/> Fuel Your Journey.</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl">
                        <p className="text-5xl  text-center font-semibold text-gray-900">Search Mentors for Mentoring</p> 
                    </div>

                    <div className="flex flex-row absolute top-3/5 left-1/2 transform -translate-x-1/2 text-xl">
                        <input
                            className="w-50 h-9 rounded-4xl bg-amber-400 text-center" type='search'  placeholder="Search Mentors"
                        />
                        <button className="cursor-pointer w-20 h-9 bg-green-500 rounded-full flex items-center justify-center">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LandingPage