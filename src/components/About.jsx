import React from 'react'
import assets from "../assets/assets";

const About = () => {
  return (
    <section className='w-full py-24 bg-[#f5f5f5] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-10 flex items-center justify-between gap-20'>
        <div className='flex-1 flex justify-center '>
          <img
            className='max-w-[400px] object-contain'
            src={assets.about}
            alt="about"
          />
        </div>
        <div className='flex-1'>
          <h2 className='text-[#b7774f] uppercase tracking-wide text-2xl mb-6'>
            Our Story
          </h2>
          <h1 className='text-5xl font-bold leading-tight mb-8 font-serif'>
            Made with heart, <br />
            Served with love
          </h1>

          <p className='text-gray-700 text-lg leading-relaxed mb-2'>
            At BrewCraft, we believe great coffee brings
            people together.
          </p>
          <p className='text-gray-700 text-lg leading-relaxed mb-10'>
            We source the finest beans and brew each cup
            with care.
          </p>
          <button className='bg-[#f2d1c8] text-[#b7774f] px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-[#b7774f] hover:text-white transition-all duration-300'>
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About