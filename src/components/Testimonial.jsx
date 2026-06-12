import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      image: assets.testi1,
      position: "Cafe Manager",
      review: "The coffee here is amazing. Rich flavor, smooth texture, and always consistent."
    },
    {
      name: "Jane Smith",
      image: assets.testi2,
      position: "Barista",
      review: "The pastries and coffee pair perfectly together. One of my favorite places."
    },
    {
      name: "Michael Johnson",
      image: assets.testi3,
      position: "Client",
      review: "A cozy atmosphere with exceptional service and quality coffee."
    },
    {
      name: "Emily Davis",
      image: assets.testi4,
      position: "Customer",
      review: "The best coffee shop in town! The staff is friendly and the drinks are always on point."
    },
    {
      name: "David Wilson",
      image: assets.testi5,
      position: "Coffee Enthusiast",
      review: "A hidden gem for coffee lovers. The unique blends and cozy ambiance make it a must-visit."
    },
    {
      name: "Sarah Brown",
      image: assets.testi1,
      position: "Regular Customer",
      review: "I can't start my day without a cup from here. The quality and consistency are unmatched."
    }
  ]

  const stats = [
    { value: '4.9', label: 'Average Rating' },
    { value: '15K+', label: 'Happy Customers' },
    { value: '98%', label: 'Satisfaction' }
  ]

  return (
    <section
      id='testimonial'
      className='py-28 bg-white overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <p className='text-[#b7774f] tracking-[4px] text-sm font-medium mb-4'>
            TESTIMONIALS
          </p>
          <h1 className='text-4xl md:text-5xl font-bold font-serif mb-5'>
            Loved By Coffee Lovers
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Every cup tells a story. Discover what our customers say about their experience at BrewCraft.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-center'
            >
              <h2 className='text-5xl font-bold text-[#b7774f] mb-2'>{stat.value}</h2>
              <p className='text-gray-500'>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='bg-[#faf7f2] rounded-[30px] p-8 border border-[#ede4db] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'
            >
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading='lazy'
                  className='w-16 h-16 rounded-full object-cover'
                />
                <div>
                  <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                  <p className='text-[#b7774f] text-sm'>{testimonial.position}</p>
                </div>
              </div>
              <div className='text-yellow-500 mb-4 text-lg'>★★★★★</div>
              <p className='text-gray-600 leading-relaxed'>{testimonial.review}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonial