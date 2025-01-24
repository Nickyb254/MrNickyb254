import React, {useEffect, useRef} from 'react'
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { info } from './info';
import InfoCarousel from '../components/InfoCarousel';
import PhotoStyle from '../components/PhotoStyle'

// Initialize GSAP ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const Home = () => {  
 
  
  return (
    <section id='about' className='max-w-[90vw] mx-auto flex md:flex-row flex-col gap-[10vh] sm:gap-4  '>
      <div className='md:flex-1  md:pt-16 relative'>        
      <p className='pl-3 pt-[2vh] lg:pt-[10vh] '>
        <span className='md:leading-loose text-3xl md:text-4xl lg:text-7xl z-10'>Nixon Bombo,</span> <br/>
        <span className=' text-2xl  lg:text-5xl text-emerald-400'> Full-Stack Web Developer </span>
      </p>
      <div id='info' className='mt-8 absolute l-0'>
        <InfoCarousel info={info} />
      </div>
      
      </div>
      <div className='md:flex-2 row flex-end sm:pl-18'>
      <PhotoStyle/>
      </div>
    </section>
  )
}

export default Home

