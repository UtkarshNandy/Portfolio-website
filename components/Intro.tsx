"use client";

import React, { useState, useRef, useEffect } from "react";
import { Poppins } from "@next/font/google";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"], // Select the weights you need
});

const Intro = () => {
  return (
    <div>
      <div className={`${poppins.className} text-5xl`}>
        <h1 className="pt-48 pl-48 animate-fade-right animate-duration-[4000ms] text-white">
          Hey, I am <span className="">Utkarsh,</span>
        </h1>
        <h1 className="pl-48 animate-fade-left animate-duration-[3000ms] animate-delay-1000  text-white">
          welcome to my space!
        </h1>
      </div>
    </div>
  );
};

export default Intro;
