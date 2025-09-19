import React from 'react'

export default function BlogTableItem({blog,fetchBlog,index}) {
    const {title,createdAt} = blog;
    const BlogDate = new Date(createdAt)
  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
        <td className="px-2 py-4 max-sm:hidden">
            <p className=  {`${blog.isPublished ? 'text-green-600' : 'text-orange-600'}`} >
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </p>
        </td>
        <td className="px-2 py-4 flex text-xs  gap-3">
          <button className="">
            {!blog.isPublished ? 'Publish' : 'Unpublish'}
          </button>
        </td>


    </tr>
  )
}
