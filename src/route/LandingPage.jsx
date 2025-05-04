import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import mentors from "../mentorsData.json";
import image from "../assets/mentorship.jpg";

function LandingPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    const filtered = mentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(query.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left: Text + Search */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif mb-4">
            Find a mentor who guides <br className="hidden sm:block" /> you on your career growth
          </h1>
          <p className="mb-2">
            A mentor can help you set goals, develop skills, and navigate <br className="hidden sm:block" />
            your professional journey.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or expertise"
              className="p-3 rounded-xl bg-blue-200 w-full sm:w-2/3"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Search
            </button>
          </div>

          {results && (
            <div className="mt-6 bg-white p-4 rounded-xl shadow">
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

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src={image}
            alt="Mentorship"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-2xl font-semibold">100K</p>
          <p>Total Users</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">1K</p>
          <p>Mentors</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">5K</p>
          <p>Active Users</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
