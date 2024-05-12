import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>We ensure better education for better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with 
                the knowledge, skills, and experiences needed to excel in the dynamic
                field of education.
            </p>
            <button className='btn'>Explore<img src={arrow}/></button>
        </div>
      
    </div>
  )
}

export default Hero
