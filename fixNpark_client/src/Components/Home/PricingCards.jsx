import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$9.99/month",
    id: 1,
    description: "Best for occasional drivers who need affordable and reliable parking access.",
    features: [
      "Access to standard parking locations",
      "Up to 20 hours of parking per month",
      "Mobile app booking",
      "Real-time availability updates",
      "Basic customer support"
    ]
  },
  {
    name: "Premium Plan",
    price: "$24.99/month",
    popular: true,
    id: 2,
    description: "Ideal for daily commuters who want flexible and premium parking features.",
    features: [
      "Unlimited parking at participating locations",
      "Priority parking spots",
      "Advanced reservation access",
      "License plate recognition entry/exit",
      "Monthly usage analytics"
    ]
  },
  {
    name: "Business Plan",
    price: "$79.99/month",
    id: 3,
    description: "Designed for companies or teams that need managed, scalable parking for employees.",
    features: [
      "Includes 5 users (add more for $9.99/user)",
      "Dedicated business dashboard",
      "Team usage insights & analytics",
      "Reserved parking during business hours",
      "Multi-location access",
      "Custom invoicing & billing",
      "Priority customer support",
      "On-site signage and branding options"
    ]
  }
];

const PricingCards = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6 text-gray-800">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">Flexible Parking Plans</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best suits your lifestyle or business needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col justify-between p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition duration-300 ${
              plan.popular ? 'border-4 border-yellow-400 scale-105 z-10' : 'border border-gray-200'
            }`}
            style={{ minHeight: '300px' }}
          >
            <div>
              {plan.popular && (
                <div className="absolute -top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{plan.name}</h3>
              <p className="text-2xl font-extrabold text-indigo-900 mb-4">{plan.price}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

              <ul className="text-sm text-left space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5"></FaCheckCircle>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
              Choose {plan.name.split(" ")[0]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
