
import { ScrollArea } from "@/components/ui/scroll-area";
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
const EducationItem = () => (
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
);

export default EducationItem;
