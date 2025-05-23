import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className="bg-[#f5f9fc] pt-10 pb-20 px-4 relative -top-60">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">


                <div className="md:w-1/2 text-center  space-y-6 ">
                    <p className="text-blue-900 font-semibold text-3xl">3000+ Customers</p>
                    <h2 className="text-3xl font-bold text-gray-800">Words From Our Happy Customers</h2>

                    <div className="bg-white rounded-md shadow-lg p-6 md:p-8 absolute -bottom-50">
                        <div className="flex flex-col items-center space-y-4">

                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Reviewer"
                                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                            />
                            <div className="text-center">
                                <h4 className="font-bold text-lg">Micheal Johnson</h4>
                                <p className="text-gray-500 text-sm">Sydney, Australia</p>
                            </div>


                            <div className="flex justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400"></FaStar>
                                ))}
                            </div>


                            <p className="text-gray-600 text-center max-w-md">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi.
                            </p>


                            <div className="flex gap-4 mt-4">
                                <button className="border p-2 rounded hover:bg-gray-100 transition">
                                    <FaArrowAltCircleLeft className="w-5 h-5"></FaArrowAltCircleLeft>
                                </button>
                                <button className="border p-2 rounded hover:bg-gray-100 transition">
                                    <FaArrowAltCircleRight className="w-5 h-5"></FaArrowAltCircleRight>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://i.ibb.co.com/cqH7Qqg/review4.jpg"
                        alt="Happy Customer"
                        className="w-[300px] md:w-[380px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
