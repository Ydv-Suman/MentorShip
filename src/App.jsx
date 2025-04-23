import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './route/LandingPage';
import About from "./route/About";
import Feedback from "./route/Feedback";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
