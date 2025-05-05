
const ServingArea = () => {
    return (
        <div className='w-11/12 mx-auto  mb-16'>
            <h5 className='text-gray-800 text-base font-medium pb-2 text-center'>Our Presence</h5>
            <h2 className='text-blue-800 text-3xl font-bold text-center'>Area We Serving</h2>

            <div className='w-10/11  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 '>
                {[
                    {
                        img: "https://i.ibb.co.com/R4dchyMW/Serving2.jpg",
                        title: "Commercial Property",

                    },
                    {
                        img: "https://i.ibb.co.com/ZzzYr6hs/Serving1.jpg",
                        title: "Hotels & Hospitality",

                    },
                    {
                        img: "https://i.ibb.co.com/8DDs1Ybg/serving4.jpg",
                        title: "Operators & Enforces",

                    }
                ].map((card, index) => (
                    <div key={index} className="card bg-base-200 shadow-sm w-full">
                        <figure>
                            <img className='w-[400px] h-[250px]' src={card.img} alt={card.title} />
                        </figure>
                        <div className="card-body bg-gray-100 ">
                            <div className='border-l-2 border-blue-700 pl-4 space-y-2'>
                                <h2 className="card-title">{card.title}</h2>
                                <div className="card-actions justify-start">
                                    <button className=" py-1 px-4 btn btn-primary rounded-full bg-white text-blue-900 hover:bg-blue-950 hover:text-white">Learn More</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServingArea;