import React, { useEffect, useState } from "react";
import { User, Shield, Calendar } from "lucide-react";

const Profile = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Make sure the port (8000) and path (/api/v1/users) match your app.js configuration
        const response = await fetch("http://localhost:5000/api/v1/users/getuser", {
          method: "GET",
          credentials: "include", // This sends the accessToken cookie to the backend
        });

        const result = await response.json();
        console.log("Profile fetch result:", result); // <--- CHECK CONSOLE FOR THIS

        if (!response.ok) {
          throw new Error(result.message || "Failed to load profile");
        }

        setAdmin(result.data);
      } catch (err) {
        console.error("Error fetching profile:", err); // <--- CHECK CONSOLE FOR THIS
        setError(err.message === "Failed to fetch" ? "Unable to connect to server. Please ensure backend is running on port 8000." : err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl font-bold">Error Loading Profile</p>
          <p className="text-gray-600 mt-2">{error}</p>
          <button 
            onClick={() => window.location.href = "/login"}
            className="mt-4 text-blue-600 hover:underline"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-600 text-white p-4 rounded-full">
            <User size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{admin.fullname}</h2>
            <p className="text-gray-500">@{admin.username}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold">Administrator</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Account Created</p>
              <p className="font-semibold">
                {new Date(admin.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-semibold">
                {new Date(admin.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-right">
          <button
            onClick={async () => {
              try {
                // Call backend to clear cookies
                await fetch("http://localhost:5000/api/v1/users/logout", { 
                  method: "POST", 
                  credentials: "include" 
                });
              } catch (e) { console.error("Logout error:", e); }
              localStorage.removeItem("adminAuth");
              window.location.href = "/login";
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
