'use client'

import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Images } from '@/utils/images'
import Footer from '@/components/Footer'
import Foot from '@/components/Foot'

const About = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <hr className='text-slate-300'/>
      <div className='flex pt-[2em] px-[2em] md:px-[4em] lg:px-[6em]'>
        <div className='flex gap-6'>
          <div>
            <Link href='/' className='gap-3 flex text-gray-400'>
              <h1 className=''>Home</h1>
              <h1>/</h1>
            </Link>  
          </div>
          <h1><Link href='/about'>About</Link></h1>
        </div>
      </div>
      <div className='flex flex-col px-[2em] pt-[2em] gap-[5em] items-center justify-start sm:justify-center md:justify-center lg:justify-start mb-[5em] sm:flex-col md:flex-col lg:flex-row md:px-[2em] lg:px-[6em]'>
        <div className='flex flex-col'>
          <h1 className='mb-8 text-5xl font-bold'>Our Story</h1>
          <h1 className='mb-6 text-justify w-full'>Launched in 2020, exclusive in West Africa's premier online shopping marketplace with an active presence in Nigeria. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customer's across the region.</h1>
          <h1 className='text-justify'>Exclusive have more than 1 million products to offer, growing at a very fast. Exclusive offers a diverse assessment in category ranging from customers.</h1>
        </div>
        <div className='flex'>
          <Image src={Images.AboutImage} alt='' className=' w-[80em] sm:w-[-10em] md:w-[36em] lg:w-[170em] border-2'/>
        </div>
      </div>
      <div className='flex flex-col px-[6em] py-[4em] gap-8 items-center justify-between sm:flex-col md:flex-col lg:flex-row sm:px-[1em] md:px-[4em] lg:px-[6em]'>
        {[
          {
            image: Images.Image1,
            text: `10.5k`,
            subtext: `Sellers active in out site`,
          },
          {
            image: Images.Image2,
            text: `33k`,
            subtext: `Monthly Product Sale`,
          },
          {
            image: Images.Image3,
            text: `45.5k`,
            subtext: `Customer active in out site`,
          },
          {
            image: Images.Image4,
            text: `25k`,
            subtext: `Annual gross sale in our site`,
          },
          
        ].map((about, i) => (
          <div className='flex flex-col gap-4 px-[2em] py-[2em] border-1 rounded-xl items-center w-[20em] hover:border-none hover:shadow-md hover:bg-orange-600 sm:w-auto md:w-auto lg:w-[20em]' key={i}>
            <div><Image src={about.image} alt='' className='w-[4em]'/></div>
            <div className='font-bold text-3xl'>{about.text}</div>
            <div>{about.subtext}</div>
          </div>
        ))}
      </div>
      <div className='flex flex-col px-[4em] py-[4em] gap-8 items-center justify-between sm:flex-col md:flex-col lg:flex-row'>
        {[
          {
            image: Images.Dp1,
            name: `James Garner`,
            title: `Founder & Chairman`,
            twitter: Images.Twitter_white,
            instagram: Images.Instagram_white,
            linkedin: Images.Linkedin_white,
          },
          {
            image: Images.Dp2,
            name: `Jennifer Hudgsen`,
            title: `Managing Director`,
            twitter: Images.Twitter_white,
            instagram: Images.Instagram_white,
            linkedin: Images.Linkedin_white,
          },
          {
            image: Images.Dp3,
            name: `Reuben Selles`,
            title: `Product Designer`,
            twitter: Images.Twitter_white,
            instagram: Images.Instagram_white,
            linkedin: Images.Linkedin_white,
          },
        ].map((dps, i ) => (
          <div className='flex flex-col' key={i}>
            <div className='mb-4'><Image src={dps.image} alt=''/></div>
            <div className='font-bold text-3xl'>{dps.name}</div>
            <div className='mb-4'>{dps.title}</div>
            <div className='flex gap-4'>
              <div><Image src={dps.twitter} alt=''/></div>
              <div><Image src={dps.instagram} alt=''/></div>
              <div><Image src={dps.linkedin} alt=''/></div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col px-[4em] py-[4em] gap-[6em] items-center justify-center sm:flex-col md:flex-col lg:flex-row'>
        {[
          {
            image: Images.Service1,
            title: `FREE AND FAST DELIVERY`,
            subtext: `Free delivery for all orders over $140`
          },
          {
            image: Images.Service2,
            title: `24/7 CUSTOMER SERVICE`,
            subtext: `Friendly 24/7 customer support`,
          },
          {
            image: Images.Service3,
            title: `MONEY BACK GUARANTEE`,
            subtext: `We return money within 30 days`
          },
        ].map((services, i) => (
          <div className='flex flex-col gap-4 items-center' key={i}>
              <div><Image src={services.image} alt=''/></div>
              <div className='font-bold text-[1.2em]'>{services.title}</div>
              <div>{services.subtext}</div>
          </div>
        ))}
      </div>
      <Footer/>
      <Foot/>
    </div>
  )
}

export default About