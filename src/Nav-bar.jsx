function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-pink-50 text-white px-6 py-4">
      <div className="flex ">
        <ul className="flex space-x-6">
          <li>
            <a href="/projects" className="text-black hover:text-gray-500 ">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-gray-500 ">
              About Me
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black hover:text-gray-500  ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
