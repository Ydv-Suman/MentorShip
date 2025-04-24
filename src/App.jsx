import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './route/LandingPage';
import Mentors from "./route/Mentors";
import Blogs from "./route/Blogs";
import About from "./route/About";
import Feedback from "./route/Feedback";
import Appointment from "./route/Appointment";
import LogIn from "./components/LogIn";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
