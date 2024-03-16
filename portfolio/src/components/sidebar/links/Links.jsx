import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1, // Corrected property name to staggerChildren
    }, 
  }, 
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Corrected property name to staggerDirection
    },
  },
};

const itemVariants = {
  open: {
    y: 0, 
    opacity: 1,
  },
  closed: {
    y: 50, 
    opacity: 0, 
  },
};

/* eslint-disable no-unused-vars */
const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a key={index} href={`#${item}`} variants={itemVariants} whileHover= {{scale:1.1}} whileTape ={{scale: 0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
