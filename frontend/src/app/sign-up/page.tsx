'use client'

import React, { useState } from 'react'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Images } from '@/utils/images'
import Link from 'next/link'
import Foot from '@/components/Foot'
import { RxEyeOpen } from "react-icons/rx"
import { LuEyeClosed } from "react-icons/lu"
import api from '../services/api'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await api.post('/api/auth/register', formData)

      const { token, message: msg } = res.data
      setMessage(msg)

      localStorage.setItem('token', token)

      // Optional: Log user in automatically
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } catch (error: any) {
      setMessage(error?.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignup = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <div className="flex flex-col">
      <Topbar/>
      <Navbar/>
      <hr className="text-slate-300"/>
      <div className="flex mt-[4em] mb-[4em] gap-[2em] items-center justify-between pr-0 md:pr-0 lg:pr-[4em] md:self-center sm:self-center">
        <div className='hidden sm:hidden md:hidden lg:flex w-[60%]'>
          <Image src={Images.Side_Images} alt='' className=''/>
        </div>
        <div className='flex flex-col w-[25em] px-[4em] justify-start md:justify-center sm:justify-center'>
          <h1 className='font-semibold text-[1.7em] lg:text-[2em]'>Create an account</h1>
          <h2>Enter your details below</h2>

          <form onSubmit={handleSubmit} className='mt-[3em]'>
            <div className='flex flex-col gap-3 mb-[1.6em]'>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className='outline-none border-none'
                required
              />
              <hr className='text-slate-500'/>
            </div>
            <div className='flex flex-col gap-3 mb-[1.6em]'>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email or Phone Number'
                className='outline-none border-none'
                required
              />
              <hr className='text-slate-500'/>
            </div>
            <div className='flex flex-col gap-3 mb-[1.6em]'>
              <div className='flex items-center justify-between'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Password'
                  className='outline-none border-none'
                  required
                />
                <div
                  className='right-2 bottom-5 cursor-pointer'
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  {showPassword ? (
                    <LuEyeClosed className='h-5 w-5 text-gray-500' />
                  ) : (
                    <RxEyeOpen className='h-5 w-5 text-gray-500' />
                  )}
                </div>
              </div>
              <hr className='text-slate-500'/>
            </div>

            <div className='flex items-center justify-center py-3 bg-orange-600 rounded-[0.3em] mb-[1em] cursor-pointer'>
              <button type="submit" className='border-none outline-none text-white cursor-pointer' disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
            </div>

            {message && (
              <p className="text-center text-sm text-green-600 mt-2">{message}</p>
            )}

            <div className='flex gap-4 items-center justify-center border-1 rounded-[0.3em] py-3 mb-[2em] cursor-pointer' onClick={handleGoogleSignup}>
              <div className='w-[1em]'><Image src={Images.Google_image} alt=''/></div>
              <h1>sign up with Google</h1>
            </div>

              {message && (
                <p
                  className={`mt-3 text-sm text-center ${
                    message.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {message}
                </p>
              )}

            <div className='flex items-center justify-center gap-4'>
              <h1>Already have account?</h1>
              <Link href='/log-in'>
                <div className='cursor-pointer flex flex-col gap-1'>
                  <h1>Log In</h1>
                  <hr />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
      <Foot/>
    </div>
  )
}

export default SignUp
