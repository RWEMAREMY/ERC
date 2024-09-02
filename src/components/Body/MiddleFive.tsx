import React from 'react';
import cover from '../../assets/Images/cover.png'

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Fullname',
    role: 'CO Founder',
    imgSrc: cover,
  },
  {
    name: 'Fullname',
    role: 'Consultant',
    imgSrc: cover,
  },
  {
    name: 'Fullname',
    role: 'CEO',
    imgSrc: cover,
  },
];

const MiddleFive: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-500 mt-2">We are champions of participatory approaches to problem solving.</p>
      </div>
      <div className="flex justify-center mt-8 space-x-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleFive;
