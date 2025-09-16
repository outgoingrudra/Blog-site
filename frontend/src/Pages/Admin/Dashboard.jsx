import React, { useEffect, useState } from 'react'
import assets, { dashboard_data } from '../../assets/assets'

export default function Dashboard() {
  const [dashData,setdashData]= useState({
    blogs:0,
    comments:0 ,
    drafts : 0,
    recentBlogs:[]

  })

  const fetchData =async ()=>{
    setdashData(dashboard_data)

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div className='flex flex-col w-full p-4 md:p-10 bg-blue-50/50'>
             
  {/* Stats cards wrapper */}
  <div className="flex flex-wrap gap-4">

    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
      <img src={assets.dashboard_icon_1} alt="" />
      <div>
        <p className='text-xl font-semibold text-gray-600'>{dashData.blogs}</p>
        <p className='text-gray-400 font-light'>Blogs</p>
      </div>
    </div>

    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
      <img src={assets.dashboard_icon_2} alt="" />
      <div>
        <p className='text-xl font-semibold text-gray-600'>{dashData.comments}</p>
        <p className='text-gray-400 font-light'>Comments</p>
      </div>
    </div>

    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
      <img src={assets.dashboard_icon_3} alt="" />
      <div>
        <p className='text-xl font-semibold text-gray-600'>{dashData.drafts}</p>
        <p className='text-gray-400 font-light'>Drafts</p>
      </div>
    </div>
  </div>
  
  {/* Latest Blogs */}
  <div className="flex items-center gap-3 mt-6 text-gray-600">
    <div>
      <img src={assets.dashboard_icon_4} alt="" />
      <p>Latest Blogs</p>
    </div>
  </div>
</div>

  )
}
