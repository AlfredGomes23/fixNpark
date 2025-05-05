import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Banner = () => {
    const [search, setSearch] = useState({})
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        setSearch(data);
    }

    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-[url('../../public/images/woman-choosing-car-car-showroom.jpg')] h-screen flex flex-col items-center justify-center text-white text-center px-4 mb-20">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* Main content */}
            <div className="relative z-10 text-container text-start w-11/12 mx-auto">
                <h3 className="text-4xl font-semibold">
                    Discover Convenient <span className="text-yellow-400">Parking Spaces</span><br /> Anytime, Anywhere
                </h3>
                <p className="mt-2 text-gray-200 text-2xl">
                    Whether you're heading to work, shopping downtown,<br /> or planning a night out...
                </p>
                <Link to="/parkings" className="btn btn-primary bg-blue-950 text-white mt-4 hover:bg-white hover:text-blue-950">
                    Find Parking Now
                </Link>
            </div>

        </div>

    );
};

export default Banner;