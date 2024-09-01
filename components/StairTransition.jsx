"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={pathName} className='relative'>
        <div className='fixed inset-0 z-40 flex pointer-events-none'>
          <Stairs />
        </div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className='fixed inset-0 bg-primary pointer-events-none'
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
