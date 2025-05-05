import AboutUsBanner from "../Components/AboutUs/AboutUsBanner/AboutUsBanner";
import Achievement from "../Components/AboutUs/Achievement/Achievement";
import FAQ from "../Components/AboutUs/FAQ";
import TeamSection from "../Components/AboutUs/TeamMember/TeamSection";


const About = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
           <Achievement></Achievement>
           <TeamSection></TeamSection>
            <FAQ></FAQ>
        </div>
    );
};

export default About;