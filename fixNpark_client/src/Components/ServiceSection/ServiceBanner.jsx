import React from "react";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-[url('https://i.ibb.co.com/N6CtcrbW/made-Easy3.jpg')] h-72 sm:h-96 flex flex-col items-start justify-center text-white text-left px-6 py-8 mb-12">
            
            
            <div className="absolute inset-0 bg-black/40 z-0"></div>

          
            <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 t">
                    Customized Solutions for <span className="text-yellow-500">Your Success</span> 
                </h1>
                <p className="text-md sm:text-lg text-gray-200 mb-5">
                    Our services are designed to elevate your goals, with personalized solutions that fit your needs.
                </p>
                <Link
                    to="/services"
                    className="btn bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-all"
                >
                    Discover Our Services
                </Link>
            </div>
        </div>
    );
};

export default ServiceBanner;
