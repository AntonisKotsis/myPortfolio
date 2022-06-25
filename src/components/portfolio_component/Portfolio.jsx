import React from 'react'
import './portfolio.css'
import Projects from './projects'

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
        Projects.map(({id,image,title,github})=>{
          return(
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={image} alt="project" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item_cta'>
                <a href={github} className='btn btn-primary' target='_blank' >Github Repo</a>
              </div>
            </article>
          )
        })

}
      </div>

    </section>
  )
}

export default Portfolio;