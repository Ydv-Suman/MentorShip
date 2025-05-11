import NavBar from "../components/NavBar";
import { useState } from "react";
import mentors from "../mentorsData.json";

function Appointment() {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [concern, setConcern] = useState("");

  const handleSelectChange = (e) => {
    setSelectedMentor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      mentor: selectedMentor,
      name,
      email,
      contact,
      concern,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzn9SWo1q34pgoXmawkw8VgOgrQdwF39lTPBIjZZAdy-0B24oVr4Lz-M5b_FegW0oAeZA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Submission failed");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-400 rounded-xl p-6 shadow-lg w-full"
      >
        <p>
          <label htmlFor="mentor" className="block mb-2 font-medium">
            Select Mentor:
          </label>
          <select
            id="mentor"
            value={selectedMentor}
            onChange={handleSelectChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select a mentor
            </option>
            {mentors.map((mentor) => (
              <option key={mentor.id} value={mentor.name}>
                {mentor.name} - {mentor.expertise}
              </option>
            ))}
          </select>
        </p>

        <p className="mt-4">
          Full Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your fullname"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </p>
        <p className="mt-4">
          <label className="block font-medium">Email:</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </p>

        <p className="mt-4">
          Contact
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter phone number"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </p>

        <p className="mt-4">
          Concerns:
          <textarea
            name="message"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            placeholder="Enter your message"
            maxLength={1000}
            rows={4}
            cols={38}
            className="w-full mt-1 p-2 border border-gray-300 rounded resize-none"
            required
          ></textarea>
        </p>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="cursor-pointer px-6 py-2 bg-amber-500 text-white rounded-full"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
