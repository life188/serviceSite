import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import ServicesPage from "./Services";
import NavBar from "./Nav-bar";
import ContactSection from "./contact";
import Booking from "./BookingPage";

function App() {
  return (
    <Router>
      <div className="bg-pink-50 min-h-screen">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesPage />
                <ContactSection />
              </>
            }
          />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
