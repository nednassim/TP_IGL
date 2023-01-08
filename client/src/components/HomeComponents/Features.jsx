import React from 'react'

export default function Features() {
  return (
    <div className='flex justify-around my-32 mx-44'>
        <div className='flex flex-col gap-y-12 justify-around'>
            <div className='flex gap-x-4 items-center'>
                <img src="/icons/100.png" alt="100" />
                <div>
                    <p className='font-bold text-3xl'>high quality products</p>
                    <p className='mt-2 text-xl'>Lorem ipsum</p>
                </div>
            </div>
            <div className='flex gap-x-4 items-center'>
                <img src="/icons/tick.png" alt="100" />
                <div>
                    <p className='font-bold text-3xl'>Guarante</p>
                    <p className='mt-2 text-xl'>Lorem ipsum</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-y-12 justify-around'>
            <div className='flex gap-x-4 items-center'>
                <img src="/icons/kitman.png" alt="kitman" />
                <div>
                    <p className='font-bold text-3xl'>24/7 Support</p>
                    <p className='mt-2 text-xl'>Lorem ipsum</p>
                </div>
            </div>
            <div className='flex gap-x-4 items-center'>
                <img src="/icons/ticket.png" alt="kitman" />
                <div>
                    <p className='font-bold text-3xl'>Best Prices</p>
                    <p className='mt-2 text-xl'>Lorem ipsum</p>
                </div>
            </div>
        </div>
    </div>
  )
}
