import SectionHeader from "../SectionHeader";

const CoreFeatures = () => {

    const features = [
        {
            "feature": "Personalized Parking",
            "description": "Tailored solutions for your parking needs, ensuring convenience and hassle-free management. Easily access, reserve, or manage parking spots right from your dashboard."
        },
        {
            "feature": "List Parking Spot",
            "description": "Monetize unused parking spaces by listing them for others. Share your spot securely and earn effortlessly through our platform."
        },
        {
            "feature": "Collaborated Maintenance Services",
            "description": "Partnered with trusted service providers to offer on-spot repairs and upkeep for your vehicle. Enjoy seamless maintenance scheduling and priority support."
        },
        {
            "feature": "Collaborated Insurances",
            "description": "Benefit from exclusive partnerships with top insurers to secure your vehicle. Compare policies, get the best deals, and ensure peace of mind."
        }
    ];

    return (
        <section className="pb-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <SectionHeader title={"Core Features"} subTitle={'Experience the Best – Key Features That Redefine Parking and Maintenance!'} color={"primary"}></SectionHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="p-4 w-96 mx-auto bg-violet-200 shadow-md rounded-md">
                                <h3 className="text-xl font-semibold">{feature.feature}</h3>
                                <p className="text-gray-700 text-base mt-2">
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default CoreFeatures;