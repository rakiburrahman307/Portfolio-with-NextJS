"use client";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Loading from "@/components/utilities/Loading";
import Head from "next/head";
const ExperienceItem = dynamic(
  () => import("@/components/utilities/ExperienceItem"),
  {
    loading: () => <Loading name='Experience' />,
    ssr: false,
  }
);

const EducationItem = dynamic(
  () => import("@/components/utilities/EducationItem"),
  {
    loading: () => <Loading name='Education' />,
    ssr: false,
  }
);

const SkillsItem = dynamic(() => import("@/components/utilities/SkillsItem"), {
  loading: () => <Loading name='Skills' />,
  ssr: false,
});

const AboutItem = dynamic(() => import("@/components/utilities/AboutItem"), {
  loading: () => <Loading name='About Me' />,
  ssr: false,
});

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex item-center justify-center py-12 xl:py-0'
    >
      {/* head for better seo  */}
      <Head>
        <title>Resume - Rakibur Rahman</title>
        <meta
          name='description'
          content='Details about Rakibur Rahman Resume page.'
        />
        <meta property='og:title' content='Resume - Rakibur Rahman' />
        <meta
          property='og:description'
          content='Details about Rakibur Rahman Resume page.'
        />
        <meta property='og:type' content='portfolio website' />
      </Head>
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
              <ExperienceItem />
            </TabsContent>
            {/* Educations */}
            <TabsContent value='educations' className='w-full'>
              <EducationItem />
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <SkillsItem />
            </TabsContent>
            {/* About */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <AboutItem />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
