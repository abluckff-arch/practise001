import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authService";
import toast from "react-hot-toast";

function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setIsSuccess(false);

        try {
            const res = await loginUser(form);

            if (res.data.success) {
                localStorage.setItem("adminAuth", JSON.stringify(res.data));
                toast.success("Login successful!");
                setIsSuccess(true);
                setMessage("Login successful! Redirecting...");
                setTimeout(() => navigate("/dashboard"), 1500);
            } else {
                toast.error(res.data.message || "Invalid credentials");
                setIsSuccess(false);
                setMessage(res.data.message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login failed:", err);
            toast.error(err.response?.data?.message || "Invalid credentials");
            setIsSuccess(false);
            setMessage(err.response?.data?.message || "Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

              <h2 className="text-2xl font-bold text-indigo-700 mb-2">Login</h2>

                {message && (
                    <div className={`mb-4 p-3 rounded-lg border ${
                        isSuccess ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"
                    }`}>
                        {message}
                    </div>
                )}

                <div className="mb-4 text-left">
                    <label className="block text-gray-600 mb-1 font-medium">Username</label>
                    <input
                        type="text"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <div className="mb-6 text-left">
                    <label className="block text-gray-600 mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-lg font-semibold text-white transition ${
                        loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="mt-4 text-sm text-gray-600">
                    Don’t have an account?
                    <a href="/register" className="text-indigo-600 hover:underline"> Register</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
