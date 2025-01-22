import React from 'react'

const History = () => {
  return (
    <div className='text-center mt-[20%] mb-[10%]'>
        <h2 className='text-5xl py-16 px-[12%]  font-bold text-white'>Work Experience</h2>
        <div className='flex wrap gap-12 leading-snug  text-3xl md:col  max-w-[90vw] m-auto '>
            <div className='my-card shadow-white drop-shadow-2xl' >
                <p className='font-semi-bold text-4xl text-white'> Past </p> <br/>
                <p>
                    I have worked in the IT space for over 5 years. My duties ranged from hardware maintenance, graphic designing and software development.
                </p>
            </div>
            <div className='my-card ' >
                <p className='font-semi-bold text-4xl text-white'>Present </p><br/>
                <p>
                    I have speciliased in Web development primarily using the MERN Stack. I am well experienced in MVC architecture and am continously adding to my skillset.
                </p>
            </div>  
        </div>
        <div className='my-card mt-[10vh] max-w-[50vw] m-auto '>
        <p className='font-semi-bold text-4xl text-white'>Future </p><br/>
        <p className='leading-snug  text-3xl  '>
            I want to be part of a team that builds a robust systems with continuos roll out of modern features.
        </p>
            
        </div>
    </div>
  )
}

export default History