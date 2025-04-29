import SectionHeader from "../SectionHeader";



const AboutUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-24 py-0">
                <SectionHeader title={"About Us"} subTitle={"Revolutionizing Urban Parking and Repair Solutions"} color={"secondary"}></SectionHeader>
                <div className="flex flex-row gap-10">
                    <img src="../../public/images/aboutus.png" alt="" className="w-1/3" />
                    <p className="text-gray-600 w-2/3 mx-auto text-lg text-justify">
                        We are transforming urban mobility with our Smart Parking and Repair Service, addressing parking chaos and disconnected repair systems in Bangladesh. Our platform provides real-time parking availability, booking, and integrated repair solutions to save time and enhance convenience. By reducing traffic congestion and environmental impact, we aim to improve urban living. Key features include parking guidance, subscriptions, and insurance options. Our mission is to promote sustainability and create opportunities in smart city infrastructure.

                    </p>
                </div>
            </div>
        </section>
    );
};
export default AboutUs;