import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import "./App.css";
import CustomNavbar from "./Components/Navbar/Navbar.js";
import Creation from "./Components/Creation/Creation.js";
import Articles from "./Components/Articles/Articles.js";
import Interview from "./Components/Interview/Interview.js";
import News from "./Components/News/News.js";
import Meetings from "./Components/Meeting/Meetings.js";
import Contact from "./Components/Contact/Contact.js";
import GalleryRangePage from "./Components/Gallery/Gallery.js";
import "../src/fonts/fontss/fonts.css";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/interviews" element={<Interview />} />
            <Route path="/news" element={<News />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route
              path="/gallery-range/:range"
              element={<GalleryRangePage />}
            />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
