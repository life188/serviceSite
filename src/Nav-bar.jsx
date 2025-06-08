import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-lg font-semibold">
          Apex Auto Care
        </Link>
        <div className="space-x-6">
          <button
            onClick={() => handleNavClick("home")}
            className="hover:underline focus:outline-none"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="hover:underline focus:outline-none"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="hover:underline focus:outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
