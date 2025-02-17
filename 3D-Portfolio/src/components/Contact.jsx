import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "../styles.css";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_d9glfxd', //service ID
        'template_npke97g', //template ID
        
        {    
          from_name: form.name,
          to_name: "Brandon Brmz",
          from_email: form.email,
          to_email: "dorbnan20@gmail.com",
          message: form.message,
        },
          'pfeWWfEna0eS6SnzI'//user ID
        )  
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className='padding xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='padding flex-[0.75] bg-black p-8 rounded-2xl'
        
      >
        <p className=" section-sub">Get in touch</p>
        <h3 className=" section-head "
        style={{marginBottom: "15px"}}
        >Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium'
            style={{marginBottom: "15px"}}
            >Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='padding py-5 px-6  text-white  outline-none  font-medium rounded-lg'
              style={{placeholder: {color: "var(--text-secondary)"},
              backgroundColor: "var(--color-tertiary)",
              borderRadius: "20px",
            }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium '
            style={{marginBottom: "15px"}}
            >Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='padding  py-4 px-6  text-white outline-none  font-medium rounded-lg'
              style={{placeholder: {color: "var(--text-secondary)"},
              backgroundColor: "var(--color-tertiary)",
              borderRadius: "20px",
            }}/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium '
            style={{marginBottom: "15px"}}
            >Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='padding  py-4 px-6  text-white  outline-none  font-medium rounded-lg'
              style={{placeholder: {color: "var(--text-secondary)"},
              backgroundColor: "var(--color-tertiary)",
              borderRadius: "20px",
            }}/>
          </label>

          <button
            type='submit'
            className=' padding  py-3 px-8  outline-none w-fit text-white font-bold shadow-md rounded-3xl'
            style={{placeholder: {color: "var(--text-secondary)"},
            backgroundColor: "var(--color-tertiary)",
            borderRadius: "20px",
          }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
