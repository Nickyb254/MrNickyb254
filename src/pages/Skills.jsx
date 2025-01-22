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
                        clip-rule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className=" text-emerald-400">{item}</span>
                </li>
        )
      )

  return (  
    <div>
        
        <div id="card">
          <div className="card__border hover:cursor-pointer"></div>
          <div className="card_title__container">
            <span className="card_title">{title}</span>
            <p className=" text-sm">{subtitle}</p>
          </div>
          <hr className="line" />
          <ul className="card__list flex col-2">            
            {content}
          </ul>
        </div>
    </div> 
  )
}

export default Skills