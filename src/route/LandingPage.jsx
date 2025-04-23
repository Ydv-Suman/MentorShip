import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import image from "../assets/mentorship.jpg"


function LandingPage(){
    return(
        <div>
            

            <div className="absolute top-[35%] left-[10%]">
                <p className="font-semibold text-4xl font-serif">Find a mentor who guide <br/>you on your career growth</p>
                <p>A mentor can help you set goal, develop skills, and naviate <br/> you professional journey</p>
                <p>
                    <input
                        type="text"
                        placeholder="Search for mentor"
                        className="p-3 rounded-2xl w-[70%] bg-blue-300 mt-[5%] mr-2"
                    />
                    <button className="cursor-pointer bg-blue-300 font-semibold w-20 h-12 p-2 rounded-2xl text-center justify-center">Search</button>
                </p>

                <div className="flex flex-row gap-4 mt-[10%] ml-[10%]">
                    <div className=" flex flex-col">
                        <p className="font-semibold text-xl">100K </p>
                        <p>Total Users </p>
                    </div>
                    <div className=" flex flex-col">
                        <p className="font-semibold text-xl">100K </p>
                        <p>Mentors</p>
                    </div><div className=" flex flex-col">
                        <p className="font-semibold text-xl">100K </p>
                        <p>Active Users </p>
                    </div>
                </div>
            </div>

            <div
  className="absolute top-[20%] right-[8%] w-[35%] h-[65%] bg-cover bg-center"
  style={{ backgroundImage: `url(${image})` }}
></div>


        </div>
    )
}
export default LandingPage;