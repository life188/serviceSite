import { useNavigate } from "react-router-dom";
import ExteriorImg from "./assets/exterior-detailing.jpg";
import InteriorImg from "./assets/interior-detailing.jpg";
import FullImg from "./assets/interior-exterior-detailing.jpg";

const services = [
  {
    id: 1,
    title: "Exterior Detailing",
    description:
      "With our Exterior Detailing service, you can see how beautiful your car really is. To make sure your car not only shines but is also protected from the weather, we carefully hand wash, clean, and shine your rims before applying a protective wax.",
    image: ExteriorImg,
  },
  {
    id: 2,
    title: "Interior Detailing",
    description:
      "Use our all-inclusive interior detailing service to make the interior of your car look brand new. We provide a shampoo and conditioning service in addition to deep cleaning all surfaces. From the dashboard to the door panels, our staff makes sure every detail is flawless, leaving your interior pristine and welcoming.",
    image: InteriorImg,
  },
  {
    id: 3,
    title: "Interior and Exterior Detailing",
    description:
      "Want our Complete Interior & Exterior Detailing? Enjoy the ultimate care makeover. This package combines our best exterior and interior services, including a deep cleaning and conditioning of the interior and a complete hand wash and wax of the exterior. Perfect for people who expect to be flawless from the inside out.",
    image: FullImg,
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div id="services" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-12">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <button
                onClick={() => navigate("/booking")}
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
