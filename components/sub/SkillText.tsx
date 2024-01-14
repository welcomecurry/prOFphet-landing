"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import "./animation.css"

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' style={{marginTop: "-5rem"}}>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
    <h2 className="h2 font-extrabold max-w-5xl text-4xl md:text-7xl text-center mx-auto mt-20">
      <div className="mb-1 relative">

        More 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Interactions{" "}
        </span>
      </div>
      <div className="mb-1 relative">

        More
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Fans{" "}
        </span>
      </div>
      <div className="relative">

        More 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}prOFphet{" "}
        </span>
      </div>
    </h2>
    <div className="emoji absolute animate-custom-float left-48">💸</div>
    <div className="emoji absolute animate-custom-float left-48 top-1/2">💸</div>
    <div className="emoji absolute animate-custom-float left-48 top-40 m-4">💰</div>
    <div className="emoji absolute animate-custom-float right-1/2 top-50">💸</div>
    <div className="emoji absolute animate-custom-float right-1/2 top-32">💸</div>
    <div className="emoji absolute animate-custom-float right-1/2 top-44">💰</div>
    


        </motion.div>
    </div>
  )
}

export default SkillText