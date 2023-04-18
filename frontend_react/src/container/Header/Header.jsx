import React from 'react';

import './Header.scss';
import {motion} from 'framer-motion';

import {images} from '../../constants';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{x: [-100, 0], opacity: [0,1] }}
      transition={{duration: 1}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft:20}}>
              <p className="p-text"><i>API IN ACTION</i></p>
              <h1>Creating Your</h1>
              <h1>Custom Playlist?</h1>
              <h1>We Will Do That For You <span> 🎵</span></h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <button className="playlistButton">Generate Your Custom Playlist</button>
          </div>
        </div>
         </motion.div>
      <img src={images.profile} alt="profile_bg"></img>
      </div>
  )
}

export default Header