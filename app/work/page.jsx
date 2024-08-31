"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";
const workspace = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quidem at. Aperiam recusandae odio impedit?",
    stacks: [{ name: "html 5" }, { name: "css 3" }, { name: "javaScript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quidem at. Aperiam recusandae odio impedit?",
    stacks: [{ name: "html 5" }, { name: "css 3" }, { name: "javaScript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quidem at. Aperiam recusandae odio impedit?",
    stacks: [{ name: "html 5" }, { name: "css 3" }, { name: "javaScript" }],
    image: "",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(workspace[0]);

  const handleSlideChange = (slider) => {
    //  get current slide index
    const currentIdx = slider.activeIndex;
    // update project slide base on currentIdx change
    setProject(workspace[currentIdx]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.3, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline number  */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project?.num}
              </div>
              {/* category  */}
              <h2 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project?.category} Project
              </h2>
              {/* description  */}
              <p className='text-white/60'>{project?.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project?.stacks?.map((stack, idx) => (
                  <li key={idx} className='text-xl text-accent'>
                    {stack?.name}
                    {/* remove the last coma  */}
                    {idx !== project?.stacks?.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border  */}
              <div className='border border-white/20'></div>
              {/* buttons  */}
              <div className='flex items-center gap-4'>
                {/* live projects button  */}
                <Link href={project?.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[78px] h-[78px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-6 py-3 font-semibold rounded-md'>
                          Live Demo
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github projects button  */}
                <Link href={project?.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[78px] h-[78px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-6 py-3 font-semibold rounded-md'>
                          GitHub Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {workspace?.map((work, idx) => (
                <SwiperSlide key={idx} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay  */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image  */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={work?.image}
                        fill
                        alt={work?.title}
                        className='object-cover'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles='flex gap-2  absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                buttonStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300'
                iconStyles='text-black/80'
              />
            </Swiper>
          </div>
        </div>
      </div>
      <div className=''></div>
    </motion.div>
  );
};

export default Work;
Work;
