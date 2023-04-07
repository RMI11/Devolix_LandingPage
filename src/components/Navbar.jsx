import React from 'react';
import { content } from '../Content';

const Navbar = ({ language }) => {
    const { nav } = content
  return (
    <div className='absolute xs:text-xs ss:text-xs sm:text-base md:text-lg text-2xl w-full text-white pt-4 z-40 bg-[#2A1778]'>
        <div className='flex justify-around'>
            <div className='font-extrabold'>DEVOLIX</div>
            <div>
                {nav.map((item, i) => (
                        <a key={i} className='xs:p-2 ss:p-3 sm:p-3 md:p-3 p-8' href={item.link}>{language === "EN" ? item.text : item.sr }</a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar