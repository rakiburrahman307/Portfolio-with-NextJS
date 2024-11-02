"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/resume.pdf`;

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl md:text-5xl font-extrabold">Hello I&apos;m</span>
            <h1 className="text-4xl font-bold md:font-none md:h1 mb-6">
              <span className="text-accent">Rakibur Rahman</span>
              <br />
              <TypeAnimation
                sequence={["Web Developer", 1500, "Web Designer", 1000]}
                speed={30}
                style={{ fontSize: "0.8em", color: "#00ff99" }}
                repeat={Infinity}
                wrapper="span"
                aria-label="Rakibur's professions including Web Developer and Web Designer"
              />
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I am a web developer who creates and maintains websites, ensuring
              they are visually appealing, functional, and responsive across
              devices. I work on both the front-end and back-end, using coding
              languages like HTML, CSS, JavaScript, and React to deliver smooth
              online experiences.
            </p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                as="a"
                href={fileUrl || "#"}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                aria-label="Download CV of Rakibur Rahman"
                aria-disabled={!fileUrl}
                onClick={(e) => {
                  if (!fileUrl) {
                    e.preventDefault();
                    alert("CV not available at the moment.");
                  }
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
