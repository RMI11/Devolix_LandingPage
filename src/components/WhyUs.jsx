import React from 'react';
import whyUsImg from '../assets/whyUs.jpg';
import { content } from '../Content';

const WhyUs = ({ language }) => {
  const { whyUs } = content;

  return (
    <div className='flex flex-row-reverse justify-around p-32'>
        <div className='w-[40%]'>
        {language === "EN" ?
          <>
            <h3 className='text-[#7B68EE]'>Why Trust Us?</h3>
            <h1>{whyUs.title}</h1>
            <p className='mt-10'>{whyUs.desc}</p>
          </> 
        :
          <>
            <h3 className='text-[#7B68EE]'>Zašto Baš Mi?</h3>
            <h1>{whyUs.titleSr}</h1>
            <p className='mt-10'>{whyUs.descSr}</p>
          </>
        }
        </div>
        <div className='w-[45%] mt-3'>
            <img src={whyUsImg} alt="aboutUs image" />
        </div>
    </div>
  )
}

export default WhyUs