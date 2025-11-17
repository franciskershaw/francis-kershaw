import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      <div className="px-6">
        <HeroSection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
