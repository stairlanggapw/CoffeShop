import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaStore } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='w-full mx-auto py-24 px-8 bg-gray-200'>
      <div className='grid lg:grid-cols-2 gap-12'>
        <div>
          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-[#f7f1ef] rounded-xl p-6 text-center border-2 border-[#b7774f]/20'>
              <FaPhoneAlt className='mx-auto text-3xl text-[#6b4c4c] mb-3' />
              <h3 className='font-bold mb-2'>Phone</h3>
              <p className='text-gray-600'>+62 812-3456-7890</p>
            </div>
            <div className='bg-[#f7f1ef] rounded-xl p-6 text-center border-2 border-[#b7774f]/20'>
              <FaWhatsapp className='mx-auto text-3xl text-[#6b4c4c] mb-3' />
              <h3 className='font-bold mb-2'>Whatsapp</h3>
              <p className='text-gray-600'>+62 812-3456-7890</p>
            </div>
            <div className='bg-[#f7f1ef] rounded-xl p-6 text-center border-2 border-[#b7774f]/20'>
              <FaEnvelope className='mx-auto text-3xl text-[#6b4c4c] mb-3' />
              <h3 className='font-bold mb-2'>Email</h3>
              <p className='text-gray-600'>hello@brewcraft.com</p>
            </div>
            <div className='bg-[#f7f1ef] rounded-xl p-6 text-center border-2 border-[#b7774f]/20'>
              <FaStore className='mx-auto text-3xl text-[#6b4c4c] mb-3' />
              <h3 className='font-bold mb-2'>Our Shop</h3>
              <p className='text-gray-600'>
                Jl. Coffee Street No.10
              </p>
            </div>

          </div>
          <div className='overflow-hidden rounded-xl shadow-lg w-[580px] h-[300px]'>
            <iframe
              title='Google Maps'
              src='https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed'
              className='w-full h-full border-0'
            />
          </div>
        </div>
        <div>
          <h2 className='text-5xl font-bold mb-3'>
            Get In Touch
          </h2>
          <p className='text-gray-500 mb-8'>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <form className='space-y-5'>
            <div>
              <label className='block mb-2 font-medium'>
                Name
              </label>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-700'
              />
            </div>
            <div>
              <label className='block mb-2 font-medium'>
                Email
              </label>
              <input
                type='email'
                placeholder='your@email.com'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-700'
              />
            </div>
            <div>
              <label className='block mb-2 font-medium'>
                Subject
              </label>
              <input
                type='text'
                placeholder='Subject'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-700'
              />
            </div>
            <div>
              <label className='block mb-2 font-medium'>
                Message
              </label>
              <textarea
                rows='5'
                placeholder='Type here...'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-yellow-700'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-[#c9875b] text-white py-4 rounded-full font-medium hover:opacity-90 transition'
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact