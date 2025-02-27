import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor", // Default role
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.name, role: formData.role })
      );
      navigate(formData.role === "institute" ? "/institute" : "/donor");
    } catch (error) {
      alert(error.response?.data.msg || "Sign up failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-teal-100">
        <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-teal-800 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
            >
              <option value="donor">Donor</option>
              <option value="institute">Institute</option>
              <option value="supplier">Supplier</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
