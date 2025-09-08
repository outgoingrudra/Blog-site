import React from 'react'

export default function Newsletter() {
  return (
    <div>
      <h1>Never Miss a blog </h1>
      <p className="">

      </p>
      <form action="">
        <input className='border border-gray-300' type="text" placeholder='Enter Your email id ' required/>
        <button type='submit' 
        className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'
        >SUBSCRIBE</button>
      </form>

    </div>
  )
}
