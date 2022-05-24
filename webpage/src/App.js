import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import AboutUs from "./Components/AboutUs";
import Reference from "./Components/Reference";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutUs />
      <Reference />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
