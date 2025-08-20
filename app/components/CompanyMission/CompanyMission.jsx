import React from 'react'
import Image from 'next/image'
const CompanyMission = () => {
  return (
   <div className="w-full h-[100%]  py-[40px] flex items-center bg-[#d9326f] text-white">
         <div className="w-[60%] mx-auto flex gap-x-6  my-10">
           
           {/* Left Side */}
           <div className="w-[50%]">
             <div className="relative w-full h-full">
               <Image
                 src="https://images.pexels.com/photos/9301292/pexels-photo-9301292.jpeg"
                 alt="Team Work"
                 fill
                 className="object-cover rounded"
               />
             </div>
           
           </div>
   
           {/* Right Side */}
           <div className="flex-1 ">
             <h1 className="text-[37px] text-white font-bold">
               Our Company Mission and Vision
             </h1>

             <div className="w-[90px] h-[3px] bg-white my-3"></div>
             <p className="mb-3 text-[15px] text-justify">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id
               natus asperiores adipisci laboriosam praesentium dolorem facilis
               quasi laudantium nemo minima porro rem quia, quos illum dolore
               expedita amet numquam, quo repellendus. Cum tenetur architecto
               officiis at aspernatur vero sapiente!
             </p>
            
         <div className="flex items-center gap-2 cursor-pointer group">
  {/* Icon with circle background */}
  <div className="p-3 rounded-full bg-white flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#d9326f]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>

  {/* Text */}
  <span className="text-white  text-[14px] font-medium transition">
    See Live Demo
  </span>
</div>

           </div>
         </div>
       </div>
  )
}

export default CompanyMission