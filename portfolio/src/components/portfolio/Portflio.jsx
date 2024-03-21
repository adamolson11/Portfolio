/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Level up Games",
    img: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 2,
    title: "JNelson Books",
    img: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 3,
    title: "Video Game education website for Kids",
    img: "https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 4,
    title: "Catalyst Blog",
    img: "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
       
      });
    // eslint-disable-next-line no-unused-vars
    const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
    <section ref={ref}> 
    <div className="container">
    <div className="wrapper">
        <div className="imageContainer">
        <img src = {item.img} alt= "" />
        </div>
        <motion.div className="textContainer" >
            <h2 > {item.title} </h2>
            <p>{item.desc}</p>
            <button> See Demo</button>
            
        </motion.div>
            </div>
            </div>
            </section>

  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1> Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
