import React from 'react'
import downIcon from '../assets/downIcon.svg'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const GoDown = () => {
    const elementRef = useRef(null);    

  useEffect(() => {
    const element = elementRef.current;

    // GSAP Infinite Timeline
    const timeline = gsap.timeline({ repeat: -1 }); // repeat: -1 makes it infinite

    timeline
      .to(element, {
        y: 5, // Move down by 500px
        opacity: 0, // Ensure visibility
        duration: 1, // Time for animation
        ease: "power1.inOut",
      })
      .to(element, {
        opacity: 1, // Fade out
        duration: 2.5, // Time for fade-out
        onComplete: () => {
          // Reset position and opacity immediately
          gsap.set(element, { y: 9, opacity: 1 });
        },
      });
  }, []);

  return (
    <div className='relative max-w-[90vw] mx-auto hidden md:flex'>
      <div className='absolute static -mt-[10%] ml-[50%] '>
        <div  id="fade-in-icon" className='absolute h-20 w-10  bg-red-700 rounded-full'>
            <img ref={elementRef}  src={downIcon} />
            <img  className='scale-50' src={downIcon} />
        </div>
      </div>
    </div>
  )
}

export default GoDown