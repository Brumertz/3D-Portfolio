import React from 'react';
import { motion } from 'framer-motion';


import "../styles.css";
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
<section className="relative w-full h-screen mx-auto">
  <div className={`absolute inset-0 top-[90px] max-w-7xl mx-auto flex padding-x flex-row items-start gap-5`}
  >  
    <div className=" flex flex-col items-center padding-x justify-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
      <div className="w-1 sm:h-80  h-40 violet-gradient"/>
    </div>
    <div>
        <h1 className="hero-head">Hi, I'm <span className="text-[#915eff]">Brandon</span></h1>
        <p className="hero-sub mt-2 text-white-100">I develop 3D visuals, user <br className="sm:block hidden "/> interfaces and web applications.</p>
    </div>
  </div>

  <ComputersCanvas />
  <div className='absolute xs:bottom-10 bottom-14  w-full flex justify-center items-center
  '>
    <a href="#about">
      <div 
        className="w-4 h-9 rounded-3xl  flex justify-center items-start p-2"
        style={{
          border: "2px solid var(--color-secondary)",
        }}
      >
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-2 h-2 rounded-full  mb-1'
          style={{
            backgroundColor: "var(--color-secondary)",
          }}
        />
      </div>
    </a>
  </div>
</section>
  );
};

export default Hero