import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import assets, {blog_data} from "../assets/assets" 
import Navbar from"../Components/Navbar"

export default function Blog() {
  const {id} =useParams()
  const [data ,setdata] = useState(null)
  const fetchBlogdata=async ()=>{
   const data =  blog_data.find(item=>item._id==id)
   setdata(data)
  }
  useEffect(()=>{
    fetchBlogdata()
  },[])
  return  data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" />
      <Navbar/>
           <div className="">
            
            </div>
            <div className="">  

            </div>


    </div>
  ) : (
    <div className="">
      Loading
    </div>
  )
}
