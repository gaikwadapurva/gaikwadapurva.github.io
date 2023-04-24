import React from 'react';
import './experience.css';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import { useState } from 'react';

const Experience = () => {
  const [isRia, setRia] = useState(true);
  const [isItiviti, setItiviti] = useState(false);
  const [isMediaNet, setMediaNet] = useState(false);

  const handleClickRia = event => {
    // 👇️ toggle shown state
    setRia(isRia => !isRia);
    if (isItiviti === true) {
      setItiviti(false);
    }
    if (isMediaNet === true) {
      setMediaNet(false);
    }
  };

  const handleClickItiviti = event => {
    // 👇️ toggle shown state
    setItiviti(isItiviti => !isItiviti);
    if (isRia === true) {
      setRia(false);
    }
    if (isMediaNet === true) {
      setMediaNet(false);
    }
  };

  const handleClickMediaNet = event => {
    // 👇️ toggle shown state
    setMediaNet(isMediaNet => !isMediaNet);
    if (isRia === true) {
      setRia(false);
    }
    if (isItiviti === true) {
      setItiviti(false);
    }
  };

  return (
    <section id='experience'>
      <h5>Everything About My Work Life</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__details">
          <div className='experience__detail'>
            <div className={isRia ? 'experience_title active_title' : 'experience_title'}>
              <h5>
                <div>
                  <span className='job_title'>
                    Software Development Engineer @ RIA Advisory LLP
                  </span>
                  <span className='tenure'>Jan 2022 - Present</span>
                </div>
              </h5>
              <div className="show__description btn-round btn-round-small btn-round-light" onClick={handleClickRia}>
                {isRia ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {(isRia && !isItiviti && !isMediaNet) ? (
              <div className='job_description'>
                <small>
                  <MdLocationOn className='location__icon' />
                  &nbsp; Pune, Maharashtra, India
                  <a classname='company__website' href='https://riaadvisory.com/'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; riaadvisory.com
                  </a>
                  <ul className='exp'>
                    <li>
                      Working with Terafina (client) for its omni channel account onboarding and 
                      sales platform, developing solutions using Salesforce
                    </li>
                    <li>
                      Primarily responsible for application development
                    </li>
                    <li>
                      Managing multiple projects concurrently working with different teams throughout
                    </li>
                  </ul>
                </small>
              </div>
              ) : null
            }
            
          </div>

          <div className='experience__detail'>
            <div className={isItiviti ? 'experience_title active_title' : 'experience_title'}>
              <h5>
                <div>
                  <span className='job_title'>
                    Software Engineer @ Itiviti (Broadridge)
                  </span>
                  <span className='tenure'>Jul 2021 - Dec 2021</span>
                </div>
              </h5>
              <div className="show__description btn-round btn-round-small btn-round-light" onClick={handleClickItiviti}>
              {isItiviti ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {(!isRia && isItiviti && !isMediaNet) ? (
              <div className='job_description'>
                <small>
                  <MdLocationOn className='location__icon' />
                  &nbsp; Mumbai, Maharashtra, India
                  <a classname='company__website' href='https://www.broadridge.com/'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.broadridge.com
                  </a>
                  <ul className='exp'>
                    <li>
                      Played a key role in development of scalable features for fin-tech products and 
                      developed and improved back-end solutions and products for Goldman Sachs (client 
                      organization)
                    </li>
                    <li>
                      Focused on software development using Agile Methodologies
                    </li>
                  </ul>
                </small>
              </div>
              ) : null
            }
            
          </div>

          <div className='experience__detail'>
            <div className={isMediaNet ? 'experience_title active_title' : 'experience_title'}>
              <h5>
                <div>
                  <span className='job_title'>
                    Senior Product Operations Analyst @ Media.net
                  </span>
                  <span className='tenure'>Aug 2018 - Jun 2021</span>
                </div>
              </h5>
              <div className="show__description btn-round btn-round-small btn-round-light" onClick={handleClickMediaNet}>
                {isMediaNet ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {(!isRia && !isItiviti && isMediaNet) ? (
              <div className="job_description last_job_description">
                <small>
                  <MdLocationOn className='location__icon' />
                  &nbsp; Mumbai, Maharashtra, India
                  <a classname='company__website' href='https://www.media.net/'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.media.net
                  </a>
                  <ul className='exp'>
                    <li>
                      Played a key role in several ad tech products such as Content Monetization, 
                      Header Bidding, Prebid, etc.
                    </li>
                    <li>
                      Worked in collaboration with the Product Managers for revision of existing 
                      products and for the development of new ones
                    </li>
                    <li>
                      Worked with various web technologies to debug ad serving issues
                    </li>
                    <li>
                      Used MySQL for extraction of complex datasets in order to perform data 
                      analysis for finding useful insights on revenue optimizations
                    </li>
                  </ul>
                </small>
              </div>
              ) : null
            }
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience