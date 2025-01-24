import React from 'react'

const History = () => {
  return (
    <div className='text-center mt-[10%] mb-[10%]'>
        <h2 className=' text-4xl lg:text-5xl py-16 px-[12%]  font-bold text-white'>Work Experience</h2>
        <div className='flex wrap gap-12 leading-snug text-xl md:text-3xl flex-col md:flex-row max-w-[90vw] m-auto '>
            <div className='my-card flex-1 shadow-white drop-shadow-2xl' >
                <p className='font-semi-bold sm:text-2xl md:text-3xl text-white'> Past </p> <br/>
                <p>
                    I have worked in the IT space for over 5 years. My duties ranged from hardware maintenance, graphic designing and software development.
                </p>
            </div>
            <div className='my-card flex-1 shadow-white drop-shadow-2xl' >
                <p className='font-semi-bold sm:text-2xl md:text-3xl text-white'>Present </p><br/>
                <p>
                    I have speciliased in Web development primarily using the MERN Stack. I am well experienced in MVC architecture and am continously adding to my skillset.
                </p>
            </div> 
            <div className='my-card flex-1 shadow-white drop-shadow-2xl'>
                <p className='font-semi-bold sm:text-2xl md:text-3xl text-white'>Future </p><br/>
                <p>
                    I want to be part of a team that builds a robust systems with continuous roll out of modern features.
                </p>            
            </div>
     </div>
    </div>
  )
}

export default History