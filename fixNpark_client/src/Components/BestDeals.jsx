// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';

import axios from "axios";
import { useEffect, useState } from 'react';


const BestDeals = () => {
    const [deals, setDeals] = useState([]);
    // axios.get('').then(()=> console.log(data));
    useEffect(() => {
        fetch("deals.json").then(d => d.json()).then(d => setDeals(d))
    }, [])

    // console.log(deals);

    return (
        <div className="bg-fixed bg-[url('../../public/images/deals-bg.png')] bg-opacity-75 inset-0 z-10 w-full bg-no-repeat bg-cover h-[80vh]">
            <Swiper
                slidesPerView={'3'}
                centeredSlides={true}
                spaceBetween={75}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Navigation]}
                className="mySwiper"
            >   {
                    deals.map(deal =>
                        <SwiperSlide key={deal._id}>
                            <div className="w-96 glass p-5 rounded-md">

                                <h2 className="underline text-primary">{deal.serviceName}</h2>

                                <p className='indicator text-left my-4 text-acc'>from: {deal.providerName}
                                    <span className="indicator-item badge badge-secondary">{deal.discount} OFF</span></p>

                                <p className="text-right">Ends: <span className='text-secondary'>{deal.validity}</span></p>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default BestDeals;