/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import "./contact.scss";
import {motion, useInView} from "framer-motion"; 
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';



const variants = {
    initial: {
        y: 500, 
        opacity: 0, 
    }, 
    animate: {
        y: 0,
        opacity: 1, 
        transition: {
            duration: 0.5, 
            staggerChildren: 0.1, 
        },
    },
};


const Contact = () => {
 
    const ref = useRef(); 
    const formRef = useRef(); 
    const [error, setError] = useState(false); 
    const [success, setSuccess] = useState(false)
    const isInView = useInView(formRef, { margin: "-100px" });

    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_34076sr', 'template_a82oh7n', formRef.current, {
                publicKey: '0-CflnbuaQH85nHYJ',
            })
            .then((result) => {
                setSuccess(true); // Set success to true upon successful email submission
                setError(false); // Reset error state
            })
            .catch((error) => {
                setError(true); // Set error to true upon failure
                setSuccess(false); // Reset success state
            });
    };
    

    return(

        <motion.div className= "contact" variants={variants} initial="initial" whileInView= "animate">
            <motion.div className="textContainer" variants = {variants}>
            <motion.h1  variants={variants}> Lets Get Started </motion.h1>
            <motion.div className="item" variants={variants}>
            <h2>Email me</h2>
            <span> adam.lee.olson@outlook.com</span>
            </motion.div>
            <motion.div className="item"  variants={variants}>
            <h2>LinkedIn</h2>
            <span> https://www.linkedin.com/in/adam-olson-aab562201/ </span>
            </motion.div>
            <motion.div className="item"  variants={variants}>
            <h2>Phone</h2>
            <span>+1(715)245-7219</span>
            </motion.div>
        </motion.div>
        
        <div className="formContainer">
           
            <form
            ref= {formRef}
            onSubmit= {sendEmail}
            initial={{opacity: 0 }}
            whileInView={{opacity: 1}}
            transition= {{delay:4, duration: 1 }}
            
            >
                <input type = "text" required placeholder = "Name" name="name"/>
                <input type = "email" required placeholder = "email" name= "email"/>
                <textarea rows={8} placeholder= "Message Me" name= "message"/>
                <button>Submit</button>
                {error  && "Error"}
                {success && "Success"}
            </form>
        </div>
        </motion.div>
    )
}

export default Contact