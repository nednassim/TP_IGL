import React from 'react'

export default function Statistics() {
  return (
    <div className='flex gap-x-52 justify-center my-16 px-52'>
        <div className='border-blue-igl border-l-2 pl-4'>
            <p className='font-bold text-3xl'>40+</p>
            <p className='mt-2 text-xl'>Happy Clients</p>
        </div>
        <div className='border-blue-igl border-l-2 pl-4'>
            <p className='font-bold text-3xl'>540+</p>
            <p className='mt-2 text-xl'>Projects Completed</p>
        </div>
        <div className='border-blue-igl border-l-2 pl-4'>
            <p className='font-bold text-3xl'>300</p>
            <p className='mt-2 text-xl'>Dedicated Members</p>
        </div>
        <div className='border-blue-igl border-l-2 pl-4'>
            <p className='font-bold text-3xl'>25+</p>
            <p className='mt-2 text-xl'>Awards Won</p>
        </div>
    </div>
  )
}
