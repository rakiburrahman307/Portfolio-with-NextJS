"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const MobileNav = () => {
  const pathName = usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center item-center'>
        <CiMenuFries className='text-8 text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Rakibur <span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* nav section start here  */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links?.map((link, idx) => {
            return (
              <Link
                href={link?.path}
                key={idx}
                className={`${
                  link?.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } text-xl  capitalize font-medium hover:text-accent transition-all`}
              >
                {link?.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
