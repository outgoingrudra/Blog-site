import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../Components/admin/BlogTableItem";
import assets from "../../assets/assets";
export default function ListBlog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12  sm:pl-16 bg-blue-50/50">
      <h1 className="">All Blogs</h1>
      <div className="">
        <div className="flex items-center gap-3 mt-6 text-gray-600">
          
          <div className="relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg  scrollbar-hide bg-white ">
            <table className="md:w-[800px] w-full text-sm  text-gray-500">
              <thead className=" text-xs text-gray-600 text-left uppercase">
                <tr>
                  <th scope="col" className="px-2 py-2 xl:px-6">
                    #
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Blog Title
                  </th>
                  <th scope="col" className="px-2 py-2 max-sm:hidden">
                    Date
                  </th>
                  <th scope="col" className="px-2 py-2 max-sm:hidden">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((b, i) => {
                  return (
                    <BlogTableItem
                      key={b._id}
                      blog={b}
                      fetchBlog={fetchBlogs}
                      index={i + 1}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
