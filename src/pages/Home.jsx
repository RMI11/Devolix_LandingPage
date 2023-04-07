import React, { useState } from 'react'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import OurTechnologies from '../components/OurTechnologies'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'

const Home = ({ language ,setLanguage }) => {

  return (
    <>
    <div className='flex absolute top-5 right-10 z-50 text-white font-bold'>
      <button onClick={()=>setLanguage("EN")}>EN</button>
      <p> / </p>
      <button onClick={()=>setLanguage("SR")}>SR</button>
    </div>
    <div>
    <Hero language={language} />
    <Solutions language={language} />
    <Services language={language} />
    <AboutUs language={language} />
    <WhyUs language={language} />
    <OurTechnologies language={language} />
    <Testimonials language={language} />
    <ContactUs language={language} />
    <Footer />
    </div>
    </>
  )
}

export default Home