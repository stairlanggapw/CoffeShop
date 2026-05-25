import React from 'react'
import assets from '../assets/assets'
import { FiSearch } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-4'>
        <div>
            <img 
            className='w-25 cursor-pointer'
            src={assets.logo} 
            alt="logo" 
            />
        </div>
        <ul className='flex gap-8 font-medium text-gray-700'>
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
                About
            </li>
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
                Menu
            </li>
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
                Gallery
            </li>
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
                Testimony
            </li>
            <li className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-800 after:transition-all after:duration-300 hover:after:w-full">
                Contact
            </li>
        </ul>
        <div className='flex items-center gap-10 text-2xl'>
            <div className='flex hover:cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                <FiSearch/>
            </div>
            <div className='flex hover:cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                <FiShoppingCart/>
            </div>
        </div>
        <div>
            <button className='bg-yellow-800 text-white px-5 py-2 rounded-full hover:shadow-2xl hover:shadow-yellow-900/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                Log in / Sign in
            </button>
        </div>
    </nav>
  )
}

export default Navbar
