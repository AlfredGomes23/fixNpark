// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
import ServicesList from '../Components/ServicesList';
import ContactUsSection from '../Components/ContactUS';


const Services = () => {
    return (
        <div>
            <div className='my-5'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="../../public/images/services (1).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/images/services (2).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/images/services (3).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/images/services (4).jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <ServicesList></ServicesList>
            <ContactUsSection></ContactUsSection>
        </div>
    );
};

export default Services;