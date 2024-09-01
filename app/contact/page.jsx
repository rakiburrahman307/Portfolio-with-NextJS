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
import Head from "next/head";

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
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
    >
      {/* head for better seo  */}
      <Head>
        <title>Contact - Rakibur Rahman</title>
        <meta
          name='description'
          content='Details about Rakibur Rahman Contact page.'
        />
        <meta property='og:title' content='Contact - Rakibur Rahman' />
        <meta
          property='og:description'
          content='Details about Rakibur Rahman Contact page.'
        />
        <meta property='og:type' content='portfolio website' />
      </Head>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-8'>
          <div className='xl:w-2/3 order-2 xl:order-1'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission hereá
              }}
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h2 className='text-4xl text-accent'>Let&apos;s Work Together</h2>
              <p className='text-white/60'>
                If you have any questions or would like to get in touch, please
                fill out the form below or use the provided contact details.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='text' placeholder='First Name' required />
                <Input type='text' placeholder='Last Name' required />
                <Input type='email' placeholder='Email Address' required />
                <Input type='tel' placeholder='Phone Number' />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a Service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose a Service</SelectLabel>
                    <SelectItem value='fullstack'>
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value='frontend'>
                      Front-End Development
                    </SelectItem>
                    <SelectItem value='backend'>
                      Back-End Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-48'
                placeholder='Type your message here.'
                required
              />
              <Button size='lg' className='max-w-xs'>
                Send Message
              </Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-2'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex gap-6 items-center'>
                  <div className='w-12 h-12 xl:w-16 xl:h-16 bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-2xl'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl text-white'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
