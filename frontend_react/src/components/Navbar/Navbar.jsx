/* eslint-disable no-lone-blocks */
import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    
    <nav className="app__navbar">
      {
      /*The double undersore is a BEM styling method and it allows us to use css more easily*/
      }
      <div className='"app__navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
    {/* This is the clickable navigation bar. It maps to the click of whatever the text is */}
    <ul className='app__navbar-links'>
      {['Listen', 'Create', 'Fav_Artist', 'Fav_Genre'].map((item) => (
        <li className = "app__flex p-text" key={`link-${item}`}> 
        <div />
        <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>

    <div className='app__navbar-menu'>
      <HiMenuAlt4 onClick={() => setToggle(true)} />
      {
        toggle && (
          <motion.div
            whileInView={{ x: [300,0] }}
            transition={{ duration:0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-links'>
            {['Listen', 'Create', 'Fav_Artist', 'Fav_Genre'].map((item) => (
              <li key={item}> 
               <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
     </div>
    </nav>
  )
}

export default Navbar