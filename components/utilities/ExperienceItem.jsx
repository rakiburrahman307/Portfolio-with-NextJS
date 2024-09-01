import { ScrollArea } from "@/components/ui/scroll-area";
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
const ExperienceItem = () => (
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
);

export default ExperienceItem;
