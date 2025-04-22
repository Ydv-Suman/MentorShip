import { Component } from "react";
import { Link } from 'react-router-dom';
import bg from "../assets/mentoship-bg.jpg";


class About extends Component{
    render(){
        return(
            <div className="min-h-screen bg-cover bg-center text-gray-500 relative"
            style={{backgroundImage: `url(${bg})`}}>
                <div className="inline-flex flex-row space-x-4 text-xl">
                    <h1 className="text-5xl italic font-bold">Mentor<span className="text-red-600">Ship</span></h1>
                    <nav className="inline-flex flex-row space-x-4 text-xl items-center">
                    <p className="cursor-pointer"><Link to="/">Home</Link></p>

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


                <div className="relative h-screen">
                    <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2" >
                        <p className="font-extrabold text-5xl text-center">About Mentorship</p>
                    </div>
                    <div className="absolute top-[17%] left-[50%] transform -translate-x-1/2">
                        <p className="font-semibold text-center left-[50%] right-[50%] text-lg text-orange-600">
                            MentorShip is a platform built to bridge the gap between knowledge and opportunity.
                            We connect aspiring individuals with experienced mentors who guide, support, and empower
                            them to achieve their goals.
                        </p>
                    </div>
                </div>


                <div className="absolute top-[32%] left-[50%] transform -translate-x-1/2">
                    <p className="font-semibold text-center left-[50%] right-[50%] text-lg text-orange-600">
                    Whether you're a student seeking guidance, a career changer looking for insight, or a professional
                    eager to share your knowledge, MentorShip provides the space to connect, learn, and grow together.<br/>
                    <span className="font-extrabold text-3xl text-green-800">Our mission is simple:</span><br/>
                    🚀 Empower individuals through shared knowledge.<br/>
                    🌱 Bridge experience with ambition.<br/>
                    💡 Foster communities of lifelong learners and mentors.
                    </p>
                </div>

                <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2">
                    <div className="bg-white border border-gray-400 rounded-xl p-6 shadow-lg text-black w-[400px]">
                        <p className="text-blue-600 font-bold text-3xl text-center">
                            FeedBack
                        </p>
                        <p>Full Name:
                            <input
                            type="text"
                            placeholder="Enter your fullname"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </p>
                        <p>Email:
                            <input 
                            type="email" 
                            placeholder="Enter email address"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </p>
                        <p>Contact:
                            <input 
                            type="number" 
                            placeholder="Enter phone number"
                            maxLength={10}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </p>
                        <p>Message:
                            <textarea
                                placeholder="Enter your message"
                                maxLength={100}
                                rows={4}
                                cols={38}
                                className="mt-1 p-2 border border-gray-300 rounded resize-none"
                                >
                            </textarea>
                        </p>
                        <p>
                            <button className="cursor-pointer w-20 h-9 bg-green-500 rounded-full flex items-center justify-center">Submit</button>
                        </p>
                    </div >
                </div>
            </div>
        )
    }
}
export default About