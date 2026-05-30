import React from 'react'
import assets from '../assets/assets'

const Gallery = () => {
  return (
    <section className='w-full py-24 bg-[#f5f5f5] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-10'>
        <div className='mb-16'>
          <h1 className='text-6xl font-serif mb-6'>
            Photo Gallery
          </h1>
          <div className='w-52 h-[2px] bg-[#b7774f] mb-6'></div>
          <p className='text-gray-700 text-2xl max-w-2xl leading-relaxed'>
            A glimpse of our cozy space, crafted coffee, and warm moments.
          </p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-6 h-[800px]'>
          <div className='col-span-2 rounded-[25px] overflow-hidden bg-gray-300 hover:'>
            <img src={assets.img1} alt="img1" />
          </div>
          <div className='rounded-[25px] overflow-hidden bg-gray-300'>
            <img src={assets.img2} alt="img2" />
          </div>
          <div className='rounded-[25px] overflow-hidden bg-gray-300'>
            <img src={assets.img3} alt="img3" />
          </div>
          <div className='col-span-2 rounded-[25px] overflow-hidden bg-gray-300'>
            <img src={assets.img4} alt="img4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
