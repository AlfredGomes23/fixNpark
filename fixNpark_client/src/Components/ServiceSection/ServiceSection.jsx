import React from 'react';

const services = [
  {
    title: "Self Parking",
    image: "https://i.ibb.co.com/v4Vzywv4/made-Easy3.jpg",
    icon: "\ud83c\udfe4",
  },
  {
    title: "Valet Parking",
    image: "https://i.ibb.co.com/cKWN3S6j/review.jpg",
    icon: "\ud83d\ude97",
  },
  {
    title: "Garage Parking",
    image: "https://i.ibb.co.com/4wYMHXz4/rent-out.jpg",
    icon: "\ud83d\udea7",
  },
  {
    title: "Airport Parking",
    image: "https://i.ibb.co.com/Z6Pf2hBD/made-Easy2.jpg",
    icon: "\u2708\ufe0f",
  },
  {
    title: "Monthly Parking",
    image: "https://i.ibb.co.com/tTFsdFb3/premium-photo-1658506860127-0b58ac45156c.jpg",
    icon: "\ud83d\uddd3\ufe0f",
  },
  {
    title: "Events Parking",
    image: "https://i.ibb.co.com/N29bqBV2/premium-photo-1661769938048-ae2a7b4a0144.jpg",
    icon: "\ud83c\udf1f",
  },
];

const ServiceCard = ({ title, image, icon }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Now
      </button>
    </div>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-blue-500 font-semibold text-sm">Parkin Services</h2>
      <h1 className="text-4xl font-bold mb-10">Our Parking Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;