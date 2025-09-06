import React from 'react'
import assets from '../assets/assets'

export default function Header() {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className="">
            <div className="text-center mt-20 mb-8"
            ><p>AI feature Integrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>

        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />


    </div>
  )
}

