import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import {blog_data} from "../assets/assets" 

export default function Blog() {
  const {id} =useParams()
  const [data ,setdata] = useState(null)
  const fetchBlogdata=async ()=>{
   const data =  blog_data.find(item=>item._id==id)
   setdata(data)
   

  }
  return (
    <div>Blog</div>
  )
}
