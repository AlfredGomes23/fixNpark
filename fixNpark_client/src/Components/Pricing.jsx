import { useEffect, useState } from "react";

const Pricing = () => {
    const pricingPlans = [
        {
            name: "Basic Plan",
            price: "2500BDT/month",
            features: ["Single Parking", "Monthly Subscriptions", "Weekly Maintenance"]
        },
        {
            name: "Pro Plan",
            price: "1500BDT/month",
            features: ["Repair Services", "Insurance Services", "Bulk Parking"]
        },
        {
            name: "Enterprise Plan",
            price: "Contact Us",
            features: ["Custom Solutions", "Dedicated Support", "Priority Parking"]
        }
    ];

    const [pricings, setPricings] = useState([]);

    useEffect(()=>{
        fetch("").then().then()
    },[])

    return (
        <section className="py-16 bg-gray-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                    {
                        pricingPlans.map((plan, index) => (
                            <div key={index} className="p-6 bg-violet-700 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                <p className="text-2xl font-bold mt-4">{plan.price}</p>
                                <ul className="mt-6 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="text-gray-300">• {feature}</li>
                                    ))
                                    }
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
export default Pricing;