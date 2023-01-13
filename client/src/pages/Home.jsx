import React, { useState } from 'react'
import About from '../components/HomeComponents/About'
import Features from '../components/HomeComponents/Features'
import Hero from '../components/HomeComponents/Hero'
import Statistics from '../components/HomeComponents/Statistics'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

export default function Home() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div>
        <div className='h-screen bg-hero text-white'>
            <div className='fixed top-0 w-full'>
                <Navbar colorChange={colorChange} />
            </div>
            <Hero />
        </div>
        <About />
        <Statistics />
        <Features />
        <Footer />
    </div>
  )
}
