import React from 'react'
import assets from '../assets/assets'

const Menu = () => {
  return (
    <section className='w-full h-full bg-black/35 flex items-center overflow-hidden' id='menu'>
      <div className='w-full px-16 flex items-center justify-between'>
        <div className='max-w-sm text-white'>
          <p className='uppercase tracking-[4px] text-sm mb-4'>
            Our Specials
          </p>
          <h1 className='text-7xl font-serif font-bold leading-tight mb-6'>
            Sips Worth <br />
            Savoring
          </h1>
          <div className='w-32 h-[2px] bg-[#c78f69] mb-10'></div>
          <button className='bg-white text-black px-10 py-4 rounded-2xl hover:bg-[#c78f69] hover:text-white transition-all duration-300'>
            View Full Menu
          </button>
        </div>
        <div className='flex gap-8 items-end'>
            <div className='w-[250px] h-[360px] bg-[#e7cccc] rounded-[30px] border-2 border-black shadow-2xl overflow-hidden'>
                <img
                    className='w-full h-[200px] object-cover'
                    src={assets.menu1}
                    alt="menu"
                />
                <div className='p-5 translate-y-[-10px]'>
                    <h2 className='text-2xl font-bold mb-2'>
                        Caramel Latte
                    </h2>
                    <p className='text-gray-700 text-sm mb-4'>
                        Smooth espresso blended with creamy caramel milk.
                    </p>
                    <div className='flex items-center justify-between'>
                    <span className='text-xl font-bold text-yellow-800'>
                        $12
                    </span>
                    <button className='bg-yellow-800 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-300'>
                        Order
                    </button>
                    </div>
                </div>
            </div>
            <div className='w-[250px] h-[360px] bg-[#e7cccc] rounded-[30px] border-2 border-black shadow-2xl overflow-hidden'>
                <img
                    className='w-full h-[200px] object-cover'
                    src={assets.menu1}
                    alt="menu"
                />
                <div className='p-5 translate-y-[-10px]'>
                    <h2 className='text-2xl font-bold mb-2'>
                        Caramel Latte
                    </h2>
                    <p className='text-gray-700 text-sm mb-4'>
                        Smooth espresso blended with creamy caramel milk.
                    </p>
                    <div className='flex items-center justify-between'>
                    <span className='text-xl font-bold text-yellow-800'>
                        $12
                    </span>
                    <button className='bg-yellow-800 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-300'>
                        Order
                    </button>
                    </div>
                </div>
            </div>
            <div className='w-[250px] h-[360px] bg-[#e7cccc] rounded-[30px] border-2 border-black shadow-2xl overflow-hidden'>
                <img
                    className='w-full h-[200px] object-cover'
                    src={assets.menu1}
                    alt="menu"
                />
                <div className='p-5 translate-y-[-10px]'>
                    <h2 className='text-2xl font-bold mb-2'>
                        Caramel Latte
                    </h2>
                    <p className='text-gray-700 text-sm mb-4'>
                        Smooth espresso blended with creamy caramel milk.
                    </p>
                    <div className='flex items-center justify-between'>
                    <span className='text-xl font-bold text-yellow-800'>
                        $12
                    </span>
                    <button className='bg-yellow-800 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-300'>
                        Order
                    </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Menu