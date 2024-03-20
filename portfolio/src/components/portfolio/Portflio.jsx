/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Level up Games",
    img: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-343457.jpg&fm=jpg&_gl=1*15yq31n*_ga*MTY2NDQ1OTUwMy4xNzEwOTQ4NTQx*_ga_8JE65Q40S6*MTcxMDk0ODU0MS4xLjEuMTcxMDk0ODU5OS4wLjAuMA..",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 2,
    title: "JNelson Books",
    img: "https://images.pexels.com/photos/322335/pexels-photo-322335.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 3,
    title: "Video Game education website for Kids",
    img: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-343457.jpg&fm=jpg&_gl=1*15yq31n*_ga*MTY2NDQ1OTUwMy4xNzEwOTQ4NTQx*_ga_8JE65Q40S6*MTcxMDk0ODU0MS4xLjEuMTcxMDk0ODU5OS4wLjAuMA..",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
  {
    id: 4,
    title: "Catalyst Blog",
    img: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-343457.jpg&fm=jpg&_gl=1*15yq31n*_ga*MTY2NDQ1OTUwMy4xNzEwOTQ4NTQx*_ga_8JE65Q40S6*MTcxMDk0ODU0MS4xLjEuMTcxMDk0ODU5OS4wLjAuMA..",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus aliquid eveniet accusantium quidem eum quia, animi tenetur voluptatibus fugit nostrum voluptate minima amet. Ea doloribus voluptas voluptates deserunt magnam!",
  },
];

const Single = ({ item }) => {
  return (
    <motion.section>
      {item.title}
    </motion.section>
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
