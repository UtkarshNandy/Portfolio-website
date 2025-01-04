"use client";

import React, { useState, useRef, useEffect } from "react";
import { Poppins } from "@next/font/google";
import Aboutme from "./Aboutme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"], // Select the weights you need
});

const Intro = () => {
  return (
    <div>
      <div className={`${poppins.className} text-5xl`}>
        <h1 className="pt-16 pl-48 animate-fade-right animate-duration-[4000ms] text-white">
          Hey, I am <span className="">Utkarsh,</span>
        </h1>
        <h1 className="pl-48 mt-2 animate-fade-left animate-duration-[3000ms] animate-delay-1000  text-white">
          welcome to my space!
        </h1>
        <button className="bg-slate-100 hover:bg-violet-900 text-xl py-1 px-2 mt-5 ml-48 rounded-full animate-fade-up animate-delay-[2000ms] animate-duration-[3000ms]">
          About me
        </button>
      </div>
    </div>
  );
};

export default Intro;
