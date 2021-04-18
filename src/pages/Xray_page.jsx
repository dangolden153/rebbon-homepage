import React from 'react'
import {motion} from 'framer-motion'
import pics from '../picture/xray.jpg'
function Xray_page() {
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
      TB RADIOLOGY XRAY ...
    </motion.h1>
  </div>
    )
}

export default Xray_page
