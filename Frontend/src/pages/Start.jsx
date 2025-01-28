import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full'>
    <img className='w-16 ml-9' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
        <Link to='/login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
