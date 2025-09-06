import React from 'react'
import { blogCategories } from '../assets/assets'

export default function BlogList() {
  return (
    <div>
        <div className=" flex justify-center gap-4 sm:gap-8 my-10 relative ">
            {/* criteria listing here  */}
            {blogCategories.map((item)=>(
                <div key={item} className='relative'>
                    <button className='cursor-pointer text-gray-500 '>{item}
                        <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></div>
                    </button>
                </div>
            ))}

        </div>
        <div className="">
            {/* Blog Cards will be displayed here !!! */}
        </div>

    </div>
  )
}
