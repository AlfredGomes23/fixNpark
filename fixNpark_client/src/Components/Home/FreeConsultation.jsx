import React, { useState } from 'react';

const FreeConsultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        yearly: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex justify-center items-center bg-gray-100 py-16 px-4">
            <div className="relative -top-80 max-w-5xl w-full bg-white rounded-md shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                {/* Left: Form */}
                <div className="p-8 md:p-12">
                    <p className="text-blue-600 font-medium mb-2">Free Consultation</p>
                    <h2 className="text-3xl font-bold mb-6">Get A Free Quote</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            >
                                <option value="">Types of services</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Implementation">Implementation</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                            <select
                                name="yearly"
                                value={formData.yearly}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            >
                                <option value="">Yearly</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Get A Quote
                        </button>
                    </form>
                </div>

                {/* Right: Image */}
                <div className="hidden md:block">
                    <img
                        src="https://i.ibb.co.com/1f9W8sHd/made-Easy2.jpg"
                        alt="Free Consultation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default FreeConsultation;
