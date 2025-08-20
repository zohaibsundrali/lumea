"use client";
import React from "react";
import Image from "next/image";

const teamData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg",
    number: "24",
    description: "YEARS OF TRUST AND EXPERIENCE",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    number: "15",
    description: "DEDICATED TEAM MEMBERS",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    number: "50+",
    description: "SUCCESSFUL PROJECTS COMPLETED",
  },
];

const TeamMembers = () => {
  return (
    <div className="w-full">
      <div className="w-[60%] mx-auto py-15">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-[30px] font-semibold">Meet Our Team Members</h1>
          <div className="w-[90px] h-[3px] bg-[#d9326f] my-3 mx-auto"></div>
          <p className="text-center w-[70%] mx-auto pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            laboriosam quisquam, nobis suscipit placeat accusamus. Odit odio
            enim repudiandae maiores?
          </p>
        </div>

        {/* Team Cards */}
        <div className="w-full mx-auto flex gap-x-6">
          {teamData.map((member) => (
            <div key={member.id} className="w-[30%]">
              <div className="relative w-full h-[350px] group overflow-hidden rounded">
                <Image
                  src={member.image}
                  alt={member.description}
                  fill
                  className="object-cover"
                />
                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full bg-[#d9326f] opacity-90 
                                h-[110px] group-hover:h-full transition-all duration-500 flex flex-col justify-center items-center">
                  <h1 className="text-[55px] font-semibold text-white">
                    {member.number}
                  </h1>
                  <p className="text-white text-[16px]">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
