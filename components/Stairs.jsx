import { motion } from "framer-motion";

const Stairs = () => {
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseIndex = (index) => {
    const totalStep = 6;
    return totalStep - index - 1;
  };

  return (
    <>
      {[...Array(6)].map((_, idx) => {
        return (
          <motion.div
            key={idx}
            variants={stairAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(idx) * 0.1,
            }}
            className='h-full w-full bg-white relative'
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
