import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const ServiceItem = ({ num, title, description, url }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1, duration: 0.4, ease: "easeIn" },
    }}
    className='flex flex-col flex-1 justify-center gap-6 group'
  >
    <div className='w-full flex justify-between items-center'>
      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
        {num}
      </div>
      <Link
        href={url}
        aria-label={`Learn more about ${title}`}
        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
      >
        <BsArrowDownRight className='text-primary text-3xl' />
      </Link>
    </div>
    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
      {title}
    </h2>
    <p className='text-white/60'>{description}</p>
    <div className='border-b border-white/20 w-full'></div>
  </motion.div>
);

export default ServiceItem;
