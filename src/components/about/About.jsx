import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import {MdOutlineWork} from 'react-icons/md';
import {GiTechnoHeart} from 'react-icons/gi';
import {VscTasklist} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>

            <article className='about__card'>
              <GiTechnoHeart className='about__icon'/>
              <h5>Technologies</h5>
              <small>Java + Frontend</small>
            </article>

            <article className='about__card'>
              <VscTasklist className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Bachelors Degree focused in Computer Engineering, 
            a Software Engineer with a strong experience in developing robust and 
            scalable applications that could scale to supports tens of thousands of users, 
            interested in bridging the gap between Humans and Technology using Artificial Intelligence.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  )
}

export default About