import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Loading() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='fixed inset-0 bg-white flex items-center justify-center z-[9999]'>
      <div className='flex items-center gap-2'>
        <motion.div
          animate={
            showText
              ? {
                  x: -20,
                  rotate: 0
                }
              : {
                  rotate: 360
                }
          }
          transition={
            showText
              ? {
                  duration: 0.8,
                  ease: 'easeInOut'
                }
              : {
                  rotate: {
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                  }
                }
          }
          className='relative w-25 h-25 rounded-full overflow-hidden'
        >
          <div className='absolute inset-0 rounded-full bg-[#7db39c]' />

          <div className='absolute top-0 left-0 w-1/2 h-full bg-gray-300/80 blur-md' />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            x: 15
          }}
          animate={
            showText
              ? {
                  opacity: 1,
                  x: 0
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className='logo-font text-6xl text-[#2b2b2b] leading-none border-b-3 border-yellow-700 pb-2'
        >
          Coffee
        </motion.h1>
      </div>
    </div>
  )
}

export default Loading