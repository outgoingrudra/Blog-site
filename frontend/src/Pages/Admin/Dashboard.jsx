import React, { useEffect, useState } from 'react'
import assets, { dashboard_data } from '../../assets/assets'

export default function Dashboard() {
  const [dashData,setdashData]v= useState({
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
    <div className='flex -1 p-4 md:p-10  bg-blue-50/50'>
             
             <div className="flex flex-wrap gap-4">
              <div className="">
                  <img src={assets.dashboard_icon_1} alt="" />
                  <div className="">
                    <p>{das}</p>
                  </div>
              </div>

             </div>

    </div>
  )
}
