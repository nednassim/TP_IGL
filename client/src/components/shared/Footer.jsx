import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blue-igl text-white px-52 py-16 flex justify-center'>
        <div className='px-32'>
            <img src="/logo_white_big.png" alt="Logo White Big" />
            <p className='text-white text-xl mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis pulvinar dictum fermentum dui massa in dolor maecenas. Egestas fermentum amet ornare nulla.</p>
            <div className='flex gap-x-8 items-center mt-12'>
                <p className='text-2xl font-bold'>Follow us</p>
                <div className='flex gap-x-4'>
                    <img src="/social/facebook.png" alt="facebook" />
                    <img src="/social/facebook.png" alt="facebook" />
                    <img src="/social/facebook.png" alt="facebook" />
                    <img src="/social/facebook.png" alt="facebook" />
                    <img src="/social/facebook.png" alt="facebook" />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-y-8 justify-center'>
            <div className='flex gap-x-12 items-center'>
                <img src="/icons/message.png" alt="Message" />
                <p className='text-white text-2xl'>js_zouambia@esi.dz</p>
            </div>
            <div className='flex gap-x-8 items-center'>
                <img src="/icons/map.png" alt="Map" />
                <p className='text-white text-2xl'>Ecole Nationale Superieure D’informatique - Ex INI, Oued Smar</p>
            </div>
            <div className='flex gap-x-8 items-center'>
                <img src="/icons/phone.png" alt="Phone" />
                <p className='text-white text-2xl'>+213 775648736</p>
            </div>
        </div>
    </div>
  )
}
