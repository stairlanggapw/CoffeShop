import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

const Gallery = () => {
  const images = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img4
  ]

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })

  return (
    <section
      id='gallery'
      className='w-full py-24 bg-[#f8f4ef] overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mb-16'
        >
          <h1 className='text-5xl font-serif mb-6'>Photo Gallery</h1>
          <div className='w-52 h-[2px] bg-[#b7774f] mb-6'></div>
          <p className='text-gray-700 text-xl max-w-2xl leading-relaxed'>
            A glimpse of our cozy space, crafted coffee, and warm moments.
          </p>
        </motion.div>

        <div className='grid grid-cols-3 grid-rows-2 gap-6 h-[610px]'>

          <motion.div
            {...fadeUp(0)}
            className='col-span-2 rounded-[25px] overflow-hidden shadow-xl'
            style={{ willChange: 'transform' }}
          >
            <img
              src={images[0]}
              alt='Gallery image 1'
              loading='eager'
              decoding='async'
              width={800} height={400}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          {/* Gambar 2 */}
          <motion.div
            {...fadeUp(0.12)}
            className='rounded-[25px] overflow-hidden shadow-xl'
            style={{ willChange: 'transform' }}
          >
            <img
              src={images[1]}
              alt='Gallery image 2'
              loading='lazy'
              decoding='async'
              width={400} height={400}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.24)}
            className='rounded-[25px] overflow-hidden shadow-xl'
            style={{ willChange: 'transform' }}
          >
            <img
              src={images[2]}
              alt='Gallery image 3'
              loading='lazy'
              decoding='async'
              width={400} height={400}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.36)}
            className='col-span-2 rounded-[25px] overflow-hidden shadow-xl'
            style={{ willChange: 'transform' }}
          >
            <img
              src={images[3]}
              alt='Gallery image 4'
              loading='lazy'
              decoding='async'
              width={800} height={400}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Gallery