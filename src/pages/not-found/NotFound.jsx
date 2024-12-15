import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-bl from-red-500 to-purple-800 text-white">
      <div className="p-10 bg-white bg-opacity-10 rounded-2xl shadow-xl text-center backdrop-blur-sm">
        <h1 className="text-9xl font-extrabold tracking-wider text-white drop-shadow-md">
          404
        </h1>
        <h2 className="text-4xl font-bold mt-6 text-white drop-shadow-md">
          Page Not Found
        </h2>
        <p className="text-lg mt-4 text-gray-200">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Return to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
