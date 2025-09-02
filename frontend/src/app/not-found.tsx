'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <hr className='text-slate-300'/>
      <div className='flex flex-col px-[6em] pt-[2em] sm:px-[2em] md:px-[4em] lg:px-[6em]'>
        <div className='flex gap-6'>
          <div>
            <Link href='/' className='gap-3 flex text-gray-400'>
              <h1 className=''>Home</h1>
              <h1>/</h1>
            </Link>  
          </div>
          <h1>404 Error</h1>
        </div>
        <div className='flex flex-col items-center justify-center h-screen gap-7'>
          <h1 className='text-9xl sm:text-2xl md:5xl'>404 Not Found</h1>
          <h1>Your visted page not found. You may go to homepage</h1>
          <Link href='/'> <button className='text-white bg-orange-600 px-[4em] py-[1em] rounded-xl'>Back to home page</button></Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound
