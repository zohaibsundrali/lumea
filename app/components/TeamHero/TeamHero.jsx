import Image from "next/image";
import './TeamHero.css'
const TeamHero = () => {
    
const teamData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    number: "01",
    description: "Frontend Developer",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    number: "02",
    description: "Backend Developer",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    number: "03",
    description: "UI/UX Designer",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    number: "01 ",
    description: "Senoir Frontend Developer",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    number: "02",
    description: "Senoir Backend Developer",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    number: "03",
    description: "Senoir UI/UX Designer",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    number: "01",
    description: "Senoir DevoOps",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    number: "02",
    description: "Senoir  Developer",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    number: "03",
    description: "Full Stack Developer",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    number: "01",
    description: "Devops Engenier",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    number: "02",
    description: "Backend Developer",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    number: "03",
    description: "UI/UX Designer",
  },
  // ...continue until 12 members
];
  return (
    <>
      <div className="hero flex items-center justify-center">
      <div className='relative w-[60%] mx-auto z-10'>
        <div className=' text-white  px-10 w-[100%] text-justify rounded flex justify-center items-center'>
                 <div className='text-center'>
                      <h1 className='text-[45px] font-bold'>Team</h1>
                  <p>Home/Team</p>
                 </div>
        </div>
      </div>
    </div>

        <div className="w-full py-10">
      {/* Parent */}
      <div className="w-[60%] mx-auto">
        {/* Grid of 12 (3 per row) */}
        <div className="flex flex-wrap justify-between gap-y-6">
          {teamData.map((member) => (
            <div key={member.id} className="w-[32%]">
              <div className="relative w-full h-[350px] group overflow-hidden rounded">
                <Image
                  src={member.image}
                  alt={member.description}
                  fill
                  className="object-cover"
                />
                {/* Hover Overlay */}
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
    </>
  )
}   

export default TeamHero