"use client";
import ServiceItem from "@/components/utilities/ServiceItem";
import Head from "next/head";

const Services = () => {
  const services = [
    {
      num: "01",
      title: "Responsive Web Design",
      description:
        "Ensuring websites are mobile-friendly and look good on all devices.",
      url: "",
    },
    {
      num: "02",
      title: "Website Development",
      description:
        "Building custom websites using various technologies like HTML, CSS, JavaScript, and frameworks such as React.",
      url: "",
    },
    {
      num: "03",
      title: "Front-End Development",
      description:
        "Focusing on the client side of web applications, working with HTML, CSS, JavaScript, and front-end frameworks like React.",
      url: "",
    },
    {
      num: "04",
      title: "Back-End Development",
      description:
        "Working on the server side, handling databases, APIs, and server logic using technologies like Node.js.",
      url: "",
    },
  ];
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      {/* head for better seo  */}
      <Head>
        <title>Service - Rakibur Rahman</title>
        <meta
          name='description'
          content='Details about Rakibur Rahman Service page.'
        />
        <meta property='og:title' content='Service - Rakibur Rahman' />
        <meta
          property='og:description'
          content='Details about Rakibur Rahman Service page.'
        />
        <meta property='og:type' content='portfolio website' />
      </Head>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'>
          {services?.map((service, index) => (
            <ServiceItem
              key={index}
              num={service.num}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
