import { useState } from 'react'
import Topbar from './components/Topbar'
import Home from './sections/Home'
import About from './sections/About'
import './styles/App.css'

function App() {

  return (
    <div className='wrapper scroll-smooth'>
      <div className='snap-x'>
        <Topbar />
        <Home />
        {/* <About /> */}
      </div>
    </div>
  )
}

export default App
