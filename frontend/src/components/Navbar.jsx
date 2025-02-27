import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHandsHelping,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa"; // Import icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get user info

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-teal-700 to-teal-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-tight hover:text-teal-200 transition-colors duration-300 flex items-center"
        >
          <FaHome className="mr-2" /> Just Donate
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {user ? (
            <>
              <Link
                to={user.role === "institute" ? "/institute" : "/donor"}
                className="text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
              >
                <FaUser className="mr-2" /> {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-coral-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300 flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/institute"
                className="text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
              >
                <FaHandsHelping className="mr-2" /> Institute
              </Link>
              <Link
                to="/donor"
                className="text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
              >
                <FaHandsHelping className="mr-2" /> Donor
              </Link>
              <Link
                to="/signup"
                className="bg-coral-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300 flex items-center"
              >
                <FaUserPlus className="mr-2" /> Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-coral-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300 flex items-center"
              >
                <FaSignInAlt className="mr-2" /> Log In
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 px-6 py-4 space-y-4 animate-slide-in">
          {user ? (
            <>
              <Link
                to={user.role === "institute" ? "/institute" : "/donor"}
                className="block text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="mr-2" /> {user.name}
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full bg-coral-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-coral-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaSignOutAlt className="mr-2" /> Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/institute"
                className="block text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaHandsHelping className="mr-2" /> Institute
              </Link>
              <Link
                to="/donor"
                className="block text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaHandsHelping className="mr-2" /> Donor
              </Link>
              <Link
                to="/signup"
                className="block text-white text-lg font-medium hover:text-teal-200 hover:underline underline-offset-4 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-2" /> Sign Up
              </Link>
              <Link
                to="/login"
                className="block w-full bg-coral-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-coral-600 transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <FaSignInAlt className="mr-2" /> Log In
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
