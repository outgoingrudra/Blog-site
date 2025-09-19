import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'

export default function Comments() {
  const [comments,setComments] = useState([])
  const [filter , setFilter] = useState('Not Approved')

  const fetchComment = async()=>{
    setComments(comments_data)
  }
  useEffect(()=>{
    fetchComment()
  },[])
  return (
    <div className='flex pt-5 px-5  sm:pt-12  sm:pl-16 bg-blue-50/50'>
      <div className="flex justify-between items-center max-w-3xl">
        <h1 className="">
          Comments
        </h1>
        <div className="flex gap-4">
          <button className={`shadow-custom-sm border rounded-full px-4 py-1  cursor-pointer text-xs ${filter == 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>

        </div>
      </div>



    </div>
  )
}
