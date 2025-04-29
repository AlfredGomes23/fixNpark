import Banner from "../Components/Home/Banner";
import BestDeals from "../Components/BestDeals";
import Collaborators from "../Components/Home/Collaborators";
import FreeConsultation from "../Components/Home/FreeConsultation";
import RentOut from "../Components/Home/RentOut";
import RentParking from "../Components/Home/RentParking";
import ServingArea from "../Components/Home/ServingArea";
import MadeEasy from "../Components/Home/MadeEasy";
import Reviews from "../Components/Home/Reviews";
import SectionHeader from "../Components/SectionHeader";
import WhyChooseFixNpark from "../Components/Home/WhyChooseFixNpark";
import PricingCards from "../Components/Home/PricingCards";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MadeEasy></MadeEasy>
            <WhyChooseFixNpark></WhyChooseFixNpark>
            <ServingArea></ServingArea>
            <RentParking></RentParking>
            <RentOut></RentOut>
            <FreeConsultation></FreeConsultation>
            <Reviews></Reviews>
            <Collaborators></Collaborators>
            <PricingCards></PricingCards>
        </div>
    );
};

export default Home;