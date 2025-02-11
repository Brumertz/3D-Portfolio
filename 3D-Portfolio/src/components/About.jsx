import React from "react";
import { Tilt } from 'react-tilt'; 
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[250px] padding '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' w-full  green-pink-gradient  rounded-[19px]'
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' padding  rounded-[21px] py-4 px-12 min-h-[260px] flex justify-evenly items-center flex-col'
        style={{ backgroundColor: "var(--color-tertiary)" }}
        >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain '
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className=" padding section-sub">Introduction</p>
        <h2 className=" padding section-head">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 padding text-[20px] max-w-3xl leading-[30px]'
        style={{ color: "var(--color-secondary)" }}
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");