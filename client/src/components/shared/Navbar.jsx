import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center text-lg py-4 px-8'>
        <img src="/logo_white.png" alt="White Logo" />
        <div className='flex gap-x-8'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Offers</a>
            <a href='#'>New Estate</a>
        </div>
        <div className='flex gap-x-8'>
            <a href='#' className='rounded-full bg-blue-igl py-2 px-6'>Login</a>
            <a href='#' className='rounded-full border-white border-2 py-2 px-2'>Register</a>
        </div>
    </div>
  )
}
