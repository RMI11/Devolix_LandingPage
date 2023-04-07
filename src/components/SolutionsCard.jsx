import React from 'react'
import Button from '../constants/button'
import { content } from '../Content'

const SolutionsCard = ({ language }) => {
    const { solutions } = content

  return (
        <div className='w-full'>
      <div className='w-[80%] mx-auto h-full flex flex-wrap justify-center '>
        {solutions.map((item, i) => (
        <div className='max-w-[30%] px-[30px] py-[35px] text-center rounded-[3px] mt-[30px] mx-[20px] shadow-[5px_7px_15px_2px_rgb(82,90,101,12)] transition-all duration-500 ease-out hover:-translate-y-4'>
                <>
                <div><img src="" alt="" /></div>
                {language === "EN" ?
                <>
                  <h3 className='mb-3'>{item.title}</h3>
                  <p>{item.desc}</p>
                </>
                :
                <>
                  <h3 className='mb-3'>{item.titleSr}</h3>
                  <p>{item.sr}</p>
                </>
                }
                <Button uniqueStyle={`bg-blue-600 mt-6`} buttonText={language === "EN" ? `More Details` : 'Više Detalja'} />
                </>
        </div>
        ))}
    </div>
        </div>
  )
}

export default SolutionsCard