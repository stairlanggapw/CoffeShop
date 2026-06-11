import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'

function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full py-4 bg-white/10 backdrop-blur-md transition-all duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='max-w-7xl mx-auto px-8 flex justify-between items-center'>
        <div>
          <img
            className='w-24 cursor-pointer'
            src={assets.logo}
            alt="logo"
          />
        </div>
        <ul className='flex gap-8 font-medium text-gray-800 font-serif'>
          <a href="#about">
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
              About
            </li>
          </a>
          <a href="#menu">
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
              Menu
            </li>
          </a>
          <a href="#gallery">
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
              Gallery
            </li>
          </a>
          <a href="#testimonial">
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
              Testimony
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </li>
          </a>
        </ul>
        <div className='flex items-center gap-6'>
          <FiSearch className='text-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 text-gray-800' />
          <FiShoppingCart className='text-2xl cursor-pointer hover:-translate-y-1 transition-all text-gray-800' />
          <button className='bg-yellow-800 text-white px-5 py-2 rounded-full hover:shadow-2xl hover:shadow-yellow-900/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
            Log in / Sign in
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar