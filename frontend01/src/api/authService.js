// src/api/authService.js
import api from "./api";

// Login → { username, password }
export const loginUser = (data) => api.post("/api/v1/users/login", data);

// Register → { fullname, username, password }
export const registerUser = (data) => api.post("/api/v1/users/register", data);
