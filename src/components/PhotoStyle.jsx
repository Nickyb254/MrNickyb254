import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import nick from '../assets/Nixon Passport Photo.jpg'


gsap.registerPlugin(useGSAP)

const PhotoStyle = () => {
  const container = useRef()

  useGSAP(
    ()=>{
      gsap.fromTo('#box', { opacity: 0, y: 50 }, // Start off-screen and invisible
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1 , // Stagger delay between cards
        })
      gsap.to('#me', {x: -90, y: -20})
    },{scope: container}
  )

  

  return (
    <section className='py-[20vh]'>
    
      <div id='container'>
          <p>Profile Pic:</p>
      <div className='relative book' >
          <img id='me' className=" w-[70%] " src={nick} />
          <div id='box' className=' book-cover bg-gray-400 shadow-2xl ring-offset-8 ring-green '></div>
      </div>
      </div>
    </section>
  )
}

export default PhotoStyle