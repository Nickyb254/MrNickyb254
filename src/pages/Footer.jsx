import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer id='contact' className='py-[4em] '>
        <div className='max-w-[90vw] m-auto'>
            <p><a href={'https://github.com/Nickyb254'} target='_blank' >GitHub</a>  | Linkedin | Resume  <hr/>  </p>
    <p className='text-center'>&copy; 2025 Nixon Designs. All rights reserved.</p>

    <p className='text-center text-sm pt-3'>Email: nickyb254@gmail.com </p>
    </div>
    </footer>

  )
}

export default Footer