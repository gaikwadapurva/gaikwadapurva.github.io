import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiBookshelf} from 'react-icons/gi';
import {FaLaptopCode} from 'react-icons/fa';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} rel="noreferrer">
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} rel="noreferrer">
        <AiOutlineUser />
      </a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} rel="noreferrer">
        <GiBookshelf />
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} rel="noreferrer">
        <FaLaptopCode />
      </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} rel="noreferrer">
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav