import React from 'react'
import Image from 'next/image'
import financial from '../../../public/financial.svg'
import financialhover from '../../../public/financialhover.svg'
import decisionHover from '../../../public/decisionHover.svg'
import decision from '../../../public/decision.svg'
import growthTrackingHover from '../../../public/growthTrackingHover.svg'
import growthTracking from '../../../public/growthTracking.svg'
import tradingMission from '../../../public/tradingMission.svg'
import tradingMissionHover from '../../../public/tradingMissionHover.svg'
import planningStrategyHover from '../../../public/planningStrategyHover.svg'
import planningStrategy from '../../../public/planningStrategy.svg'
import successfullMarketing from '../../../public/successfullMarketing.svg'
import successfullMarketingHover from '../../../public/successfullMarketingHover.svg'

const OfferingsSection = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='w-[60%] mx-auto py-[60px]'>
        
        {/* Heading */}
        <div className='flex gap-x-4 justify-start items-center'>
          <h1 className='text-[35px] font-semibold w-[80%]'>What We Are Offering</h1>
          <div className='w-[10px] h-[100px] bg-[#d9326f]'></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, porro? 
            Itaque dignissimos, reiciendis ipsum doloribus veritatis amet architecto 
            placeat odio eos quidem blanditiis inventore iusto consequuntur ab nemo vitae 
            corporis rem. Fuga eum rerum, ab dolorum.
          </p>
        </div>

        {/* Offer Card */}
        <div className='mt-10 grid grid-cols-3 gap-6'>




          <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px]  relative'>
              <Image 
                src={financial} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={financialhover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Financial Analytics</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300 text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>


    <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px] relative'>
              <Image 
                src={decision} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={decisionHover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Take Better Decisions</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>

    <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px]  relative'>
              <Image 
                src={growthTracking} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={growthTrackingHover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Growth Tracking</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>


    <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px]  relative'>
              <Image 
                src={tradingMission} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={tradingMissionHover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Trading Missions</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>    <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px]  relative'>
              <Image 
                src={planningStrategy} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={planningStrategyHover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Planning Strategies</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>    <div className='bg-white px-6 py-10 rounded-lg shadow-md flex flex-col items-center text-center 
                          group transition-all duration-300 hover:shadow-xl  hover:bg-[#d9326f] '>

            {/* Icon with hover effect */}
            <div className='w-[50px] h-[50px]  relative'>
              <Image 
                src={successfullMarketing} 
                alt='Financial' 
                fill
                className='object-contain transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image 
                src={successfullMarketingHover} 
                alt='Financial Hover' 
                fill
                className='object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
              />
            </div>

            {/* Text */}
            <h2 className='text-black font-semibold mt-4 group-hover:text-white'>Successfull Marketing</h2>
            <p className='text-gray-600 text-[14px] mt-2 group-hover:text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, atque!
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OfferingsSection
