import { motion } from "framer-motion"; // Optional for animations

function NeedCard({ institute, location, need }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-xl shadow-md border border-teal-100 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-teal-800">{institute}</h3>
      <p className="mt-2 text-sm text-gray-500">{location}</p>
      <p className="mt-3 text-gray-700 leading-relaxed">{need}</p>
      <button className="mt-4 bg-coral-500 text-white px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:bg-coral-600 hover:scale-105 transform transition-all duration-300">
        Donate Now
      </button>
    </motion.div>
  );
}

export default NeedCard;
