import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-full bg-white">
      <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-8">
        <h1 className="text-5xl font-extrabold">About Mentorship</h1>
        <p className="text-lg font-semibold text-gray-600 max-w-2xl">
          MentorShip is a platform built to bridge the gap between knowledge and opportunity. We connect aspiring individuals with experienced mentors who guide, support, and empower them to achieve their goals.
        </p>
        <p className="text-lg font-semibold text-gray-600 max-w-3xl">
          Whether you're a student seeking guidance, a career changer looking for insight, or a professional eager to share your knowledge, MentorShip provides the space to connect, learn, and grow together.
        </p>
        <div className="text-left font-bold space-y-2">
          <p className="text-4xl text-green-600 text-center">Our mission is simple:</p>
          <p>🚀 Empower individuals through shared knowledge.</p>
          <p>🌱 Bridge experience with ambition.</p>
          <p>💡 Foster communities of lifelong learners and mentors.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
