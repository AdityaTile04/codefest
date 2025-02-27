import { useState } from "react";

function InstituteDashboard() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted: ${quantity} of ${item}`);
    setItem("");
    setQuantity("");
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">
        Institute Dashboard
      </h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">
          Raise a Need
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              Item Name
            </label>
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
              placeholder="e.g., Rice"
            />
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
              placeholder="e.g., 10 kg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default InstituteDashboard;
