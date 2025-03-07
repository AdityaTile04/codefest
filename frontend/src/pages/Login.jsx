import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      // Assuming backend returns user info; if not, fetch it separately
      const userRes = await api.get("/auth/me"); // Add this endpoint in backend if needed
      const user = userRes.data; // { name, role }
      localStorage.setItem("user", JSON.stringify(user));
      navigate(user.role === "institute" ? "/institute" : "/donor");
    } catch (error) {
      alert(error.response?.data.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-teal-100">
        <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <button
            type="submit"
            className="w-full bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transform transition-all duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
