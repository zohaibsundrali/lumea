import React from 'react'
import growth from '../../../public/growth.svg';
import handShake from '../../../public/hand-shake.svg';
import questionHelp from '../../../public/question-help.svg';
import Image from 'next/image';
const WhyChooseUs = () => {
  return (
    <div className='w-full'>
        <div className='w-[80%]  ml-auto flex'>
            <div className='w-[40%]  pr-8'>
                  <h1 className="text-[37px] text-black font-bold">
            Why You Should Choose Business
          </h1>
          <div className="w-[90px] h-[3px] bg-[#d9326f] my-3"></div>
            <p className="mb-5 text-[15px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            aliquam, nisi delectus amet laborum, inventore eaque perspiciatis
            eligendi consequatur iure maxime iste voluptatibus perferendis
            ipsum.
          </p>
          <div>
            


<div className="flex items-center gap-4 my-2">
  {/* Icon circle */}
  <div className="w-[80px] h-[60px] bg-[#d9326f] rounded-full flex items-center justify-center">
    <Image
      src={growth}
      alt="Business Growth"
      width={35}
      height={35}
      className="rounded-full object-contain"
    />
  </div>

  {/* Text content */}
  <div>
    <h1 className="font-semibold text-black text-[16px]">Best Business Advices</h1>
    <p className="text-gray-500 text-[14px] leading-snug">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cumque consequatur.
    </p>
  </div>
</div>


<div className="flex items-center gap-4 my-3">
  {/* Icon circle */}
  <div className="w-[80px] h-[60px] bg-[#d9326f] rounded-full flex items-center justify-center">
    <Image
      src={handShake}
      alt="Business Growth"
      width={35}
      height={35}
      className="rounded-full object-contain"
    />
  </div>    

  {/* Text content */}
  <div>
    <h1 className="font-semibold text-black text-[16px]">Fast Salutions</h1>
    <p className="text-gray-500 text-[14px] leading-snug">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cumque consequatur.
    </p>
  </div>
</div>



<div className="flex items-center gap-4 my-2">
  {/* Icon circle */}
  <div className="w-[80px] h-[60px] bg-[#d9326f] rounded-full flex items-center justify-center">
    <Image
      src={questionHelp}
      alt="Business Growth"
      width={35}
      height={35}
      className="rounded-full object-contain"
    />
  </div>

  {/* Text content */}
  <div>
    <h1 className="font-semibold text-black text-[16px]">Life Time Support</h1>
    <p className="text-gray-500 text-[14px] leading-snug">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cumque consequatur.
    </p>
  </div>
</div>




          </div>
            </div>
            <div className="w-[60%]">
  <div className="w-full h-[450px] relative ">
    <Image
      src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg"    
      alt="Laptop"
      fill
      className="object-cover rounded-md"
    />
  </div>
</div>

        </div>
    </div>
  )
}

export default WhyChooseUs