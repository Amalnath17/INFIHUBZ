import React from 'react'
import First from '../first/first'
import HowItWorks from '../HowItWorks/HowItWorks'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <div className='landing'>
        <First/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default LandingPage