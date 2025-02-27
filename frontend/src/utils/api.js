import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // Your backend URL
    headers: { "Content-Type": "application/json" },
});

// Add token to requests if logged in
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["x-auth-token"] = token;
    return config;
});

export default api;