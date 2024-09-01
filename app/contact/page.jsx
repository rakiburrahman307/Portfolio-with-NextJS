"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1749183977",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rakiburrahman307@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "House # 08, Road # 6, Rupnagar R/A, Mirpur 2, Dhaka, Bangladesh",
  },
];
const Contact = () => {
  return <motion.section
  initial={{opacity:0}}
  animate={{
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: "easeIn" },
  }}
  >
    <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
                {/* form  */}
                <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                   <h2 className="text-4xl text-accent">Lets Work Together</h2>
                   <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci assumenda at, debitis vel</p>
                   {/* input  */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstName" placeholder="First Name" />
                    <Input type="lastName" placeholder="Last Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="phone" placeholder="Phone Number" />

                   </div>
                   {/* Select  */}
                   <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Service"/>
                     
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a Service</SelectLabel>
                            <SelectItem value="service1">Full Stack Development</SelectItem>
                            <SelectItem value="service2">Font-End Development</SelectItem>
                            <SelectItem value="service3">Back-End Development</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                   {/* textarea  */}
                   <Textarea className="h-[200px]" placeholder="Type your message here." />
                   <Button size='md' className="max-w-40">Send Message</Button>
                </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10 ">
                    {
                        info?.map((item, index) => (
                            <li key={index} className="flex gap-6 items-center">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                   <div className="text-[28px]">{item?.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item?.title}</p>
                                    <h3 className="text-xl text-white">{item?.description}</h3>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  </motion.section>;
};

export default Contact;
