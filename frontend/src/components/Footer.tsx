'use client'

import React from 'react'
import { Images } from '@/utils/images'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row bg-black px-[2em] lg:px-[4em] py-[4em] gap-6 text-white items-start justify-between'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-[1.6em]'>Exclusive</h1>
        <h1 className='font-semibold text-[1.3em]'>Subscribe</h1>
        <h1 className='mb-1'>Get 10% off your first order</h1>
        <div className='flex px-2 py-1 border-1 border-white rounded-[0.2em] items-center'>
          <input type="text" placeholder='Enter your email' className='border-none outline-none'/>
          <div className='w-[1em]'><Image src={Images.SendArrow} alt=''/></div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-[1.3em]'>Support</h1>
        <div className='flex flex-col gap-2'>
          <h1 className='w-[16em]'>31 cordelia street, port harcourt, Nigeria.</h1>
          <h1 className=''>exclusive@gmail.com</h1>
          <h1 className=''>+2341234567890</h1>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-[1.3em]'>Account</h1>
        <div className='flex flex-col gap-2'>
          <h1 className=''>My Account</h1>
          <h1 className=''>Login / Register</h1>
          <h1 className=''>Cart</h1>
          <h1 className=''>Wishlist</h1>
          <h1 className=''>Shop</h1>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-[1.3em]'>Quick Link</h1>
        <div className='flex flex-col gap-2'>
          <h1 className=''>Privacy Policy</h1>
          <h1 className=''>Terms Of Use</h1>
          <h1 className=''>FAQ</h1>
          <h1 className=''>Contact</h1>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-[1.3em]'>Download App</h1>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[0.7em] text-slate-300'>Save $3 with App New User Only</h1>
          <div className='flex gap-1'>
            <div><Image src={Images.QrCode} alt=''/></div>
            <div className='flex flex-col'>
              <div><Image src={Images.GooglePlay} alt=''/></div>
              <div><Image src={Images.ApplePlay} alt=''/></div>
            </div>
          </div>
        </div>
        <div className='flex gap-5'>
          <div><Image src={Images.Facebook} alt=''/></div>
          <div><Image src={Images.Twitter} alt=''/></div>
          <div><Image src={Images.Instagram} alt=''/></div>
          <div><Image src={Images.LinkedIn} alt=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Footer