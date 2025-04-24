import NavBar from "../components/NavBar";
import { useState } from "react";
import mentors from "../mentorsData.json";
import { Link } from "react-router-dom";

function Appointment() {
  const [selectedMentor, setSelectedMentor] = useState("");

  const handleSelectChange = (e) => {
    setSelectedMentor(e.target.value);
  };

  return (
    <div className="absolute top-[18%] left-[50%] rounded-2xl transform -translate-x-1/2 p-2 bg-gray-400">
      <div className="bg-white border border-gray-400 rounded-xl p-6 shadow-lg">
        <label htmlFor="mentor" className="block mb-2 font-medium">
          Select Mentor:
        </label>
        <select
          id="mentor"
          value={selectedMentor}
          onChange={handleSelectChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>Select a mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor.id} value={mentor.name}>
              {mentor.name} - {mentor.expertise}
            </option>
          ))}
        </select>
        <p>Your fullname
            <input
            type="text"
            placeholder="Enter your fullname"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </p>
        <p>Contact
            <input
            type="number"
            placeholder="Enter phone number"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </p>
        <p>Concerns:
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
              className="cursor-pointer p-2 bg-amber-500 w-45 h-9 text-white rounded-full flex items-center justify-center mx-auto"
            >
              Confirm Registration
            </button>
          </div>
      </div>
    </div>
  );
}

export default Appointment;
