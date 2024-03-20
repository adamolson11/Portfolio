/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

import "./services.scss";
import { motion, useInView } from "framer-motion";


const variants= {
    initial:{
        x:-500, 
        y: 100,
        opacity:0 

    },
    
    animate: {
        x:0, 
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 1, 
            staggerChildren: 0.1, 
        }
    }
}
const Services = () => {

    const ref = useRef()
    const isInView= useInView(ref,{margin:"-100px"})
    
    
    return (
        <motion.div 
        className="services" 
        variants= {variants}
         initial = "initial"
        // //   animate= "animate"
        // whileInView= "animate"
        ref={ref}
        animate={isInView && "animate"}
          
          >
            
            <motion.div className="textContainer"  variants= {variants}>
                <p>Together.<br/> we move forward.</p>
                <hr/>
            </motion.div>

            <motion.div className="titleContainer"  variants= {variants}>
                <div className="title">
                    <img src="/people.png" alt="image of people working in an office" />
                    <h1>
                    <motion.b whileHover={{color: "orange"}}>New Ideas</motion.b>
                    </h1>
                    </div>
                    <div className="title">
                        <h1>
                        <motion.b whileHover={{color: "orange"}}> For Your </motion.b> 
                        Business.
                        </h1>
                        <button> WHAT I DO. </button>     
                </div>
            </motion.div>

            <motion.div className="listContainer"  variants= {variants}>
                <motion.div className="card">
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa enim! 
                        Quae labore aliquam, suscipit praesentium recusandae facere ducimus quidem r
                        eprehenderit tempora! Cumque dolore ab nesciunt modi nam impedit iste?</p>
                        <button>GO</button>
                    </motion.div>
                </motion.div>

                <motion.div className="card">
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa enim! 
                        Quae labore aliquam, suscipit praesentium recusandae facere ducimus quidem r
                        eprehenderit tempora! Cumque dolore ab nesciunt modi nam impedit iste?</p>
                        <button>GO</button>
                    </motion.div>
                </motion.div>

                <motion.div className="card">
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa enim! 
                        Quae labore aliquam, suscipit praesentium recusandae facere ducimus quidem r
                        eprehenderit tempora! Cumque dolore ab nesciunt modi nam impedit iste?</p>
                        <button>GO</button>
                    </motion.div>
                </motion.div>
                <motion.div className="card">
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa enim! 
                        Quae labore aliquam, suscipit praesentium recusandae facere ducimus quidem r
                        eprehenderit tempora! Cumque dolore ab nesciunt modi nam impedit iste?</p>
                        <button>GO</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
