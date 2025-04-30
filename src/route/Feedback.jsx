import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [mentor, setMentor] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      contact,
      mentor,
      rating,
      message,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQkpmJ4-haJYqqRdXZ09mvhT0JwQMgK_fH-WTP42EV1wsgemwwR-7EF4FgqdJ6thtQ/exec",
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
    <div className="ml-[38%]">
      <form onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-400 rounded-xl p-5 shadow-lg text-black w-[400px]">
          <p className="text-blue-600 font-bold text-3xl text-center mb-1">Feedback</p>

          <p className="mb-2">
            Full Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your fullname"
              className="w-[90%] p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-2">
            Email:
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-[90%] p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-2">
            Contact:
            <input
              name="contact"
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter phone number"
              className="w-[90%] p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-2">
            Mentor Name:
            <input
              name="mentor"
              type="text"
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
              placeholder="Enter mentor name"
              className="w-[90%] p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-2">
            Rating (1–5):
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="1 to 5"
              className="w-[90%] p-2 border border-gray-300 rounded"
              required
            />
          </p>

          <p className="mb-2">
            Message:
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows={4}
              className="w-[90%] p-2 border border-gray-300 rounded resize-none"
              required
            />
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
      </form>
    </div>
  );
}

export default Feedback;
