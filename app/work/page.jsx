"use client";
import React, { useState, useCallback } from "react";
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
import WorkSliderButton from "@/components/utilities/WorkSliderButton";
import Head from "next/head";

// Mock data
const workspace = [
  {
    num: "01",
    category: "MERN Stack",
    title: "E-commerce",
    description:
      "This e-commerce platform is a fully functional, responsive, and dynamic web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with React Bootstrap for styling. The platform provides a seamless shopping experience for users and includes robust features for both customers and administrators.",
    stacks: [{ name: "JavaScript" },{name: "React"},{name: "Bootstrap"},{name:"Express js"}, {name: "Nodejs"}],
    image: "/easyMart.png",
    live: "https://easy-mart-ecommerce-final.netlify.app",
    github: "https://github.com/rakiburrahman307/easy-mart-react-ecommerce",
  },
  {
    num: "02",
    category: "Font-End",
    title: "Weather App",
    description:
      "This modern weather application provides accurate and real-time weather data using the OpenWeatherAPI, delivering a sleek and intuitive user experience. Built with React and TypeScript, the app combines powerful tools like Chakra UI, Tailwind CSS, and Recharts to offer a responsive and visually appealing interface.",
    stacks: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
  
    ],
    image: "/weatherApp.png",
    live: "https://sky-snap-weather-app.netlify.app",
    github: "https://github.com/rakiburrahman307/whether-app-react",
  },
  {
    num: "03",
    category: "Font-End",
    title: "The New Era Consultancy",
    description:
      "The New Era Consultancy website is a modern and professional platform designed to showcase the firm's expertise in providing guidance for studying, working, and traveling abroad. With a sleek and dynamic design, the website ensures a seamless user experience while reflecting the brand's core values of innovation and trust.",
    stacks:[
      { name: "React" },
      { name: "React Router" },
      { name: "Tailwind CSS" },

    ],
    image: "/newEra.png",
    live: "https://consultancynewera.com",
    github: "https://github.com/rakiburrahman307/NEW-ERA-CONSULTANCY",
  },
  {
    num: "04",
    category: "MERN Stack",
    title: "Unity Hub",
    description:
      "Unity Hub Hostel Management System is a modern web application designed to streamline and automate hostel management operations. This system caters to hostel administrators, residents, and staff, providing features for managing bookings, payments, resident records, and announcements. The application prioritizes user-friendliness, security, and scalability to serve hostels of all sizes.",
      stacks: [
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "Node.js" },
   
      ],
      
    image: "/uniStayHub.png",
    live: "https://unistayhub-hostel-manegement.netlify.app",
    github: "https://github.com/rakiburrahman307/UniStyHub-Hostel-Management-ReactJs",
  },
  {
    num: "05",
    category: "MERN Stack",
    title: "Job Swift",
    description:
      "Job Swift is an online platform dedicated to connecting job seekers with a wide range of employment opportunities. Whether you're a seasoned professional looking for your next career move or a recent graduate eager to kickstart your professional journey, Job Swift has something for everyone.",
      stacks: [
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "Node.js" },
  
      ],
    image: "/jobSwift.png",
    live: "https://job-swift-expolorejobs-managements.netlify.app",
    github: "https://github.com/rakiburrahman307/Assignment-11",
  },
];

const Work = () => {
  const [project, setProject] = useState(workspace[0]);

  // Use useCallback to memoize the event handler
  const handleSlideChange = useCallback((slider) => {
    const currentIdx = slider.activeIndex;
    setProject(workspace[currentIdx]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      {/* head for better seo  */}
      <Head>
        <title>Work - Rakibur Rahman</title>
      </Head>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* Outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project?.num}
              </div>
              {/* Category */}
              <h2 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project?.category} Project
              </h2>
              {/* Description */}
              <p className='text-white/60'>{project?.description}</p>
              {/* Stack */}
              <ul className='flex gap-4'>
                {project?.stacks?.map((stack, idx) => (
                  <li key={idx} className='text-xl text-accent'>
                    {stack?.name}
                    {idx !== project?.stacks?.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className='border border-white/20'></div>
              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project?.live} passHref target="_blank">
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
                {/* GitHub project button */}
                <Link href={project?.github} passHref target="_blank">
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
                    {/* Overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* Image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={work?.image}
                        fill
                        alt={work?.title}
                        className='object-fill'
                        priority={idx === 0} // Load first image with priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                buttonStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300'
                iconStyles='text-black/80'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
