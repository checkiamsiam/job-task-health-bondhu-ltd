import React from 'react';
import cardioLogo from '../../../assets/medical-icon_i-cardiology.png'

const Services = () => {
  return (
    <div className='lg:px-32 md:px-20 sm:px-10 px-5 mt-10'>
      <div className='text-center'>
        <h1 className='text-secondary text-xl'>Our Services</h1>
        <p className='text-accent text-4xl'>Services For Your Health</p>
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
        <div className='bg-base-100 rounded-lg p-3'>
          <div className='flex justify-between mb-3'>
            <h1 className='text-accent font-semibold'>Cardiology</h1>
            <img src={cardioLogo} alt="" />
          </div>
          <p className='text-neutral'>
          Seduahag perspiciati under omnised atused error.
          </p>
          <button className='text-accent text-2xl font-semibold  mt-4'>Explore Now</button>
        </div>
        <div className='bg-base-100 rounded-lg p-3'>
          <div className='flex justify-between mb-3'>
            <h1 className='text-accent font-semibold'>Monthly Check Up</h1>
            <img src={cardioLogo} alt="" />
          </div>
          <p className='text-neutral'>
          Seduahag perspiciati under omnised atused error.          </p>
          <button className='text-accent text-2xl font-semibold  mt-4'>Explore Now</button>
        </div>
        <div className='bg-base-100 rounded-lg p-3 md:border-2 md:border-primary'>
          <div className='flex justify-between mb-3'>
            <h1 className='text-accent font-semibold'>Dental Care</h1>
            <img src={cardioLogo} alt="" />
          </div>
          <p className='text-neutral'>
          Seduahag perspiciati under omnised atused error.
          </p>
          <button className='text-2xl font-semibold   mt-4 md:text-primary text-accent '>Explore Now</button>
        </div>
        <div className='bg-base-100 rounded-lg p-3'>
          <div className='flex justify-between mb-3'>
            <h1 className='text-accent font-semibold'>Opthalmology</h1>
            <img src={cardioLogo} alt="" />
          </div>
          <p className='text-neutral'>
          Seduahag perspiciati under omnised atused error.
          </p>
          <button className='text-accent text-2xl font-semibold  mt-4'>Explore Now</button>
        </div>
        
      </div>
    </div>
  );
};

export default Services;