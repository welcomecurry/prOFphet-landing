"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return ( 
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 mt-10 sm:mt-20 md:px-10 lg:px-20 xl:px-40 w-full z-[20]"
    >
      <div className="lg:w-1/2 h-full flex flex-col gap-5 justify-center m-auto text-start mt-8">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            No agencies or chatters needed!
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl lg:text-8xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            OnlyFans
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              AI{" "}
            </span>
            Chatbot 💸
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Get AI to write your messages for you and 30x your PPVs
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] "
        >
          Try for free!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="lg:w-2/5 w-full h-full"
      >
        <div className="container mx-auto p-4 sm:p-8 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 border-2 border-white/20 mt-8">
          <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted playsInline>
            <source src="./heroVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
