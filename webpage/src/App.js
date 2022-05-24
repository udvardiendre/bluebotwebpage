import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import AboutUs from "./Components/AboutUs";
import Reference from "./Components/Reference";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutUs />
      <Reference />
      <ContactUs />
      <Footer />

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/contactUs" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
