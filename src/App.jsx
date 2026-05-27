import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import assets from './assets/assets'

function App() {

  return (
    <>
      <Navbar/>
      <Homepage/>
      <div className=''>
        <img 
          className="flex justify-between items-center -mt-24"
          src={assets.banner1}
          alt="" 
        />
      </div>
      <About/>
    </>
  )
}

export default App
