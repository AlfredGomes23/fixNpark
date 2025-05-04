
import ServicesList from '../Components/ServicesList';
import ContactUsSection from '../Components/ContactUS';
import ServiceSection from '../Components/ServiceSection/ServiceSection';
import RequestForm from '../Components/ServiceSection/RequestForm';
import OurServices from '../Components/ServiceSection/OurServices';
import ServiceBanner from '../Components/ServiceSection/ServiceBanner';


const Services = () => {
    return (
        <div>
        <ServiceBanner></ServiceBanner>
            <ServiceSection></ServiceSection>
            <RequestForm></RequestForm>
            <OurServices></OurServices>
        </div>
    );
};

export default Services;