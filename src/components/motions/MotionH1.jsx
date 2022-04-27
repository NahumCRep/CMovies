import React from 'react'
import { motion } from 'framer-motion'

const MotionH1 = ({ children, delayValue, classAsigned }) => {
    return (
        <motion.h1
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
        </motion.h1>
    )
}

export default MotionH1