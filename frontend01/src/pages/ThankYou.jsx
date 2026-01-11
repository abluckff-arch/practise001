import { CheckCircle, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />

          <h2 className="text-2xl font-bold mb-3">
            Thank You!
          </h2>

          <p className="text-gray-600 mb-4">
            Thank you for choosing <span className="font-semibold">
              FiberWorld Communication
            </span>.
          </p>

          <p className="text-gray-600 mb-6">
            Our team will contact you shortly for installation and support.
          </p>

          <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-center gap-2 text-sm text-gray-700 mb-6">
            <PhoneCall className="text-blue-600" size={18} />
            Support within 24–48 hours
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
