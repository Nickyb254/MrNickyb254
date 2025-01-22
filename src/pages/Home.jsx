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
    <section id='about' className='max-w-[90vw] m-auto flex gap-4  '>
      <div className='flex-1  pt-16 relative'>        
      <p className='pl-3 pt-[10vh] '>
        <span className='leading-loose  text-7xl z-10'>Nixon Bombo,</span> <br/>
        <span className='text-5xl text-emerald-400'> Full-Stack Web Developer </span>
      </p>
      <div id='info' className='mt-8'>
        <InfoCarousel info={info} />
      </div>
      
      </div>
      <div className='flex-2 row flex-end sm:pl-18'>
      <PhotoStyle/>
      </div>
    </section>
  )
}

export default Home

