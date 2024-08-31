import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800"],
  variable: "--font-jetBrainsMono"
 });

 export const metadata = {
  title: "Rakibur Rahman | Portfolio",
  description: "Explore the portfolio of Rakibur Rahman, a passionate web developer skilled in React, Next.js, Tailwind CSS, and more. Discover projects showcasing expertise in creating dynamic, user-friendly, and SEO-optimized websites.",
  keywords: [
    "Rakibur Rahman",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Full Stack Developer",
    "Portfolio Website",
  ],
  author: "Rakibur Rahman",
  openGraph: {
    title: "Rakibur Rahman | Portfolio",
    description: "Showcasing the projects and skills of Rakibur Rahman, a web developer specializing in React, Next.js, and modern web technologies.",
    url: "https://your-portfolio-url.com",  // Replace with your actual URL
    type: "website",
    locale: "en_US",
    siteName: "Rakibur Rahman Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",  // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Rakibur Rahman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle
    title: "Rakibur Rahman | Portfolio",
    description: "Discover the portfolio of Rakibur Rahman, showcasing web development projects with React, Next.js, and more.",
    image: "https://your-portfolio-url.com/og-image.jpg",  // Replace with your actual image URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition> 
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
