import React from 'react'
import Button from '../constants/button'
import { content } from '../Content'

const TestimonialsCard = ({ language }) => {
    const { testimonials } = content

  return (
        <div className='w-full mt-20'>
      <div className='w-[80%] mx-auto h-full flex flex-wrap justify-center '>
        {testimonials.map((item, i) => (
        <div className='max-w-[30%] px-[30px] py-[35px] text-left rounded-[3px] mt-[30px] mx-[20px] shadow-[5px_7px_15px_2px_rgb(82,90,101,12)] transition-all duration-500 ease-out hover:-translate-y-4'>
                <>
                  <div>
                    <div className='flex pb-4'>
                      <img className='w-16 rounded-full' src={item.img} alt="" />
                      <p className='m-4'>{item.name}</p>
                    </div>
                    <div>
                      <p>{item.comment}</p>
                    </div>

                  </div>
                </>
        </div>
        ))}
    </div>
        </div>
  )
}

export default TestimonialsCard