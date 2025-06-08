import { useNavigate } from "react-router-dom";
import CarApex from "./assets/CarApex.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div id="home" className="relative h-screen w-full">
      <img
        src={CarApex}
        alt="Luxury Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-20 text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Anywhere, Any Place, Any Time
        </h1>
        <button
          className="bg-black text-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black "
          onClick={() => navigate("/booking")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
