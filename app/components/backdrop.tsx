import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode,
    onClick: () => void
}

const Backdrop = (props: Props) => {
  return (
    <motion.div
        className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-20 flex items-center justify-center'
        onClick={props.onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {props.children}
    </motion.div>
  )
}

export default Backdrop