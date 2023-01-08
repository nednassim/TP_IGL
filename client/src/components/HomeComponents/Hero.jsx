import React from 'react'

export default function Hero() {
  return (
      <div className='pt-32'>
        <div className="pl-28 pt-56">
            <p className="text-5xl leading-normal">Reserve your dream estate. <br />Anytime, anywhere.</p>
            <div className="mt-8 flex gap-x-8">
            <a href='#' className='rounded-full bg-blue-igl py-4 px-16 text-4xl font-medium'>Buy</a>
            <a href='#' className='rounded-full border-white border-4 py-4 px-16 text-4xl font-medium'>Rent</a>
            </div>
        </div>
      </div>
  )
}
