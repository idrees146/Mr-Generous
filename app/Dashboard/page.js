"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Dashboard = () => {

    const { data: session } = useSession()
    
    const router = useRouter()
    if (!session) {
   
    router.push('/Login')
    }  

  return (
    

    <>
    
    


<form className="max-w-md mx-auto my-10 p-10 border rounded-xl ">

<div className="mb-5">
    <label for="username" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
    <input type="text" id="username" className="shadow-sm bg-blue-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>



  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium   dark:text-white">Your Name</label>
    <input type="email" id="email" className="shadow-sm bg-blue-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Adam Khan" required />
  </div>
  <div className="mb-5">
    <label for="number" className="block mb-2 text-sm font-medium  dark:text-white">Easypaisa Number</label>
    <input type="number" id="number" className="shadow-sm bg-blue-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium dark:text-white">Easypaisa password</label>
    <input type="password" id="password" className="shadow-sm bg-blue-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-blue-950 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" className="ms-2 text-sm font-medium  dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>



  <div className='flex justify-center'>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Details</button>

  </div>
</form>


    


    
    
    
    
    
    </>
  )
}

export default Dashboard