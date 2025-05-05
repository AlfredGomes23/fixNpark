import React from 'react';

const AboutUsBanner = () => {
    return (
        <div className='w-11/12 mx-auto pt-12 pb-16 flex flex-col lg:flex-row items-center justify-between gap-16'>
            <div className='lg:w-1/2 w-full'>
                <img
                    className='rounded-lg w-full object-cover max-w-full'
                    src="https://i.ibb.co/PsqB9Rkz/car-dealer-presenting-new-car-customer.jpg"
                    alt="Team at ParkIn"
                />
            </div>
            <div className='lg:w-1/2 w-full'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Providing <span className='text-yellow-500'> Best Services</span><br />To Our Customers
                </h2>
                <p className='text-gray-600 mb-6'>
                    At FixNpark, we are committed to delivering smart, efficient, and secure parking solutions tailored to urban lifestyles. Our mission is to simplify your parking experience using modern technology and customer-centric service.
                </p>
                <div className='flex items-center gap-4 mb-4'>
                    <img
                        className='w-12 h-12 rounded-full object-cover'
                        src="https://i.ibb.co.com/k28vM4ZW/young-bearded-man-with-striped-shirt.jpg"
                        alt="CEO"
                    />
                    <div>
                        <p className='font-semibold text-gray-800'>Chris Hemsworth</p>
                        <p className='text-sm text-gray-500'>Founder & CEO FixNpark</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-900 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200'>
                        Our Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;
