import AboutUs from "../Components/AboutUs/AboutUs";
import CoreFeatures from "../Components/AboutUs/CoreFeatures";
import FAQ from "../Components/AboutUs/FAQ";
import Pricing from "../Components/Pricing";


const About = () => {
    return (
        <div>
            <CoreFeatures></CoreFeatures>
            <Pricing></Pricing>
            <AboutUs></AboutUs> 
            <FAQ></FAQ>
        </div>
    );
};

export default About;