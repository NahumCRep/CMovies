import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = ({children, delayValue, classAsigned}) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
            x: -200
        }}
        animate={{
            opacity: 1,
            x: 0
        }}
        transition={{
            duration: 1,
            delay: delayValue ? Number(delayValue) : 0
        }}
        className={classAsigned}
    >
        {children}
    </motion.div>
  )
}

export default MotionDiv