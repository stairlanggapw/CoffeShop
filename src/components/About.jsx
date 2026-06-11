import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <section
      id='about'
      className='py-24 bg-[#f7f4ef]'
    >
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row items-center gap-16'>

          <div className='relative flex-shrink-0 w-[280px] h-[340px]'>
            <div className='absolute top-0 left-0 w-[185px] h-[215px] rounded-[100px_100px_20px_20px] overflow-hidden'>
              <img
                src={assets.res1}
                alt='BrewCraft cafe interior'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-[168px] left-[130px] z-10 bg-white rounded-[14px] px-4 py-3 text-center shadow-md'>
              <p className='font-serif text-2xl font-bold text-[#1a1410] leading-none'>50+</p>
              <p className='text-[9px] uppercase tracking-[2px] text-[#8a7060] mt-1'>Varieties</p>
            </div>
            <div className='absolute bottom-0 right-0 w-[150px] h-[170px] rounded-[20px_20px_80px_80px] overflow-hidden border-[5px] border-[#f7f4ef]'>
              <img
                src={assets.res2}
                alt='BrewCraft coffee pour'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute bottom-4 -left-2 grid gap-[5px]' style={{ gridTemplateColumns: 'repeat(5, 6px)' }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className='w-1 h-1 rounded-full bg-[#c9b8a0]' />
              ))}
            </div>
          </div>
          <div className='flex-1'>
            <p className='text-[10px] tracking-[5px] uppercase text-[#b7774f] mb-4'>
              Our Story
            </p>
            <h1 className='font-serif text-4xl md:text-5xl font-bold text-[#1a1410] leading-tight mb-4'>
              Where Every<br />
              Sip Meets<br />
              <em className='font-serif font-normal italic text-[#b7774f]'>
                a Musical Note.
              </em>
            </h1>
            <div className='w-9 h-[1.5px] bg-[#b7774f] my-5' />
            <p className='text-sm text-[#6b5e52] leading-relaxed mb-4'>
              Born from a deep love for coffee culture and live music, BrewCraft is
              more than just a café — it is a sensory experience. We meticulously
              source our beans from the finest Indonesian highlands and our teas
              from heritage artisan farms across Asia.
            </p>

            <p className='text-sm text-[#6b5e52] leading-relaxed'>
              As evening falls, our intimate stage comes alive. Talented local
              musicians create the perfect acoustic backdrop, turning your cup of
              perfection into an unforgettable memory.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About