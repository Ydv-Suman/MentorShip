import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import image from "../assets/mentorship.jpg"
import { useState } from "react";
import mentors from "../mentorsData.json";

function LandingPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null); // null = no search yet

  const handleSearch = () => {
    const filtered = mentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(query.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <div className="absolute top-[20%] left-[10%]">
        <p className="font-semibold text-4xl font-serif">
          Find a mentor who guide <br />you on your career growth
        </p>
        <p>
          A mentor can help you set goal, develop skills, and navigate <br />
          your professional journey
        </p>
        <p>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or expertise"
            className="p-3 rounded-2xl w-[70%] bg-blue-300 mt-[5%] mr-2"
          />
          <button
            onClick={handleSearch}
            className="cursor-pointer bg-blue-300 font-semibold w-20 h-12 p-2 rounded-2xl text-center justify-center"
          >
            Search
          </button>
        </p>

        {results && (
          <div className="mt-6 bg-white p-4 rounded-xl shadow w-[90%]">
            {results.length > 0 ? (
              <>
                <h3 className="text-lg font-bold mb-2">Results:</h3>
                <ul>
                  {results.map((mentor) => (
                    <li key={mentor.id} className="text-blue-600 font-medium">
                      {mentor.name} — {mentor.expertise}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-red-600 font-semibold">No mentor found.</p>
            )}
          </div>
        )}
      </div>

      <div className="absolute top-[75%] left-[10%]">
      <div className="flex flex-row gap-5 mt-[10%] ml-[10%]">
          <div className="flex flex-col text-center">
            <p className="font-semibold text-xl">100K </p>
            <p>Total Users </p>
          </div>
          <div className="flex flex-col text-center ">
            <p className="font-semibold text-xl">1K </p>
            <p>Mentors</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-semibold text-xl">5K </p>
            <p>Active Users </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[20%] right-[8%] w-[35%] h-[65%] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default LandingPage;