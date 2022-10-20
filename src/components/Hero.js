import React from "react";
import bgV from "../assets/dept_1.mp4";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center shadow-md w-full">
      <div className="bg-repeat-x h-52 overflow-hidden">
        <video src={bgV} autoPlay loop muted />
      </div>
      <h1 className="absolute font-bold uppercase w-full text-center px-5 md:px-60 text-2xl py-auto duration-100">
        <span className="leading-snug tracking-widest text-slate-100 md:text-7xl motion-safe:animate-pulse ">
          Wellcome
        </span>
        <br className="md:hidden" />
        <span className="leading-snug md:px-3 text-slate-100 text-xl md:text-5xl">
          to
        </span>
        <br className="md:hidden" />
        <span className="leading-snug text-indigo-400 md:text-7xl">
          photo gallery
        </span>
      </h1>
    </div>
  );
};

export default Hero;
