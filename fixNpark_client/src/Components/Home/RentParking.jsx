import { FaArrowRight } from "react-icons/fa";
import React from "react";


const RentParking = () => {
    const steps = [
        {
            id: '1',
            img: 'https://i.ibb.co.com/R4dchyMW/Serving2.jpg',
            title: 'Create Your Listing',
            desc: 'Enjoy 24/7 surveillance and secure entry points for your peace of mind.',
        },
        {
            id: '2',
            img: 'https://i.ibb.co.com/ZzzYr6hs/Serving1.jpg',
            title: 'Drivers Book Your Space',
            desc: 'Check live parking availability before you even leave home.',
        },
        {
            id: '3',
            img: 'https://i.ibb.co.com/8DDs1Ybg/serving4.jpg',
            title: 'Start Earning Now',
            desc: 'Pay through your favorite app or card in just a few taps.',
        },
    ];

    return (
        <div className='w-11/12 mx-auto mb-16'>
            <h5 className='text-black text-base font-medium pb-2 text-center'>
                Rent Our Space For Parking
            </h5>
            <h2 className='text-blue-800 text-2xl font-semibold text-center'>
                How To Rent Your Space
            </h2>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-4 mt-10'>
                {steps.map((card, index) => (
                    <React.Fragment key={index}>
                        {/* Card */}
                        <div className='relative card  w-[300px] text-center'>
                            <figure className='relative flex justify-center overflow-visible'>
                                <img
                                    className='w-[200px] h-[200px] rounded-full border border-dashed p-2'
                                    src={card.img}
                                    alt={card.title}
                                />
                                <div className='absolute -top-4 bg-blue-800 text-white rounded-full px-4 py-2 text-sm font-bold shadow-md z-10'>
                                    {card.id}
                                </div>
                            </figure>
                            <div className='card-body text-center'>
                                <h2 className='text-xl font-semibold text-center'>{card.title}</h2>
                                <p className='text-center'>{card.desc}</p>
                            </div>
                        </div>

                        {/* Arrow between cards (except last) */}
                        {index < steps.length - 1 && (
                            <div className='hidden lg:flex items-center justify-center'>
                                <FaArrowRight className='text-blue-700 w-14 h-20 '></FaArrowRight>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default RentParking;
