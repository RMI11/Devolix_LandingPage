import React from 'react';
import aboutImg from '../assets/about.jpg';
import { content } from '../Content';

const AboutUs = ({ language }) => {
  const { aboutUs } = content;
  return (
    <div id='aboutus' className='flex justify-around p-32'>
        <div className='w-[40%]'>
        {language === "EN" ?
          <>
            <h3 className='text-[#7B68EE]'>About Our Company</h3>
            <h1>{aboutUs.title}</h1>
            <p className='mt-10'>{aboutUs.desc}</p>
          </>
          :
          <>
            <h3 className='text-[#7B68EE]'>O Našoj Kompaniji</h3>
            <h1>{aboutUs.titleSr}</h1>
            <p className='mt-10'>{aboutUs.descSr}</p>
          </>
        }
        </div>
        <div className='w-[45%] mt-16'>
            <img src={aboutImg} alt="aboutUs image" />
        </div>
    </div>
  )
}

export default AboutUs