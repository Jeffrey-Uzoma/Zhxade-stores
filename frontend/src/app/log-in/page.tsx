'use client'

import React, { useState } from 'react'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Images } from '@/utils/images'
import Link from 'next/link'
import Foot from '@/components/Foot'
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import axios from 'axios';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        identifier: emailOrPhone,
        password
      });

      console.log('Login Success:', res.data);
      // Save token to localStorage or cookie if applicable
      localStorage.setItem('token', res.data.token);
      // Redirect or reload page after login if needed
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Topbar />
      <Navbar />
      <hr className="text-slate-300" />
      <div className="flex mt-[4em] mb-[4em] gap-[2em] items-center justify-between pr-0 md:pr-0 lg:pr-[4em] md:self-center sm:self-center">
        <div className='hidden sm:hidden md:hidden lg:flex w-[60%]'>
          <Image src={Images.Side_Images} alt='' />
        </div>
        <div className='flex flex-col w-[27em] px-[4em] justify-start md:justify-center sm:justify-center'>
          <h1 className='font-semibold text-[1.7em] lg:text-[2em]'>Log in to Zhxade Stores</h1>
          <h2 className='pt-[0.5em]'>Enter your details below</h2>

          <form onSubmit={handleLogin} className='mt-[2.5em]'>
            <div className='flex flex-col gap-3 mb-[1.6em]'>
              <input
                type="text"
                placeholder='Email or Phone Number'
                className='outline-none border-none'
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <hr className='text-slate-500' />
            </div>

            <div className='flex flex-col gap-3 mb-[1.6em]'>
              <div className='flex items-center justify-between'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='outline-none border-none'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <hr className='text-slate-500' />
            </div>

            {error && (
              <p className='text-red-500 text-sm mb-2'>{error}</p>
            )}

            <div className='flex gap-6 items-center'>
              <button
                type="submit"
                className='flex items-center justify-center py-3 px-[2em] bg-orange-600 rounded-[0.3em] text-white'
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'LogIn'}
              </button>

              <div className='flex items-center'>
                <h1 className='text-orange-600'>
                  <Link href='/forgot-password'>Forgot Password?</Link>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Foot />
    </div>
  )
}

export default LogIn;
