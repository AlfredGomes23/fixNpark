import React from "react";

const services = [
    {
        title: "Parking Booking",
        description: "Book parking spaces instantly from anywhere.",
        icon: "🚗",
    },
    {
        title: "Hourly Subscription",
        description: "Flexible parking options with hourly pricing.",
        icon: "⏰",
    },
    {
        title: "Monthly Subscription",
        description: "Save money with monthly parking subscriptions.",
        icon: "📅",
    },
    {
        title: "Bulk Parking",
        description: "Large parking spaces available for commercial use.",
        icon: "🏢",
    },
    {
        title: "Electric Vehicle Charging",
        description: "Electric vehicle charging stations in parking areas.",
        icon: "🔌",
    },
];

const ServicesList = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
