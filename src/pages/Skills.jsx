import React from 'react'

const Skills = ({items, title, subtitle, mykey}) => {
  const content = items.map((item)=>(
          <li key={mykey} className="card__list_item">
                  <span className="check">
                    <svg
                      className="check_svg"
                      fill="#FFA500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm md:text-xl  text-emerald-400">{item}</span>
                </li>
        )
      )

  return (  
    <div id="card" className='mt-10 lg:flex-1 max-w-[90vw] w-[95%] shrink-x-1 max-w-[90vw] sm:max-w-[40vw] sm:space-x-auto lg:space-x-auto lg:mx-4 mx-auto '>
      <div className="card__border"></div>
      <div className="card_title__container">
        <p className="card_title text-sm md:text-xl lg:text-2xl">{title}</p>
        <p className=" text-sm">{subtitle}</p>
      </div>
      <hr className="line" />
      <ul className="card__list">            
        {content}
      </ul>
    </div>
    
  )
}

export default Skills