// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [items] = useState(["Item 1", "Item 2", "Item 3"]);

  const variants = {
    visible: (i) =>({
      opacity: 1,
      x: 100, // Change x to 0 for no horizontal translation
      transition: {delay: i *  0.3},
    }),
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible">
        {items.map((item, i) => (
          <motion.li
            key={item}
            variants={variants}
            custom={i}
            transition={{ delay: i * 1 }} // Delay each item's animation
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
