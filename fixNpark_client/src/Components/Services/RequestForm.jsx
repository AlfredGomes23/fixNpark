import React from 'react';

const RequestForm = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-start overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://i.ibb.co.com/jvKy9yXs/woman-choosing-car-car-showroom.jpg')",
                
                transformOrigin: "left center"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900 to-transparent opacity-70"></div>
            <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-xl ml-16">
                <h2 className="text-white text-3xl font-bold mb-6 text-center tracking-wide">Request A Quote</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-4 rounded-xl bg-white bg-opacity-90 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-4 rounded-xl bg-white bg-opacity-90 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <select className="p-4 rounded-xl bg-white bg-opacity-90 text-gray-700 col-span-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Choose Service</option>
                        <option>Car Leasing</option>
                        <option>Insurance</option>
                        <option>Maintenance</option>
                    </select>

                    <select className="p-4 rounded-xl bg-white bg-opacity-90 text-gray-700 col-span-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Monthly</option>
                        <option>Yearly</option>
                        <option>One Time</option>
                    </select>

                    <textarea
                        placeholder="Your Message"
                        className="p-4 rounded-xl bg-white bg-opacity-90 text-gray-700 placeholder-gray-400 col-span-1 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    ></textarea>

                    <button
                        type="submit"
                        className="col-span-1 md:col-span-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-transform transform hover:scale-105"
                    >
                        Get A Quote
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RequestForm;