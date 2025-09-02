import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Images } from '@/utils/images'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Foot from '@/components/Foot'

const Contact = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <hr className='text-slate-300'/>
      <div className='flex px-[6em] pt-[2em]'>
        <div className='flex gap-6'>
          <div>
            <Link href='/' className='gap-3 flex text-gray-400'>
              <h1 className=''>Home</h1>
              <h1>/</h1>
            </Link>  
          </div>
          <h1><Link href='/contact'>Contact</Link></h1>
        </div>
      </div>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 px-[6em] mt-[4em] sm:px-[1.5em] md:px-[2em] lg:px-[6em] mb-[6em]'>
        <div className='shadow-md px-[2em] py-[2em] rounded-xl min-w-[21.5em] sm:min-w-[18em] md:min-w-[21em] lg:min-w-[21.5em] mb-7'>
          <div className='flex gap-6 items-center mb-5'>
            <div><Image src={Images.PhoneIcon} alt=''/></div>
            <h1 className='font-semibold text-xl'>Call To Us</h1>
          </div>
          <div className='flex flex-col gap-3 mb-8'>
            <h1>We are available 24/7, 7 days a week.</h1>
            <h1>Phone: +2341234567890</h1>
          </div>
          <hr className='w-auto text-gray-600 mb-8'/>
          <div className='flex gap-6 items-center mb-5'>
            <div><Image src={Images.MailIcon} alt=''/></div>
            <h1 className='font-semibold text-xl'>Write To Us</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <h1>Fill out our form and we will contact you within 24 hours.</h1>
            <h1>Email: customer@zhxadestores.com</h1>
            <h1>Email: support@zhxadestores.com</h1>
          </div>
        </div>
        <div className='flex flex-col shadow-md px-[2em] py-[2em] rounded-xl gap-7 w-auto mb-7'>
          <div className='flex flex-col gap-4 sm:flex-col md:flex-col lg:flex-row'>
            <div className='bg-gray-200 rounded-xl px-4 py-2'><input type="text" placeholder='Your Name *' className='outline-none border-none'/></div>
            <div className='bg-gray-200 rounded-xl px-4 py-2'><input type="text" placeholder='Your Email *' className='outline-none border-none'/></div>
            <div className='bg-gray-200 rounded-xl px-4 py-2'><input type="number" placeholder='Your Phone *' className='outline-none border-none'/></div>
          </div>
          <div className='bg-gray-200 rounded-xl px-4 py-2'>
            <textarea name="" id="" className='resize-none w-full h-[12em]' placeholder='Your Message *'></textarea>
          </div>
          <div className='bg-orange-700 self-end px-8 py-3 rounded-[0.3em] cursor-pointer'><button className='outline-none border-none text-white cursor-pointer'>Send Message</button></div>
        </div>
      </div>
      <Footer/>
      <Foot/>
    </div>
  )
}

export default Contact