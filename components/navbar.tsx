import { Button } from "./ui/button";
import { Logo } from "./logo";
import { NavbarRoutes } from "./navbar-routes";
import { Settings } from "./settings";

export const Navbar = () => {
  return (
    <div className="z-50 top-0 fixed w-full p-6 flex items-center justify-between bg-background border-b dark:bg-[#1f1f1f]">
      <Logo />
      <NavbarRoutes />
      <div className="flex items-center justify-between gap-x-2 md:justify-end">
        <Button size="sm">Log in</Button>
        <Settings />
      </div>
    </div>
  );
};
