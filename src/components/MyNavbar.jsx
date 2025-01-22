import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 shadow-md px-16 py-2 text-white bg-gradient-to-r from-[#1f2a21] to-[#230426]'>
        <div className='flex justify-between max-w-[90vw] m-auto'>
        <p className='py-3 font-thin text-4xl'>Web Portfolio</p>
        <div className='flex space-x-8 '>
          <a href='#about'>
            <button className='my-btn'>About</button>
          </a>
          <a href='#projects'>
            <button className='my-btn' >Projects</button>
          </a>
          <a href="#contact" className='pt-2' >
            <button className='btn'>Contact</button>
          </a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar