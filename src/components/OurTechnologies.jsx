import React from 'react'
import { content } from '../Content'

const OurTechnologies = ({ language }) => {
    const { technologies } = content;

  return (
    <div className='text-center mt-20'>
                <h1>{language === "EN" ? 'Our Technologies' : 'Naše Tehnologije'}</h1>
                <p>{language === "EN" ? 
                        'Our software engineers have expertise in all the technologies needed to deliver comprehensive web developments services for companies across industries.'
                    :
                        'Naši softverski inženjeri imaju stručnost u svim tehnologijama potrebnim za pružanje sveobuhvatnih usluga razvoja weba za kompanije u različitim industrijama.'
                    }
                </p>
        <div className='flex px-32 py-10 justify-center flex-wrap'>
            {technologies.map((item, i) => (
                <div className='w-[130px] h-[130px] m-8  '>
                    <div><img className='w-[80px] h-[80px] mx-auto' src={item.icon} alt="" /></div>
                    <div className='mt-8'><p>{item.title}</p></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurTechnologies