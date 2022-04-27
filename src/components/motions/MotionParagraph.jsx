import React from 'react'
import { motion } from 'framer-motion'

const MotionParagraph = ({ children, delayValue, classAsigned }) => {
    return (
        <motion.p
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
        </motion.p>
    )
}

export default MotionParagraph