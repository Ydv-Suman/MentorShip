import { Component } from "react";
import bg from "../assets/mentoship-bg.jpg";


class About extends Component{
    render(){
        return(
            <div className="min-h-screen bg-cover bg-center text-gray-500 relative"
            style={{backgroundImage: `url(${bg})`}}>
                <div className="inline-flex flex-row space-x-4 text-xl">
                    <h1 className="text-5xl italic font-bold">Mentor<span className="text-red-600">Ship</span></h1>
                    <nav className="inline-flex flex-row space-x-4 text-xl items-center">
                    <p className="cursor-pointer">Home</p>

                        <p className="cursor-pointer">Mentors</p>
                        <p className="cursor-pointer">About</p>

                    </nav>
                    <nav className="absolute top-6 right-28 text-xl">
                        <p className="cursor-pointer text-white hover:text-red-600 w-20 h-9 bg-blue-500 rounded-full flex items-center justify-center">Sign Up</p>
                    </nav>
                    <nav className="absolute top-6 right-10 text-xl">
                        <p className="cursor-pointer text-white hover:text-cyan-500 w-20 h-9 bg-blue-500 rounded-full flex items-center justify-center">Register</p>
                    </nav>
                </div>


                <div>
                    <div className="absolute top-1/6 align-bottom">
                        <p className="font-extrabold text-5xl">About Mentorship</p>
                    </div>
                    <div className="absolute top-2/6 align-bottom">
                        <p className="font-semibold text-center">MentorShip is a platform built to bridge the gap between knowledge and opportunity. <br/>
                        We connect aspiring individuals with experienced mentors who guide, support, and empower <br/>
                        them to achieve their goals</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About