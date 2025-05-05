import React from 'react';

const teamMembers = [
  {
    name: 'James Mason',
    title: 'Founder and CEO',
    image: 'https://i.ibb.co.com/5xs45j4w/young-bearded-man-with-striped-shirt.jpg', 
  },
  {
    name: 'Jack Grayson',
    title: 'Co-Founder',
    image: 'https://i.ibb.co.com/HDSF759N/portrait-smiling-blonde-woman.jpg',
  },
  {
    name: 'Hudson Robert',
    title: 'Managing Director',
    image: 'https://i.ibb.co.com/MxdhgJzY/young-businesswoman-holding-digital-tablet-mobile-phone.jpg',
  },
  {
    name: 'Jameson Miles',
    title: 'Sales and Marketing',
    image: 'https://i.ibb.co.com/dJf0jMrt/handsome-attractive-young-european-man-casual-shirt-with-dark-hair-blue-eyes-keeping-arms-folded-con.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="text-center py-12 px-4">
      <p className="text-sm text-blue-600 font-medium mb-2">Team Members</p>
      <h2 className="text-3xl font-bold mb-10">Our Parkin Management</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-blue-600 text-sm">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
