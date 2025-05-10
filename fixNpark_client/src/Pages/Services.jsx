import OurServices from "../Components/Services/OurServices";
import RequestForm from "../Components/Services/RequestForm";
import ServiceBanner from "../Components/Services/ServiceBanner";
import ServiceSection from "../Components/Services/ServiceSection";





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