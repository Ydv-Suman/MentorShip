import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Feedback(){
    return(
        <div className="ml-[38%] w-[3500px]">
        <div className="bg-white border border-gray-400 rounded-xl p-5 shadow-lg text-black w-[400px]">
          <p className="text-blue-600 font-bold text-3xl text-center mb-4">FeedBack</p>

          <p className="mb-4">
            Full Name:
            <input
              name="name"
              type="text"
              placeholder="Enter your fullname"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-4">
            Email:
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-4">
            Contact:
            <input
              name="contact"
              type="number"
              placeholder="Enter phone number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              maxLength="10"
              required
            />
          </p>

          <p className="mb-4">
            Enter mentor name:
            <input
              name="name"
              type="text"
              placeholder="Enter mentor name"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
            </p>
            <p className="mb-4">
            Rating:
            <input
              name="rating"
              type="number"
              placeholder="1 to 5"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </p>
          <p className="mb-4">
            Message:
            <textarea
              name="message"
              placeholder="Enter your message"
              maxLength={1000}
              rows={4}
              cols={38}
              className="w-full mt-1 p-2 border border-gray-300 rounded resize-none"
              required
            ></textarea>
          </p>

          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer w-28 h-9 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
}
export default Feedback;