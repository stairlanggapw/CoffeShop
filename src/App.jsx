import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import ChooseUs from './components/ChooseUs'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import assets from './assets/assets'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div
        className='bg-cover bg-center w-full h-[700px]'
        style={{ backgroundImage: `url(${assets.bg1})`}}
      >
        <Navbar/>
        <Homepage/>
      </div>
      <ChooseUs />
      <About/>
      <Menu />
      <Gallery/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
