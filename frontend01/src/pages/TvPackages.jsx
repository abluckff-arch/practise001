import React from "react";
import Header from "../component/header";
import Footer from "../component/Footer";

export default function TVSubscriptionPackages() {
  const tvPackages = [
    {
      id: 1,
      title: "Basic TV Pack",
      price: "Rs. 4,999 / year",
      channels: "80+ Channels",
      img: "https://images.unsplash.com/photo-1583225272297-1559fd8e3f12?auto=format&fit=crop&w=800&q=80",
      description: "Includes essential entertainment, news, and music channels.",
    },
    {
      id: 2,
      title: "Standard TV Pack",
      price: "Rs. 6,499 / year",
      channels: "120+ Channels",
      img: "https://images.unsplash.com/photo-1596783074915-713b1ae32a1d?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for family entertainment with HD channel support.",
    },
    {
      id: 3,
      title: "Premium TV Pack",
      price: "Rs. 8,999 / year",
      channels: "160+ Channels",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=800&q=80",
      description: "Includes sports, movies, kids, and premium HD channels.",
    },
    {
      id: 4,
      title: "Ultra HD TV Pack",
      price: "Rs. 11,499 / year",
      channels: "200+ Channels",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332df5?auto=format&fit=crop&w=800&q=80",
      description: "Ultimate package with full HD & 4K support, including all premium channels.",
    },
  ];

  return (
    <section className="w-full bg-gray-100">
      <Header />

      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
          TV Yearly Subscription Packages
        </h2>

        {/* Cards Grid */}
        <div className="
          max-w-7xl mx-auto 
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8
        ">
          {tvPackages.map((plan) => (
            <div
              key={plan.id}
              className="
                bg-white rounded-3xl shadow-md 
                hover:shadow-2xl 
                overflow-hidden 
                transition-all duration-300 
                flex flex-col
              "
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <img
                  src={plan.img}
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-20  from-white/90 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                  {plan.title}
                </h3>

                <p className="text-green-600 font-bold text-lg md:text-xl">
                  {plan.price}
                </p>

                <p className="text-gray-700 font-medium mt-1">
                  {plan.channels}
                </p>

                <p className="text-gray-600 text-sm md:text-base mt-3  leading-relaxed">
                  {plan.description}
                </p>

                <button
                  className="
                    mt-6 w-full bg-blue-600 text-white 
                    py-2 rounded-xl 
                    hover:bg-blue-700 
                    transition-all duration-200
                  "
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
