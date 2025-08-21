import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <div className="hero flex items-center justify-center">
      <div className='relative w-[60%] mx-auto z-10'>
        <div className=' text-white  px-10 w-[100%] text-justify rounded flex justify-center items-center'>
                 <div className='text-center'>
                      <h1 className='text-[45px] font-bold'>About Us</h1>
                  <p>Home/About</p>
                 </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
