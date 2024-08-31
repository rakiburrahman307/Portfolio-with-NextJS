"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const about = {
    title: "About Me",
    description: "I’m Rakibur Rahman, a recent Computer Science graduate with a passion for web development. I enjoy creating websites and applications that are both functional and visually appealing. I’m eager to apply my skills and learn more in a professional setting. Feel free to explore my projects and reach out if you’d like to connect!",
    information: [
      {
        fieldName: "Name",
        fieldValue: "Md.Rakibur Rahman",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+880) 1749183977",
      },
      {
        fieldName: "Experiences",
        fieldValue: "5+ Years",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Bangladeshi",
      },
      {
        fieldName: "Email",
        fieldValue: "rakiburrahman307@gmail.com",
      },
      {
        fieldName: "Language",
        fieldValue: "English, Bangla",
      },
    ],
  };
  const experiences = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "Though I am a recent graduate, I have undertaken several projects and learning experiences that have equipped me with the skills needed to succeed in a professional environment.",
    items: [
      {
        projectName: "Portfolio Website",
        role: "Font-End Developer",
        year: "2024",
      },
      {
        projectName: "Academic Project - BUBT",
        role: "Full Stack Developer",
        year: "2024",
      },
      {
        projectName: "Personal Project",
        role: "Full Stack Developer",
        year: "2024",
      },
      {
        projectName: "New Era Consultancy",
        role: "Front-End Developer",
        year: "2024",
      },
      {
        projectName: "UnyStayHub",
        role: "Full Stack Developer",
        year: "2023",
      },
      {
        projectName: "Job Swift",
        role: "Full Stack Developer",
        year: "2023",
      },
      {
        projectName: "Ethereal Autos",
        role: "Full Stack Developer",
        year: "2023",
      },
    ],
  };

  const educations = {
    title: "Education",
    description:
      "I've pursued diverse educational paths that have shaped my skills in technology. Starting with a diploma in engineering, I honed my technical foundation. My B.Sc. in CSE from BUBT expanded my knowledge in computer science, and an online course from Programming Hero sharpened my web development skills. Each step has prepared me to tackle real-world challenges with confidence.",
    items: [
      {
        institution: "Programming Hero Online Course",
        degree: "Complete Wab Development",
        duration: "6 Months",
      },
      {
        institution: "Bangladesh University of Business and Technology",
        degree: "B.Sc in CSE",
        duration: "2020 - 2024",
      },
      {
        institution: "Chandpur Polytechnic Institute",
        degree: "Diploma Engineering",
        duration: "2015 - 2019",
      },
      {
        institution: "Ullapara Merchant Pilot High School",
        degree: "SSC",
        duration: "2013 - 2015",
      },
    ],
  };

  const skills = [
    {
      title: "My Skill",
      description: "lorem ipsum",
      skillList: [
        {
          icon: <FaHtml5 />,
          name: "HTML5",
        },
        {
          icon: <FaCss3 />,
          name: "CSS3",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <FaReact />,
          name: "ReactJS",
        },
        {
          icon: <FaFigma />,
          name: "Figma",
        },
        {
          icon: <FaNodeJs />,
          name: "NodeJS",
        },
        {
          icon: <SiTailwindcss />,
          name: "TailwindCSS",
        },
        {
          icon: <SiNextdotjs />,
          name: "NextJS",
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex item-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='educations'>Educations</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          {/* Content  */}
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h2 className='text-4xl font-bold'>{experiences?.title}</h2>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experiences?.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experiences?.items?.map((item, index) => (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item?.year}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item?.role}
                        </h3>

                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item?.projectName}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Educations */}
            <TabsContent value='educations' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h2 className='text-4xl font-bold'>{educations?.title}</h2>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {educations?.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {educations?.items?.map((item, index) => (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item?.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item?.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item?.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills[0]?.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills[0]?.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills[0]?.skillList?.map((item, idx) => (
                    <li key={idx}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {item?.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{item?.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about?.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about?.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about?.information?.map((info, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-center xl:justify-start gap-4'
                    >
                      <h4 className='text-white/60'>{info?.fieldName}</h4>
                      <p className='text-xl'>{info?.fieldValue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
