import React, { useState } from 'react'
import {
  CappuccinoSVG, CaramelLatteSVG, AmericanoSVG, MochaSVG,
  EspressoSVG, VanillaLatteSVG, LatteSVG, MacchiatoSVG
} from '../assets/coffeeImages'
import { motion, AnimatePresence } from 'framer-motion'

const Menu = () => {

  const [selectedCategory, setSelectedCategory] = useState('best')

  const menuItems = [
    { SvgComponent: CappuccinoSVG,   name: "Cappuccino",    price: "$10.00", category: "coffee",  recommend: true },
    { SvgComponent: CaramelLatteSVG, name: "Caramel Latte", price: "$12.00", category: "coffee",  recommend: true },
    { SvgComponent: AmericanoSVG,    name: "Americano",     price: "$9.00",  category: "coffee",  recommend: true },
    { SvgComponent: MochaSVG,        name: "Mocha Coffee",  price: "$14.00", category: "coffee",  recommend: true },
    { SvgComponent: EspressoSVG,     name: "Espresso",      price: "$6.00",  category: "coffee",  recommend: false },
    { SvgComponent: VanillaLatteSVG, name: "Vanilla Latte", price: "$13.00", category: "coffee",  recommend: false },
    { SvgComponent: LatteSVG,        name: "Latte",         price: "$11.00", category: "coffee",  recommend: false },
    { SvgComponent: MacchiatoSVG,    name: "Macchiato",     price: "$10.00", category: "coffee",  recommend: false },
  ]

  const filteredItems =
    selectedCategory === 'best'
      ? menuItems.filter(item => item.recommend)
      : menuItems.filter(item => item.category === selectedCategory)

  return (
    <section id='menu' className='max-w-7xl mx-auto py-24 px-8'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>
          Our Regular Menu Pack
        </h1>

        <p className='text-gray-600 max-w-2xl mx-auto'>
          Enjoy our handcrafted coffee and freshly baked delights, made for every occasion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='flex flex-wrap justify-center gap-4 mb-14'
      >
        <button
          onClick={() => setSelectedCategory('best')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === 'best'
              ? 'bg-yellow-700 text-white'
              : 'border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'
          }`}
        >
          Best Offer
        </button>

        <button
          onClick={() => setSelectedCategory('coffee')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === 'coffee'
              ? 'bg-yellow-700 text-white'
              : 'border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'
          }`}
        >
          Coffee
        </button>

        <button
          onClick={() => setSelectedCategory('dessert')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === 'dessert'
              ? 'bg-yellow-700 text-white'
              : 'border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'
          }`}
        >
          Dessert
        </button>
      </motion.div>

      <motion.div
        layout
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
      >
        <AnimatePresence mode='wait'>
          {filteredItems.map((item, index) => {
            const SvgComponent = item.SvgComponent

            return (
              <motion.div
                key={`${selectedCategory}-${item.name}`}
                layout
                initial={{
                  opacity: 0,
                  y: 50
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02
                }}
                className='bg-white rounded-[25px] p-5 shadow-lg border border-gray-100'
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className='w-full h-40 mb-4 flex items-center justify-center'
                >
                  <SvgComponent />
                </motion.div>

                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-bold'>
                    {item.name}
                  </h3>

                  <span className='text-xl font-bold text-yellow-800'>
                    {item.price}
                  </span>
                </div>

                <div className='flex text-yellow-500 mb-3'>
                  ★★★★★
                </div>

                <p className='text-sm text-gray-500'>
                  Freshly prepared with premium ingredients and rich coffee flavor.
                </p>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Menu