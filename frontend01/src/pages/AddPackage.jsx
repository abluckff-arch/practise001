import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { createPackage } from "../api/packageService";

function AddPackage() {
    const [form, setForm] = useState({
        title: "",
        price: "",
        duration: "",
        description: ""
    });
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("title", form.title);
        data.append("description", form.description);
        data.append("price", form.price);
        data.append("duration", form.duration);

        for (let i = 0; i < images.length; i++) {
            data.append("images", images[i]);
        }

        try {
            const auth = JSON.parse(localStorage.getItem("adminAuth"));
            const token = auth?.accessToken || auth?.data?.accessToken;

            await axios.post("http://localhost:5000/api/v1/users/upload", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Package added successfully!");
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Failed to add package. Check console for details.";
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Add New Package</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-1 font-medium">Package Title</label>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-1 font-medium">Price</label>
                    <input
                        type="number"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 mb-1 font-medium">Duration</label>
                    <input
                        type="text"
                        value={form.duration}
                        onChange={(e) => setForm({ ...form, duration: e.target.value })}
                        placeholder="e.g. 1 Month, Yearly"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-1 font-medium">Description</label>
                    <textarea
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        required
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 mb-1 font-medium">Images</label>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => setImages(e.target.files)}
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
                    {loading ? "Saving..." : "Add Package"}
                </button>
            </form>
        </div>
    );
}

export default AddPackage;