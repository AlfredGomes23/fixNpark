import { FaRegCalendarCheck, FaClock, FaPiggyBank, FaParking } from "react-icons/fa";

const WhyChooseFixNpark = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-[url('../../public/images/Choose3.jpg')] relative h-[80vh] mb-40">
    
      <div className="absolute  bg-sky-200 opacity-30 rounded-2xl"></div>

     
      <div className="absolute -bottom-20 right-0 w-[45%] p-8 bg-sky-700 bg-opacity-90  shadow-lg space-y-6 pb-10">
        <h2 className="text-3xl font-bold text-white">Why Choose FixNpark</h2>
        <p className="text-white">
          We provide the most reliable and efficient parking solutions tailored to your convenience and needs.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div className="flex flex-col items-start space-y-2 text-white">
            <FaRegCalendarCheck className="text-3xl " />
            <h4 className="text-xl font-semibold">Stress-free Booking</h4>
            <p className=" text-sm">
              Book your parking spot in seconds, no hassle, no stress.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-2 text-white">
            <FaClock className="text-3xl " />
            <h4 className="text-xl font-semibold">24/7 Service</h4>
            <p className="text-sm">
              Round-the-clock support and access whenever you need it.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-2 text-white">
            <FaPiggyBank className="text-3xl " />
            <h4 className="text-xl font-semibold">Save Money & Time</h4>
            <p className=" text-sm">
              Affordable options that save you both time and cash.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-2 text-white">
            <FaParking className="text-3xl " />
            <h4 className="text-xl font-semibold">Best Parking Management</h4>
            <p className=" text-sm">
              Smart, optimized parking with real-time monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhyChooseFixNpark;
