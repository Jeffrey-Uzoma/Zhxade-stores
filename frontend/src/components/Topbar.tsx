import React from 'react'

const Topbar = () => {
  return (
    <div className='hidden bg-black text-white items-center justify-between pl-[18em] pr-[7em] w-full py-3 md:hidden sm:hidden lg:flex'>
      <div className='gap-5 flex'>
        <h1>Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <u className='text-white'><a href="">Shop Now</a></u>
      </div>
      <div className='flex'>
        <h1>English</h1>
        <div></div>
      </div>
    </div>
  )
}

export default Topbar