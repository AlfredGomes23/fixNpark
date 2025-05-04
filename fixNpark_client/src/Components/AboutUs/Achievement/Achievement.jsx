import React from 'react';
import { Users, Car, Globe, Warehouse } from 'lucide-react';

const Achievement = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 bg-fixed bg-[url('../../public/images/rent-out.avif')]"
             
        >
           
            <div className="absolute inset-0 bg-blue-900 opacity-60 z-10"></div> 

            
            <div className="relative z-20 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">FixNpark Achievement Great Statistics</h2>
                <p className="mb-6 max-w-2xl mx-auto text-gray-200">
                    ParkIn has served over 5,000 users, secured 1,200+ parking locations, maintained 99.9% uptime, and achieved 4.8★ average ratings across platforms—empowering smart, stress-free urban parking daily.
                </p>
                <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-blue-900 transition">
                    View Our Services
                </button>

             
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
                    <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 mb-2" />
                        <h3 className="text-2xl font-semibold">5,000+</h3>
                        <p className="text-gray-300">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Car className="w-8 h-8 mb-2" />
                        <h3 className="text-2xl font-semibold">7,200</h3>
                        <p className="text-gray-300">Parking Per Day</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Globe className="w-8 h-8 mb-2" />
                        <h3 className="text-2xl font-semibold">283</h3>
                        <p className="text-gray-300">Global Branches</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Warehouse className="w-8 h-8 mb-2" />
                        <h3 className="text-2xl font-semibold">1,200+</h3>
                        <p className="text-gray-300">Parking Spaces</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;
