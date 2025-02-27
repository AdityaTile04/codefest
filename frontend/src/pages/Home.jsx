import { motion } from "framer-motion"; // Optional for animations
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20 md:py-32 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block">Connect.</span>
            <span className="block">Donate.</span>
            <span className="block">Uplift.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            Empower communities with transparency and trust—join a movement that delivers real change.
          </p>
          <Link to="/donor">
            <button className="mt-8 bg-coral-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-coral-600 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6 py-16 md:py-20"
      >
      
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white py-16 md:py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-10 md:mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
              <span className="inline-block w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </span>
              <h3 className="text-xl font-semibold text-teal-800">Raise Needs</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Institutes list their essential requirements effortlessly.
              </p>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
              <span className="inline-block w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </span>
              <h3 className="text-xl font-semibold text-teal-800">Donate</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Donors fund items or amounts with secure payments.
              </p>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
              <span className="inline-block w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </span>
              <h3 className="text-xl font-semibold text-teal-800">Deliver</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Suppliers ship goods directly to institutes.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;