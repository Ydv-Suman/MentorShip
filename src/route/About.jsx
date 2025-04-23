import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <div className="relative h-screen">
                    <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2" >
                        <p className="font-extrabold text-5xl text-center">About Mentorship</p>
                    </div>
                    <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2">
                        <p className="font-semibold text-center left-[50%] right-[50%] text-lg text-orange-600">
                            MentorShip is a platform built to bridge the gap between knowledge and opportunity.
                            We connect aspiring individuals with experienced mentors who guide, support, and empower
                            them to achieve their goals.
                        </p>
                    </div>
                </div>


                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2">
                    <p className="font-semibold text-center left-[50%] right-[50%] text-lg text-orange-600">
                    Whether you're a student seeking guidance, a career changer looking for insight, or a professional
                    eager to share your knowledge, MentorShip provides the space to connect, learn, and grow together.<br/>
                    <span className="font-extrabold text-3xl text-green-800 top-[90%]">Our mission is simple:</span><br/>
                    🚀 Empower individuals through shared knowledge.<br/>
                    🌱 Bridge experience with ambition.<br/>
                    💡 Foster communities of lifelong learners and mentors.
                    </p>
                </div>

        </div>
    )
}
export default About;