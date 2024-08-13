import React from 'react'
import './portfolio.css'
import IMG1  from '../../assets/portfolio1.jpg'
import IMG2  from '../../assets/gallery1.jpg'
import IMG3  from '../../assets/dress.jpg'
import IMG4  from '../../assets/portfolio1.jpg'
import IMG5  from '../../assets/portfolio1.jpg'
import IMG6  from '../../assets/portfolio1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio__container">
   <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>E-commerce website </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn' target='_blank'>Githb</a>
          <a href="https://ecommerce-d2r.pages.dev" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3> Athentication project</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Gunasekaran12345/Athentication-project-client.git"className='btn' target='_blank'>Githb</a>
          <a href="athentication.pages.dev" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>   Gallery App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Gunasekaran12345/Gallery-app.git"className='btn' target='_blank'>Githb</a>
          <a href="https://my-gallery-app.pages.dev  /" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
          </article>
       
          {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn' target='_blank'>Githb</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn' target='_blank'>Githb</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn' target='_blank'>Githb</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article> */}
      </div>
    </section>
  )
}

export default Portfolio 