import React from 'react'

const ClientReviews = () => {

    const testimonials = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 16h10M5 12h14M12 20h.01M12 4h.01"
        />
      </svg>
    ),
    text: "Working with this team was an absolute pleasure. They delivered on time and exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    profession: "Designer",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 16h10M5 12h14M12 20h.01M12 4h.01"
        />
      </svg>
    ),
    text: "Their development skills are top-notch. Really satisfied with the results and communication.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Smith",
    profession: "Developer",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 16h10M5 12h14M12 20h.01M12 4h.01"
        />
      </svg>
    ),
    text: "Professional and creative approach. Highly recommended for design and branding projects.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "David Wilson",
    profession: "UI/UX Designer",
  },
];


  return (
    

    
    
    
       <div className="w-full">
             <div className="w-[60%] mx-auto py-15">
               {/* Heading Section */}
               <div className="text-center">
                 <h1 className="text-[30px] font-semibold">Choose Your Plan</h1>
                 <div className="w-[90px] h-[3px] bg-[#d9326f] my-3 mx-auto"></div>
                 <p className="text-center w-[70%] mx-auto pb-5">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                   laboriosam quisquam, nobis suscipit placeat accusamus. Odit odio
                   enim repudiandae maiores?
                 </p>
               </div>
       
               {/* Team Cards */}
  <div className="w-full mx-auto flex gap-x-6">
  {testimonials.map((item) => (
  <div
  key={item.id}
  className="bg-white mt-10 rounded-2xl p-6 flex-1 flex flex-col items-center text-center"
  style={{
    boxShadow: "0 0 10px #d9326f" // equal shadow from all sides
  }}
>

      {/* Icon */}
      {item.icon}

      {/* Paragraph */}
      <p className="text-gray-600 text-sm mb-6">{item.text}</p>

      {/* Client Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-14 h-14 rounded-full mb-3"
      />

      {/* Name */}
      <h3 className="text-lg font-semibold">{item.name}</h3>

      {/* Profession */}
      <p className="text-sm text-gray-500">{item.profession}</p>
    </div>
  ))}
</div>

    
    
    
             </div>
           </div>
      )
    }
    



export default ClientReviews