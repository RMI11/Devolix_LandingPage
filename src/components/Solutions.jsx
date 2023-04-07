import React from 'react'
import SolutionsCard from './SolutionsCard'

const Solutions = ({ language }) => {
  return (
    <div id="solutions" className='w-full h-full text-center'>
          <h3 className='text-[#7B68EE]'>{language === "EN" ? 'What We Provide' : 'Koje usluge pružamo'}</h3>
          <h1>{language === "EN" ? 'IT Solutions' : 'IT Rešenja'}</h1> 
        <SolutionsCard language={language} />
    </div>
  )
}

export default Solutions