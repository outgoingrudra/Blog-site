import React from 'react'

export default function BlogCard({blog}) {
    const {title,description , category,image,_id}=blog
  return (
    <div>
        <img src={image} alt="" className='aspect-video' />
        <span className=' ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'
        >{category}</span>
        <div className="">
            <h5>{title}</h5>
            <p>{description.slice(0,80)}</p>
        </div>
    </div>
  )
}
