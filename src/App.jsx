import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
i


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our programs'  title='What we offer'/>
        <Programs/>   {/*programs was put in div so the container class can be addeded to all its program*/}
        <About/>
      </div>

      
      
    </div>
  )
}

export default App

