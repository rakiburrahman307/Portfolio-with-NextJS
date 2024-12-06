const about = {
  title: "About Me",
  description:
    "I’m Rakibur Rahman, a recent Computer Science graduate with a passion for web development. I enjoy creating websites and applications that are both functional and visually appealing. I’m eager to apply my skills and learn more in a professional setting. Feel free to explore my projects and reach out if you’d like to connect!",
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
      fieldValue: "2+ Years",
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
const AboutItem = () => (
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
);
export default AboutItem;
