import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      <HeroSection />

      <Footer />
    </div>
  );
}

export default App;
