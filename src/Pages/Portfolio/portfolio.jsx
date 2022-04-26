import React from 'react'
import "./portfolio.scss"
import IMG1 from "../../Assets/empty.jpg"

export const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    },
    {
      id: 2,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    },
    {
      id: 3,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    },
    {
      id: 4,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    },
    {
      id: 5,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    },
    {
      id: 6,
      image: IMG1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github: "https://github.com",
      gemo: "https://github.com"
    }
  ]
  return (
    <section>
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} rel='noreferrer' className='btn' target="_blank">github</a>
                  <a href={demo} rel='noreferrer' className='btn btn-primary' target="_blank">live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

