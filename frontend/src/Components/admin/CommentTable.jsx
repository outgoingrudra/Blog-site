import React from 'react'

export default function CommentTable({comment,fetchComment}) {
    const {blog ,createdAt,_id }=comment
    const blogDate = new Date(createdAt)
  return (
   <tr className='order-y border-gray-300'>
    <td className='px-6 py-4'       >
        <b>Blog</b> : {blog.title}
        <br></br>
        <br />
        <b>Name</b> : {comment.name}
        <br />
        <b>Comment</b> : {comment.content}


    </td>

   </tr>
  )
}
