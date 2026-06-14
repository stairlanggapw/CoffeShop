import { motion } from 'framer-motion'
import { GiCoffeeBeans } from 'react-icons/gi'
import { MdOutlineCoffeeMaker } from 'react-icons/md'
import { FaCouch } from 'react-icons/fa'
import { LuCroissant } from 'react-icons/lu'

function WhyChooseUs() {
  const features = [
    {
      icon: <GiCoffeeBeans />,
      title: 'Premium Beans',
      description: 'Carefully sourced coffee beans from trusted farms for rich and authentic flavors.'
    },
    {
      icon: <MdOutlineCoffeeMaker />,
      title: 'Expert Barista',
      description: 'Every cup is crafted with passion and precision by experienced baristas.'
    },
    {
      icon: <FaCouch />,
      title: 'Cozy Atmosphere',
      description: 'A warm and welcoming space designed for relaxing, working, and meeting friends.'
    },
    {
      icon: <LuCroissant />,
      title: 'Fresh Daily',
      description: 'Fresh pastries and desserts baked daily to perfectly complement your coffee.'
    }
  ]

  return (
    <section className='py-32 bg-white' id='why-us'>
      <div className='max-w-7xl mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='text-center mb-16'
        >
          <p className='text-[#b7774f] tracking-[5px] text-sm font-medium mb-4'>
            WHY CHOOSE US
          </p>
          <h1 className='text-5xl font-bold font-serif mb-5'>
            Crafted For Every Coffee Moment
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            More than just coffee, we create experiences that bring comfort, quality, and connection in every visit.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: 'easeOut'
              }}
              whileHover={{ y: -10 }}
              className='bg-[#faf7f2] rounded-[30px] p-8 text-center border-4 border-[#eadfd6] shadow-lg'
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12 + 0.15
                }}
                className='w-18 h-18 mx-auto mb-6 rounded-full bg-[#b7774f]/10 flex items-center justify-center text-4xl text-[#b7774f]'
                style={{ willChange: 'opacity' }}
              >
                {feature.icon}
              </motion.div>

              <h3 className='text-xl font-bold mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-500 leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs