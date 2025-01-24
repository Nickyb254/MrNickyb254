import React, {useEffect} from 'react'
import Home from '../pages/Home'
import MyNavbar from './MyNavbar'
import Projects from '../pages/Projects'
import GoDown from '../components/GoDown'

import History from '../pages/History'
import BackImg from '../assets/BackgroundImage.webp';
import gsap from "gsap";
import Skills from '../pages/Skills';
import {items, backenditems, graphicSkills} from '../pages/info'
import Footer from '../pages/Footer'
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize GSAP ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const BodyLayout = () => {
    

  return (
    <>
    <MyNavbar/>
    <main className=' text-amber-400'>  
      <Home/>
      <GoDown/>
      <History/>
      <div >
      <h2 className='text-center text-4xl lg:text-5xl py-8 md:py-16 px-[12%]  font-bold text-white' >Skills</h2>  
      <div className='max-w-[90vw] mx-auto mb-[10vh] lg:flex lg:place-content-evenly px-8 '> 
        <Skills key={1} items={items} title={'Frontend Development'} subtitle={'Responsive, intuitive & beautiful UI'} />
        <Skills key={2} items={backenditems} title={'Backend Development'} subtitle={'Fast, scalable & secure user experince'} />        
        <Skills key={3} items={graphicSkills} title={'Graphic Designing'} subtitle={'Effective application of design principles'} />        
        </div>
      </div> 
      <div>
      <h2 className='text-center text-4xl lg:text-5xl py-16 px-[12%]  font-bold text-white' >Projects</h2>  
      <Projects/>
      </div> 
      <Footer/>
    </main>
    </>
  )
}

export default BodyLayout

// useEffect(() => {
//     // GSAP animation for the background opacity
//     gsap.to("main.bg-cover", {
//       scrollTrigger: {
//         trigger: "main.bg-cover",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//       opacity: 0.9, // Adjust to the desired lower opacity as you scroll
//     });
// })