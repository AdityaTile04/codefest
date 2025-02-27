import { motion } from "framer-motion"; // Optional for animations

function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-md text-center transition-all duration-300 hover:bg-teal-50"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold text-coral-500">
        {value}
      </h3>
      <p className="mt-3 text-teal-800 font-medium text-base md:text-lg">
        {title}
      </p>
    </motion.div>
  );
}

export default StatCard;
