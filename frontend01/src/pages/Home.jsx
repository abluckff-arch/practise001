import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear cookies or tokens if needed
        document.cookie = ""; 
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* NAVBAR */}
            <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-700">My App</h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    Welcome to Your Homepage 🎉
                </h2>

                <p className="text-gray-600 max-w-md mb-6">
                    You have successfully logged in! This is your dashboard area.
                    You can customize it however you like.
                </p>

                <button
                    onClick={() => navigate("/profile")}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Go to Profile
                </button>
            </main>
        </div>
    );
};

export default Home;
