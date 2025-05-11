import NavBar from "../components/NavBar";
import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mentor, setMentor] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, contact, mentor, rating, message };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwI_uqi_HgReWNj2_kOHX3tX9ySuuLhMhnJsW7A-TAYo2x1JQ_wSgF0fD6B0foQ9pKB/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
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
    <div className="max-w-md w-full mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-xl p-6 shadow-md text-black">
        <p className="text-blue-600 font-bold text-3xl text-center">Feedback</p>

        <div className="mb-1">
          <label className="block font-medium">Full Name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your fullname"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>


        <div className="mb-1">
          <label className="block font-medium">Contact:</label>
          <input
            name="contact"
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter phone number"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-1">
          <label className="block font-medium">Mentor Name:</label>
          <input
            name="mentor"
            type="text"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
            placeholder="Enter mentor name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-1">
          <label className="block font-medium">Rating (1–5):</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="1 to 5"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-1">
          <label className="block font-medium">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={3}
            className="w-full p-2 border border-gray-300 rounded resize-none"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-32 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
