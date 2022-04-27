import React from 'react'
import { motion } from 'framer-motion'

const MotionButton = ({ children, delayValue, classAsigned }) => {
    return (
        <motion.button
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1,
                delay: delayValue ? Number(delayValue) : 0
            }}
            className={classAsigned}
        >
            {children}
        </motion.button>
    )
}

export default MotionButton