"use client";

import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { num: 2, text: "Years Of Experience" },
    { num: 6, text: "Projects of Completed" },
    { num: 10, text: "Technology of Learning" },
    { num: 500, text: "Codes Commits" },
  ];
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-1 gap-4 items-center justify-center xl:justify-start'
            >
              <CountUp
                end={stat?.num}
                duration={5}
                delay={2}
                className='text-4xl xl:text-6xl font-extrabold'
              ></CountUp>
              <p
                className={`${
                  stat?.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;