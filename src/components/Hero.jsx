import React from 'react'
import herobg from '../assets/herobg.png'
import Button from '../constants/button'

const Hero = ({ language }) => {
  return (
    <div className='relative'>
        <img src={herobg} alt="background" className='w-full h-full object-cover' />
        <div className='w-[30vw] absolute left-[13%] top-[25%] font-bold text-white text-center'>
          <h2 className='pb-6'>{language === "EN" ?  'IT Solutions & Business Services Company' : 'IT Rešenja i Poslovne Usluge' }</h2>
          <p className=''>
            {language === "EN" ? 
                "Whether you’re an entrepreneur or the leader of a start-up or a large company, there will be important strategic goals tied to the success of your future digital product. The right web development partner should act as a guide and counselor throughout this crucial process. With us, you can be sure that the final product will meet expectations — yours and your customers." 
              : 
                'Bilo da ste preduzetnik ili vođa start-up-a ili velike kompanije, postojaće važni strateški ciljevi vezani za uspeh vašeg budućeg digitalnog proizvoda. Pravi partner za veb razvoj trebalo bi da deluje kao vodič i savetnik tokom ovog ključnog procesa. Sa nama možete biti sigurni da će finalni proizvod ispuniti očekivanja — vaša i vaših kupaca.'}</p>
          <div className='flex justify-center p-6'>
            <Button uniqueStyle={`bg-blue-600 hover:bg-gray-100 text-white hover:text-[#7B68EE] border-blue-400 hover:border-blue-700`} buttonText={language === "EN" ? `Contact Us` : 'Kontaktiraj Nas'} />
          </div>
        </div>
    </div>
  )
}

export default Hero