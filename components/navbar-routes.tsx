"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Logo } from "./logo";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Theorems",
    href: "/theorems"
  },
  {
    name: "Statistics",
    href: "/statistics"
  },
  {
    name: "About",
    href: "/about"
  }
];

export const NavbarRoutes = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden items-center justify-between gap-x-8 md:flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href} className="hover:underline">
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full">
            <SheetHeader>
              <SheetTitle>
                <Logo force />
              </SheetTitle>
              <SheetDescription className="h-80 flex flex-col items-center justify-center gap-y-8 text-xl">
                {links.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
