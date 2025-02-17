import React from "react";
import { motion } from "framer-motion";

import "../styles.css";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=' padding bg-black rounded-3xl w-[230px] xs:w-full'
  >
    <p className='  text-white font-black text-[48px]'>"</p>

    <div className='mt-1  '>
      <p className='text-white tracking-wider text-[16px]'>{testimonial}</p>

      <div className='mt-7   flex justify-between items-center gap-1'>
        <div className=' flex-1 flex flex-col'>
          <p className='text-white  font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1  text-[12px]'
          style={{ color: "var(--color-secondary)" }}>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-12 h-12 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`xl:mt-12 padding  rounded-[20px]`}
    style={{ backgroundColor: "var(--color-tertiary)", marginLeft: "25px" }}
  
 >
      <div
        className={` padding rounded-2xl min-h-[180px]`}
      >
        <motion.div variants={textVariant()}>
          <p className='section-sub'>What others say</p>
          <h2 className='section-head'>Testimonials.</h2>
        </motion.div>
      </div>
      <div className='padding m-24   flex flex-wrap gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
