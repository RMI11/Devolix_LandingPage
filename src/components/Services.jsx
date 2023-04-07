import React from 'react'
import ServicesCard from './ServicesCard'

const Services = ({ language }) => {
  return (
    <div id="services" className='w-full h-full text-center my-32'>
          <h3 className='text-[#7B68EE]'>{language === "EN" ? 'What Are Your Needs' : 'Šta Vam je Potrebno?'}</h3>
          <h1>{language === "EN" ? 'IT Services' : 'IT Usluge'}</h1> 
        <ServicesCard language={language} />
    </div>
  )
}

export default Services