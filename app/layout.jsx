// app/layout.js
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Rakibur Rahman | Portfolio",
  description:
    "Explore the portfolio of Rakibur Rahman, a passionate web developer skilled in React, Next.js, Tailwind CSS, and more. Discover projects showcasing expertise in creating dynamic, user-friendly, and SEO-optimized websites.",
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
    description:
      "Showcasing the projects and skills of Rakibur Rahman, a web developer specializing in React, Next.js, and modern web technologies.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    type: "website",
    locale: "en_US",
    siteName: "Rakibur Rahman Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Rakibur Rahman Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Explore the portfolio of Rakibur Rahman, a passionate web developer skilled in React, Next.js, Tailwind CSS, and more. Discover projects showcasing expertise in creating dynamic, user-friendly, and SEO-optimized websites.'
        />
        <meta
          name='keywords'
          content='Rakibur Rahman, Web Developer, React Developer, Next.js Portfolio, Frontend Developer, JavaScript Developer, Tailwind CSS, Full Stack Developer, Portfolio Website'
        />
        <meta name='author' content='Rakibur Rahman' />
        {/* Open Graph / Facebook */}
        <meta property='og:title' content='Rakibur Rahman | Portfolio' />
        <meta
          property='og:description'
          content='Showcasing the projects and skills of Rakibur Rahman, a web developer specializing in React, Next.js, and modern web technologies.'
        />
        <meta
          property='og:image'
          content='https://rakiburrahman307.netlify.app'
        />
        <meta
          property='og:url'
          content='https://rakiburrahman307.netlify.app'
        />
        <meta property='og:type' content='website' />
        <meta property='og:Rakibur Rahman' content='Rakibur Rahman Portfolio' />
        {/* Twitter */}
        <meta name='twitter:title' content='Rakibur Rahman | Portfolio' />
        <meta
          name='twitter:description'
          content='Showcasing the projects and skills of Rakibur Rahman, a web developer specializing in React, Next.js, and modern web technologies.'
        />
        {/* Favicon */}
        <link rel='icon' href='/r_logo.png' />
        {/* Manifest */}
        <link rel='manifest' href='/site.webmanifest' />
        <link
          rel='preload'
          href='https://rakiburrahman307.netlify.app'
          as='font'
          type='font/woff2'
          crossorigin='anonymous'
        />
        {/* Additional meta tags for browser compatibility */}
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
