import React from "react";
import Header from "../component/header";
import Footer from "../component/Footer";

export default function Packages() {
  const yearlyPlans = [
    {
      id: 1,
      speed: "50 Mbps",
      price: "Rs. 8,999 / year",
      img: "https://images.unsplash.com/photo-1581091215367-1b1a1b7c7f92?auto=format&fit=crop&w=800&q=80",
      description: "Good for light browsing, YouTube, and social media.",
    },
    {
      id: 2,
      speed: "100 Mbps",
      price: "Rs. 11,499 / year",
      img: "https://images.unsplash.com/photo-1595376952620-38a4f42a4375?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for HD streaming and online classes.",
    },
    {
      id: 3,
      speed: "200 Mbps",
      price: "Rs. 14,999 / year",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for multi-device households and fast downloads.",
    },
    {
      id: 4,
      speed: "300 Mbps",
      price: "Rs. 17,999 / year",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      description: "Great for gamers and 4K streaming.",
    },
    {
      id: 5,
      speed: "500 Mbps",
      price: "Rs. 23,999 / year",
      img: "https://images.unsplash.com/photo-1580894908361-967195033a28?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for heavy streaming, gaming, and large families.",
    },
  ];

  const sixMonthPlans = [
    {
      id: 1,
      speed: "50 Mbps",
      price: "Rs. 5,199 / 6 months",
      img: "https://images.unsplash.com/photo-1581091215367-1b1a1b7c7f92?auto=format&fit=crop&w=800&q=80",
      description: "Good for light browsing, YouTube, and social media.",
    },
    {
      id: 2,
      speed: "100 Mbps",
      price: "Rs. 6,999 / 6 months",
      img: "https://images.unsplash.com/photo-1595376952620-38a4f42a4375?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for HD streaming and online classes.",
    },
    {
      id: 3,
      speed: "200 Mbps",
      price: "Rs. 8,999 / 6 months",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for multi-device households and fast downloads.",
    },
    {
      id: 4,
      speed: "300 Mbps",
      price: "Rs. 11,499 / 6 months",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      description: "Great for gamers and 4K streaming.",
    },
    {
      id: 5,
      speed: "500 Mbps",
      price: "Rs. 15,199 / 6 months",
      img: "https://images.unsplash.com/photo-1580894908361-967195033a28?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for heavy streaming, gaming, and large families.",
    },
  ];

  const threeMonthPlans = [
    {
      id: 1,
      speed: "50 Mbps",
      price: "Rs. 2,799 / 3 months",
      img: "https://images.unsplash.com/photo-1581091215367-1b1a1b7c7f92?auto=format&fit=crop&w=800&q=80",
      description: "Good for light browsing, YouTube, and social media.",
    },
    {
      id: 2,
      speed: "100 Mbps",
      price: "Rs. 3,699 / 3 months",
      img: "https://images.unsplash.com/photo-1595376952620-38a4f42a4375?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for HD streaming and online classes.",
    },
    {
      id: 3,
      speed: "200 Mbps",
      price: "Rs. 4,799 / 3 months",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for multi-device households and fast downloads.",
    },
    {
      id: 4,
      speed: "300 Mbps",
      price: "Rs. 6,199 / 3 months",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      description: "Great for gamers and 4K streaming.",
    },
    {
      id: 5,
      speed: "500 Mbps",
      price: "Rs. 8,299 / 3 months",
      img: "https://images.unsplash.com/photo-1580894908361-967195033a28?auto=format&fit=crop&w=800&q=80",
      description: "Ideal for heavy streaming, gaming, and large families.",
    },
  ];

  const renderPlans = (plans) =>
    plans.map((plan) => (
      <div
        key={plan.id}
        className="bg-white p-6 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-all flex flex-col"
      >
        {/* Image */}
        <div className="relative w-full h-40 mb-4">
          <img
            src={plan.img}
            alt={plan.speed}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 from-white/80 to-transparent rounded-b-xl"></div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{plan.speed}</h3>
        <p className="text-lg font-bold text-green-600 mb-3">{plan.price}</p>
        <p className="text-gray-600 text-sm ">{plan.description}</p>

        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all">
          Choose Plan
        </button>
      </div>
    ));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-gray-100 space-y-16">
        {/* 1-Year Packages */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            1-Year Internet Packages
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {renderPlans(yearlyPlans)}
          </div>
        </section>

        {/* 6-Month Packages */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            6-Month Internet Packages
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {renderPlans(sixMonthPlans)}
          </div>
        </section>

        {/* 3-Month Packages */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            3-Month Internet Packages
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {renderPlans(threeMonthPlans)}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
