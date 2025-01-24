import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer id='contact' className='py-[4em] '>
        <div className='max-w-[90vw] m-auto'>
            <p><a href={'https://github.com/Nickyb254'} target='_blank' >GitHub</a>  |   <a href='www.linkedin.com/in/nixon-bombo-7685a1116' target='_blank'> Linkedin</a> | Resume  </p>  <hr/> 
    <p className='text-center'>&copy; 2025 Nixon Designs. All rights reserved.</p>

    <p className='text-center text-sm pt-3'>Email: nickyb254@gmail.com </p>
    </div>
    </footer>

  )
}

export default Footer