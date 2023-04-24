import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';
import {SiLeetcode} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/apurva-gaikwad/' target='_blank' rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href='https://github.com/gaikwadapurva/' target='_blank' rel="noreferrer">
            <GoMarkGithub />
        </a>
        <a href='https://leetcode.com/gaikwadapurva65' target='_blank' rel="noreferrer">
            <SiLeetcode />
        </a>
    </div>
  )
}

export default HeaderSocials