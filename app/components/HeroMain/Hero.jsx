import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero flex items-center justify-center">
      <div className='relative w-[60%] mx-auto z-10'>
        <div className='bg-[#d9326f] text-white py-15 px-10 w-[50%] text-justify rounded'>
          <p className='text-[16px]'>SUCCESS YOUR BUSINESS</p>
          <h1 className='text-[40px] font-semibold'>Business Growth</h1>
          <p className='text-[13px] pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem ab illum dolorum veniam vitae sit iure quos facere repudiandae.
          </p>
          <div className="button flex justify-start gap-x-6">
            <button className='bg-white text-[#d9326f] px-4 py-3 text-[12px] rounded'>What We Do</button>
            <button className='bg-[#d9326f] text-white text-[12px] px-4 py-3 border border-white rounded hover:bg-white hover:text-[#d9326f]'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
