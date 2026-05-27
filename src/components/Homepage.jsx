import React from 'react'
import assets from '../assets/assets'

const Homepage = () => {
  return (
    <section className='w-full min-h-screen overflow-hidden bg-[#f5f5f5]'>
      <div className='max-w-7xl mx-auto px-8 flex items-center justify-between min-h-screen'>
        <div className='max-w-xl'>
          <img className='w-72 mb-6' src={assets.title} alt="title" />
          <h1 className='text-5xl font-bold leading-tight mb-4'>
            An Online Coffee Store
          </h1>
          <p className='text-gray-600 text-lg mb-8'>
            Straight to your doorstep. We don’t roast our beans until we have your order. Every order is roasted and shipped the same day.
          </p>
          <div className='flex items-center gap-5 mb-10'>
            <button className='bg-yellow-800 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-yellow-900/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
              Explore Our Menu
            </button>
            <button className='border border-yellow-800 text-yellow-800 px-8 py-4 rounded-full hover:bg-yellow-800 hover:text-white transition-all duration-300'>
              Log In / Sign In
            </button>
          </div>
          <div className='flex items-center gap-16'>
            <article className='text-center'>
              <p className='text-gray-500 text-lg'>Our Products</p>
              <h2 className='text-4xl font-bold text-yellow-800'>1000+</h2>
            </article>
            <article className='text-center'>
              <p className='text-gray-500 text-lg'>Our Customer</p>
              <h2 className='text-4xl font-bold text-yellow-800'>+340K</h2>
            </article>
            <article className='text-center'>
              <p className='text-gray-500 text-lg'>Total Sales</p>
              <h2 className='text-4xl font-bold text-yellow-800'>40K</h2>
            </article>
          </div>
        </div>
        <div className='flex-1 flex justify-end items-center'>
          <img
            className='w-[700px] object-contain translate-x-12'
            src={assets.coffee}
            alt="coffee"
          />
        </div>
      </div>
    </section>
  )
}

export default Homepage