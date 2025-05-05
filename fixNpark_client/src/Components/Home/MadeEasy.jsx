
const MadeEasy = () => {
    return (
        <div className='w-11/12 mx-auto  mb-16'>
            <h5 className='text-gray-800 text-base font-medium pb-2 text-center'>Why Choose fixNpark</h5>
            <h2 className='text-blue-950 text-3xl font-semibold text-center'>Parking Made Easy</h2>

            <div className='w-10/11  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 '>
                {[
                    {
                        img: "https://i.ibb.co.com/Mxb7mvXC/made-Easy3.jpg",
                        title: "Secure Parking",
                        desc: "Enjoy 24/7 surveillance and secure entry points for your peace of mind."
                    },
                    {
                        img: "https://i.ibb.co.com/YBCxT6X7/made-Easy2.jpg",
                        title: "Real-Time Availability",
                        desc: "Check live parking availability before you even leave home."
                    },
                    {
                        img: "https://i.ibb.co.com/1fDcCnHY/made-Easy1.jpg",
                        title: "Easy Payments",
                        desc: "Pay through your favorite app or card in just a few taps."
                    }
                ].map((card, index) => (
                    <div key={index} className="card bg-base-100 shadow-sm w-full">
                        <figure>
                            <img src={card.img} alt={card.title} />
                        </figure>
                        <div className="card-body space-y-1">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.desc}</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary rounded-full hover:bg-white hover:text-blue-900 bg-blue-950 text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MadeEasy;
