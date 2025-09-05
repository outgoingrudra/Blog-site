import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"

export default function App() {
  return (
    <div>
       <Routes >
          <Route path ='/' element={<Home/>} />
          <Route path ='/blog' element={<Blog/>} />

       </Routes>


    </div>
  )
}
