"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs    } from "react-icons/fa";
import { SiTailwindcss , SiNextdotjs } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
    const about ={
        title: "About Me",
        description:"lorem Ips lorem Ips",
        info:[
            {
                fieldName:"Name",
                fieldValue:"Md.Rakibur Rahman"
            },
            {
                fieldName:"Phone",
                fieldValue:"(+880) 1749183977"
            },
            {
                fieldName:"Experiences",
                fieldValue:"5+ Years"
            },
            {
                fieldName:"Nationality",
                fieldValue:"Bangladeshi"
            },
            {
                fieldName:"Email",
                fieldValue:"rakiburrahman307@gmail.com"
            },
            {
                fieldName:"Language",
                fieldValue:"English, Bangla"
            },
        ]
    }
    const experiences = {
       icon:"/assets/resume/badge.svg",
       title: "My Experience",
       description:"lorem Ips lorem Ips",
       items:[
        {
            company: "",
            position: "",
            duration: "",
        },
        {
            company: "",
            position: "",
            duration: "",
        },
        {
            company: "",
            position: "",
            duration: "",
        },
        {
            company: "",
            position: "",
            duration: "",
        },
        {
            company: "",
            position: "",
            duration: "",
        },
        {
            company: "",
            position: "",
            duration: "",
        },
     ]
            
    }

    const educations = {
        icon:"/assets/resume/cap.svg",
        title: "Education",
        description:"lorem Ips lorem Ips",
        items:[
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
        ]
    }

    const skills = [
        {
            title:"My Skill",
            description:"lorem ipsum",
            skills:[
                {
                    icon: <FaHtml5 />,
                    name:"HTML5",   
                },
                {
                    icon: <FaCss3 />,
                    name:"CSS3",
                },
                {
                    icon: <FaJs />,
                    name:"JavaScript",
                },
                {
                    icon: <FaReact />,
                    name:"ReactJS",
                },
                {
                    icon: <FaFigma />,
                    name:"Figma",
                },
                {
                    icon: <FaNodeJs />,
                    name:"NodeJS",
                },
                {
                    icon: <SiTailwindcss />,
                    name:"TailwindCSS",
                },
                {
                    icon: <SiNextdotjs />,
                    name:"NextJS",
                }
            ]

        }
    ]
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.4, duration:0.4, ease:"easeIn"}
        }}
        className="min-h-[80vh] flex item-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="educations">Educations</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* Content  */}
                    <div className="min-h-[70vh] w-full">
                    {/* Experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h2 className="text-4xl font-bold">{experiences?.title}</h2>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences?.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {
                                        experiences?.items?.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg:items-start gap-1">
                                                 <span className="text-accent">{item?.duration}</span>
                                                 <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item?.position}</h3>
                                              <div className="flex items-center gap-3">
                                              <span className="w-[6px] h-[6px] rounded-full "></span>
                                                <p>{item?.company}</p>
                                                
                                              </div>
                                               
                                            </li>
                                        ))
                                    }
                                </ul>
                            </ScrollArea>
                        </div>

                    </TabsContent>
                    {/* Educations */}
                    <TabsContent value="educations" className="w-full">education</TabsContent>
                    {/* Skills */}
                    <TabsContent value="skills" className="w-full">skill</TabsContent>
                    {/* About */}
                    <TabsContent value="about" className="w-full">about</TabsContent>
                    </div>
                </Tabs>

            </div>
            
        </motion.div>
    );
};

export default Resume;