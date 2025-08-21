import Image from 'next/image';
import React from 'react'

const ServicesCard = () => {
    
const teamData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    title: "Team Collaboration",
    description: "We work together to achieve great results."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    title: "Creative Ideas",
    description: "Innovation is at the heart of our teamwork."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg",
    title: "Problem Solving",
    description: "We solve challenges with smart teamwork."
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    title: "Efficiency",
    description: "Working together makes us faster and better."
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    title: "Communication",
    description: "Clear communication drives our success."
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg",
    title: "Leadership",
    description: "Strong leaders make teamwork smooth."
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
    title: "Trust",
    description: "Trust is the foundation of our collaboration."
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    title: "Commitment",
    description: "We stay dedicated to our shared goals."
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
    title: "Innovation",
    description: "Together we bring new ideas to life."
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    title: "Motivation",
    description: "We inspire each other to do our best."
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg",
    title: "Growth",
    description: "Teamwork helps us learn and grow."
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg",
    title: "Success",
    description: "Our teamwork leads to lasting success."
  },
];
  return (
   <div className="w-full bg-gray-100 py-10">
      <div className="w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300} height={150} 
              className="object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesCard