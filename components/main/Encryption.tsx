"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  
  return (
    <div className="pt-24 ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0  lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7" style={{color: "#34f5c5"}}>Messages that sound like you</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Build relationships faster</p>
            <p className="mt-6 text-lg leading-8 text-white">
            Never miss an opportunity to show fans you care, with memory that goes back to the day you started on OnlyFans.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {/* {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))} */}
            </dl>
          </div>
        </div>
        <div style={{marginTop: "-8rem"}}>
          <Image
            src="/info.webp"
            alt="Product screenshot"
            className="w-[25rem] p-4 mt-4 max-w-none mb-12 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[42rem] md:-ml-4 lg:-ml-0"
            width={1432}
            height={442}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Encryption;
