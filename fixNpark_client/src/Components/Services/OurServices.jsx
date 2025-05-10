import React from 'react';
import { FaClock, FaUsers, FaHeadset } from 'react-icons/fa';

const OurServices = () => {
    const services = [
        {
            icon: <FaClock className="text-4xl text-blue-600" />,
            title: '24hr Services',
            description:
                'Our team is available around the clock to assist you with your needs, ensuring uninterrupted support and quick response times—anytime, anywhere.',
            linkText: 'REGISTER NOW',
            linkHref: '#',
        },
        {
            icon: <FaUsers className="text-4xl text-blue-600" />,
            title: 'Expert Team',
            description:
                'Work with industry professionals who bring years of experience and specialized knowledge to every project, delivering top-quality results every time.',
            linkText: 'CONTACT US',
            linkHref: '#',
        },
        {
            icon: <FaHeadset className="text-4xl text-blue-600" />,
            title: 'Excellent Support',
            description:
                'Our dedicated support team is here to help you with friendly, fast, and effective assistance—whether it’s technical help or general inquiries.',
            linkText: 'HELP & SUPPORT',
            linkHref: '#',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border hover:border-blue-500"
                    >
                        <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-500 mb-5">{service.description}</p>
                        <a
                            href={service.linkHref}
                            className="text-blue-600 font-semibold hover:underline transition-all duration-200"
                        >
                            {service.linkText} →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
