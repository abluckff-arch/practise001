// src/api/api.js
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Clean error formatting
api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(
            error?.response?.data || { message: "Server error. Try again." }
        );
    }
);

export default api;
