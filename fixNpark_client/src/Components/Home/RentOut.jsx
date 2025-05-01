import { Link } from "react-router-dom";


const RentOut = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-[100vh] overflow-hidden bg-fixed bg-[url('../../public/images/rent-out.avif')] flex flex-col items-center pt-20 text-white text-center px-4 mb-16 z-0">
            <div className="text-container w-11/12 mx-auto text-center ">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 -z-10"></div>
                <h3 className="text-4xl font-semibold z-10">
                    Rent Out Driveway{' '}
                    <span className="text-yellow-400">
                        Parking
                        <br />
                        <span className="inline-block pt-2">Spaces or Garage</span>
                    </span>
                </h3>
                <Link to="/parkings" className="btn btn-primary bg-blue-950 text-white mt-4 hover:bg-white hover:text-blue-950">
                    Get Started Now
                </Link>
            </div>
        </div>
    );
};

export default RentOut;
