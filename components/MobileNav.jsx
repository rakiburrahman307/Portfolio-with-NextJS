"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

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
            <SheetTrigger>
                <CiMenuFries className="text-32"/>  
            </SheetTrigger>
        </Sheet>
    );
};

export default MobileNav;