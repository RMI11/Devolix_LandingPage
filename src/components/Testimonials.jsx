import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = ({ language }) => {
  return (
    <div className='w-full h-full text-center my-44'>
            <h3 className='text-[#7B68EE]'>{language === "EN" ? 'Our Clients Feedback' : 'Ocene Naših Klijenata'} </h3>
            <h1>{language === "EN" ? "Don't just take our word for it" : 'Ne Verujte Samo Nama Na Reč'}</h1>
        <TestimonialsCard />
    </div>
  )
}

export default Testimonials