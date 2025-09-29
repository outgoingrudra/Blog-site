import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Layout from "./Pages/Admin/Layout";
import Dashboard from "./Pages/Admin/Dashboard";
import AddBlog from "./Pages/Admin/AddBlog"
import Comments from "./Pages/Admin/Comments"
import ListBlog from "./Pages/Admin/ListBlog"
import Login from "./Components/admin/Login";
import "quill/dist/quill.snow.css"
import {Toaster} from 'react-hot-toast'

export default function App() {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={true ? <Layout /> : <Login/>} >
           <Route index element={<Dashboard/>}/>
           <Route  path="addBlog" element={<AddBlog/>}/>
           <Route  path="listBlog" element={<ListBlog/>}/>
           <Route  path="comments" element={<Comments/>}/>
        
        </Route>


      </Routes>
    </div>
  );
}
