import React from 'react'
import About from '../components/HomeComponents/About'
import Hero from '../components/HomeComponents/Hero'
import Statistics from '../components/HomeComponents/Statistics'
import Navbar from '../components/shared/Navbar'

export default function Home() {
  return (
    <div>
        <div className='h-screen bg-hero text-white'>
            <div className='fixed top-0 w-full'>
                <Navbar />
            </div>
            <Hero />
        </div>
        <About />
        <Statistics />
    </div>
  )
}
