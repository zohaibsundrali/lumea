import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
 import phonevolume from '../../../public/phone-volume.svg';
 import location from '../../../public/location.svg';
 import alarm from '../../../public/alarm.svg';
 import logo from '../../../public/logo.svg';
 import search from '../../../public/search.svg';
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
    
       {/* Top Bar */}
       <div className='w-full'> 
           <div className=' w-[60%] mx-auto flex justify-between py-5'>

            {/* Left Side  Top Bar  */}
            <div className='flex gap-x-5'>
                <div className='flex justify-between items-center gap-x-3'>
                    <div>
                     
                         <Image src={phonevolume} width={40} height={40} alt='Phone'/>
                     
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-sm'>Call Now</p>
                        <p className='text-black font-semibold text-[14px]'>182 392 382</p>
                    </div>
                </div>
                <div className='h-[70%] w-[1px] bg-red-600 mt-[4px]'></div>
                 <div className='flex justify-between items-center gap-x-3'>
                    <div>
                        
                        <Image src={location} width={35} height={35} alt='Phone'/>
                        
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-sm'>Location</p>
                        <p className='text-black font-semibold text-[14px]'>Lahore,Pakistan</p>
                    </div>
                </div>
                  <div className='h-[70%] w-[1px] bg-red-600 mt-[4px]'></div>
              <div className='flex justify-between items-center gap-x-3'>
                    <div>
                  
          <Image src={alarm} width={35} height={35} alt='Phone'/>
          
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-sm'>Office Hours</p>
                        <p className='text-black font-semibold text-[14px]'>9:00am - 5:00pm (Sunday Closed) </p>
                    </div>
                </div>
            </div>

            {/* Right Side Top Bar  */}
            <div className='flex justify-between items-center gap-x-3'>

       <a href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{ color: '#d9326f' ,fontSize:'20px'}} />
      </a>
      <a href="https://twitter.com" target="_blank">
        <FontAwesomeIcon icon={['fab', 'twitter']} style={{ color: '#d9326f',fontSize:'20px' }} />
      </a>
      <a href="https://pinterest.com" target="_blank">
        <FontAwesomeIcon icon={['fab', 'pinterest']} style={{ color: '#d9326f' ,fontSize:'20px'}} />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{ color: '#d9326f',fontSize:'20px' }} />
      </a>

            </div>
           </div>
       </div>
       {/* Navbar Menu */}
       <div className='w-full bg-[#d9326f]'> 
       <div className=' w-[60%] mx-auto flex justify-between py-5'>
          <div className='flex items-center gap-x-1 '>
            <a href=""><Image src={logo} width={40} height={40} alt='Logo'/></a>
            <h2 className='text-xl text-white font-semibold cursor-pointer uppercase'>Lumea</h2>
          </div>
          <div className='flex items-center gap-x-5'>
              <Link href='' className='text-[12px] text-white font-semibold '>Home</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>About</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>Services</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>Projects</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>Gallery</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>Pages</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>News</Link>
              <Link href='' className='text-[12px] text-white font-semibold '>Contact</Link>
                  <a href=""><Image src={search} width={20} height={20} alt='Search'/></a>
          </div>

</div>
</div>
    </>
  )
}

export default Navbar