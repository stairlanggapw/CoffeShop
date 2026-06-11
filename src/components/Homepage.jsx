import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Homepage = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='w-full min-h-screen bg-[#f5f2ec] flex items-center overflow-hidden'>
      <div className='max-w-7xl mx-auto px-10 md:px-16 w-full flex flex-col md:flex-row items-center gap-12 py-20'>

        <div className='flex-1 min-w-0'>

          <div className='flex items-center gap-2 mb-8'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#1a1208]' />
            <span className='text-[9px] tracking-[4px] uppercase text-[#5a4a38]'>
              Established 2024 · Artisan Roastery
            </span>
          </div>

          <h1 className='font-serif leading-[0.92] mb-2'>
            <span className='block text-[80px] md:text-[96px] font-bold text-[#1a1208]'>
              Coffee
            </span>
            <span className='block text-[64px] md:text-[76px] font-normal text-[#1a1208]'>
              &amp;{' '}
              <em className='font-serif font-bold italic text-[#b7774f] text-[80px] md:text-[96px]'>
                Tea
              </em>
            </span>
          </h1>

          <div className='flex items-center gap-3 my-5'>
            <span className='w-8 h-px bg-[#b7774f]' />
            <span className='font-serif italic text-sm text-[#8a7060]'>Live Music Everyday</span>
            <span className='text-[#b7774f] text-xs'>✦</span>
          </div>

          <p className='text-sm text-[#6b5e52] leading-relaxed max-w-sm mb-10'>
            Experience the harmony of hand-crafted artisan beverages and soulful live
            performances. Our boutique space is designed for those who appreciate the
            finer notes in every cup and every chord.
          </p>

          <div className='flex items-center gap-5'>
            <button
              onClick={scrollToMenu}
              className='bg-[#1a1208] text-[#f5f2ec] px-7 py-3.5 rounded-full text-[11px] tracking-[2px] uppercase font-medium hover:bg-[#2e2010] transition-colors cursor-pointer'
            >
              Explore Menu
            </button>
            <button className='flex items-center gap-3 text-sm text-[#1a1208] cursor-pointer group'>
              <span className='w-9 h-9 rounded-full border border-[#c9b8a0] flex items-center justify-center text-sm group-hover:border-[#b7774f] transition-colors'>
                ♪
              </span>
              Tonight's Show
            </button>
          </div>
        </div>

        <div className='relative flex-shrink-0 w-[300px] h-[380px] md:w-[380px] md:h-[460px]'>

          <div className='absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[500px] md:h-[520px]'>
            <img
              src={assets.about}
              alt='BrewCraft coffee and tea'
              className='w-full h-full object-cover'
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -8, 0] }}
            className='absolute top-6 -right-10 bg-white rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm'
          >
            <div className='w-10 h-10 rounded-lg bg-[#e8f0e0] flex items-center justify-center text-sm'>🍵</div>
            <div>
              <p className='text-[9px] tracking-[2px] uppercase text-[#1a1208] font-medium'>Selection</p>
              <p className='text-[11px] text-[#8a7060]'>50+ Tea Varieties</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{ y: [0, 10, 0] }}
            className='absolute top-1/2 -translate-y-1/2 -right-18 bg-[#1a1208] rounded-2xl px-3.5 py-2.5 flex items-center gap-3'
          >
            <div className='w-13 h-10 rounded-lg bg-[#2a2010] flex items-center justify-center text-[#c9b8a0] text-sm'>♪</div>
            <div>
              <p className='text-[9px] tracking-[2px] uppercase text-[#c9b8a0] font-medium'>Evening</p>
              <p className='text-[11px] text-[#6b5e52]'>Soulful Vibe</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{ y: [0, -10, 0] }}
            className='absolute bottom-6 -left-45 bg-white rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm'
          >
            <div className='w-10 h-10 rounded-lg bg-[#f0e8d8] flex items-center justify-center text-sm'>☕</div>
            <div>
              <p className='text-[9px] tracking-[2px] uppercase text-[#1a1208] font-medium'>Origin</p>
              <p className='text-[11px] text-[#8a7060]'>100% Arabica</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Homepage