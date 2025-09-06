import React from 'react'
import { blogCategories } from '../assets/assets'

export default function BlogList() {
  return (
    <div>
        <div className=" flex justify-center gap-4 sm:gap-8 my-10 relative ">
            {/* criteria listing here  */}
            {blogCategories.map((item)=>(
                <div key={item} className='relative'>
                    <button>{item}</button>
                </div>
            ))}

        </div>
        <div className="">
            {/* Blog Cards will be displayed here !!! */}
        </div>

    </div>
  )
}
