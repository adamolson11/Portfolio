/* eslint-disable no-undef */

import "./contact.scss";
import {motion} from "framer-motion"; 

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
           
            <form>
                <input type = "text" required placeholder = "Name"/>
                <input type = "email" required placeholder = "email"/>
                <textarea rows={8} placeholder= "Message Me"/>
                <button>Submit</button>
            </form>
        </div>
        </motion.div>
    )
}

export default Contact