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

  return (
    <section
      id='gallery'
      className='w-full py-24 bg-[#f8f4ef] overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className='col-span-2 rounded-[25px] overflow-hidden shadow-xl will-change-transform'
          >
            <img
              src={images[0]}
              alt='img1'
              loading='eager'
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='rounded-[25px] overflow-hidden shadow-xl will-change-transform'
          >
            <img
              src={images[1]}
              alt='img2'
              loading='eager'
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='rounded-[25px] overflow-hidden shadow-xl will-change-transform'
          >
            <img
              src={images[2]}
              alt='img3'
              loading='eager'
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='col-span-2 rounded-[25px] overflow-hidden shadow-xl will-change-transform'
          >
            <img
              src={images[3]}
              alt='img4'
              loading='eager'
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Gallery