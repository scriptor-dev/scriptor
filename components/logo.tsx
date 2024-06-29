import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

interface LogoProps {
  force?: boolean;
}

export const Logo = ({ force }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("items-center gap-x-2", force ? "flex" : "hidden md:flex")}
    >
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Scriptor</p>
    </Link>
  );
};
