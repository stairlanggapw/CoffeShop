import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import assets from './assets/assets'

function App() {

  return (
    <>
      <Navbar/>
      <Homepage/>
      {/* <div className='flex justify-between h-[55px]'>
        <img 
          className="flex justify-between items-center -mt-24"
          src={assets.banner1}
          alt="" 
        />
      </div> */}
      <About/>
      <div
        className='bg-cover bg-center w-full h-[500px]'
        style={{ backgroundImage: `url(${assets.wallpaper})` }}
      >
        <Menu />
      </div>
      <Gallery/>
      {/* <div className='flex justify-between h-[55px]'>
        <img 
          className="flex justify-between items-center -mb-30"
          src={assets.banner1}
          alt="" 
        />
      </div> */}
    </>
  )
}

export default App
