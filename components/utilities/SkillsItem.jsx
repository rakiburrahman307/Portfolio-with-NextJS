import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
const SkillsItem = () => (
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
);

export default SkillsItem;
