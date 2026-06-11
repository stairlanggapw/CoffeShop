import React from 'react'
import assets from '../assets/assets'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#2d251f] text-white pt-20 pb-8'>
      <div className='max-w-7xl mx-auto px-8'>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>

          <div>
            <img
              src={assets.logo2}
              alt='logo'
              className='w-40 mb-4'
            />

            <p className='text-gray-400 leading-relaxed'>
              Brewing happiness one cup at a time. Discover premium coffee,
              handcrafted drinks, and cozy moments at BrewCraft.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-5'>
              Quick Links
            </h3>

            <ul className='space-y-3 text-gray-400'>
              <li><a href='#home' className='hover:text-[#b7774f]'>Home</a></li>
              <li><a href='#about' className='hover:text-[#b7774f]'>About</a></li>
              <li><a href='#menu' className='hover:text-[#b7774f]'>Menu</a></li>
              <li><a href='#gallery' className='hover:text-[#b7774f]'>Gallery</a></li>
              <li><a href='#contact' className='hover:text-[#b7774f]'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-5'>
              Contact Info
            </h3>
            <div className='space-y-4 text-gray-400'>
              <div className='flex items-center gap-3'>
                <FaMapMarkerAlt />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className='flex items-center gap-3'>
                <FaPhoneAlt />
                <span>+62 812-3456-7890</span>
              </div>
              <div className='flex items-center gap-3'>
                <FaEnvelope />
                <span>hello@brewcraft.com</span>
              </div>

            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-5'>
              Follow Us
            </h3>
            <div className='flex gap-4'>
              <a
                href='#'
                className='w-11 h-11 rounded-full bg-[#2c2623] flex items-center justify-center hover:bg-[#b7774f] transition-all duration-300'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='w-11 h-11 rounded-full bg-[#2c2623] flex items-center justify-center hover:bg-[#b7774f] transition-all duration-300'
              >
                <FaInstagram />
              </a>
              <a
                href='#'
                className='w-11 h-11 rounded-full bg-[#2c2623] flex items-center justify-center hover:bg-[#b7774f] transition-all duration-300'
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 pt-6 text-center text-gray-500'>
          © 2026 BrewCraft Coffee. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer