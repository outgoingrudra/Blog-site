import React from 'react'

export default function Login() {
   
  
  const handleSubmit = (e) => {
  e.preventDefault();
};


  return (
    <div className='flex items-center justify-center h-screen'>
          <div className="w-full max-w-sm p-6  max-md:m-6 border border-primary/30
          shadow-xl shadow-primary/15 rounded-lg">
            <div className=" w-full py-6 text-center
            ">
                <h1 className="text-3xl font-bold">
                  <span className="text-primary">Admin</span> Login
                </h1>
                                  <p className='font-light'>
                    Enter your credentials to access admin panel
                  </p>

            </div>
            <form onSubmit={handleSubmit}  action="">
              <div className="flex flex-col">
                   <label htmlFor="">
                      Email
                   </label>
                   <input type="email" placeholder='your email id ' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
              </div>

               <div className="flex flex-col">
                   <label htmlFor="">
                      Password
                   </label>
                   <input type="password" placeholder='your password ' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
              </div>
              <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 
              transition-all' >Login</button>
            </form>
          </div>

    </div>
  )
}
