import React from 'react'
import Image from 'next/image'

const BusinessSolutions = () => {
  return (
    <div className="w-full h-[100%]  py-[40px] flex items-center ">
      <div className="w-[60%] mx-auto flex gap-x-6 ">
        
        {/* Left Side */}
        <div className="w-[30%]">
          <div className="relative w-full h-[300px]">
            <Image
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg"
              alt="Team Work"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="bg-[#d9326f] py-2 text-center mt-0">
            <h1 className="text-[55px] font-semibold text-white ">24</h1>
            <p className="text-white text-[16px] ">
              YEARS OF TRUST AND EXPERIENCE
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 ">
          <h1 className="text-[47px] text-black font-bold">
            Creating Solutions For Your Business
          </h1>
          <div className="w-[90px] h-[3px] bg-[#d9326f] my-3"></div>
          <p className="mb-3 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id
            natus asperiores adipisci laboriosam praesentium dolorem facilis
            quasi laudantium nemo minima porro rem quia, quos illum dolore
            expedita amet numquam, quo repellendus. Cum tenetur architecto
            officiis at aspernatur vero sapiente!
          </p>
          <p className="mb-5 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            aliquam, nisi delectus amet laborum, inventore eaque perspiciatis
            eligendi consequatur iure maxime iste voluptatibus perferendis
            ipsum.
          </p>
          <button className="bg-white border border-[#d9326f] text-[#d9326f] px-6 py-3 text-[14px] rounded hover:bg-[#d9326f] hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BusinessSolutions
