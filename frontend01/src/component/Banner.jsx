import React, { useState, useEffect, useRef } from "react";

export default function BannerCarousel() {
 
 const banners = [
  {
    id: 1,
    title: "Connecting People, Powering Communication",
    subtitle: "Experience ultra-fast WiFi that keeps every conversation crystal clear.",
    image:
      "https://thumbs.dreamstime.com/b/effective-communication-concept-flat-vector-illustration-boy-woman-exchange-ideas-fostering-understanding-clarity-307120965.jpg",
  },
  {
    id: 2,
    title: "Smooth Speed, Refreshing Connectivity",
    subtitle: "Enjoy buffer-free streaming and super-cool browsing anytime.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpu06q28tvi2WkAT13PZqtEbhAh-Bd1JFsQ&s",
  },
  {
    id: 3,
    title: "Boost Your Creativity With Superfast Internet",
    subtitle: "Create, upload, download — all powered by high-speed fiber WiFi.",
    image:
      "https://tripwiremagazine.com/wp-content/uploads/2016/10/adobe-illustrator-catoon-tutorials_thumb.jpg",
  },
  {
    id: 4,
    title: "Open Your World With Limitless Connectivity",
    subtitle: "Smart browsing, smooth video calls, and seamless online experiences.",
    image:
      "https://img.freepik.com/free-vector/open-mind-psychotherapy-composition-with-discussion-symbols-flat-vector-illustration_1284-78150.jpg",
  },
];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Auto rotate slides
  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll when banner changes
  useEffect(() => {
    if (containerRef.current) {
      const scrollX = containerRef.current.clientWidth * current;
      containerRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  }, [current]);

  return (
    <div className="mx-4 my-4">
      {/* Banner container */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden rounded-t-md rounded-b-3xl snap-x snap-mandatory gap-4 w-full"
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="snap-center relative w-full min-w-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-48 md:h-60 lg:h-72">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover rounded-r-xl"
                loading="lazy"
              />
              {/* White gradient overlay */}
              <div className="absolute top-0 right-0 w-full md:w-1/2 h-full  from-white/60 via-white/30 to-transparent"></div>
            </div>

            {/* Text */}
            <div className="z-10 w-full md:w-1/2 px-4 py-4 md:py-0 md:pl-6 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{banner.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${idx === current ? "bg-black scale-110" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
