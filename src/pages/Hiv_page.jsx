import React from 'react'
import pics from '../picture/hiv.jpg'
import {motion} from 'framer-motion'

function Hiv_page() {
    return (
        
    <div className="container">
      <img src={pics} alt="blood img" className="container_img" />
      <motion.h1
        className="content"
        animate={{
          scale: 1.3,
          textShadow: " 0px 0px 8px rgb(255,255,255)",
          originZ: 0,
        }}
        transition={{ yoyo: Infinity, duration: .6 }}
      >
        HIV BLOOD DRAW TEST ...
      </motion.h1>
    </div>
       
    )
}

export default Hiv_page
