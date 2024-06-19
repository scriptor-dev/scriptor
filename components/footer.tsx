import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="z-50 w-full p-6 flex items-center  bg-background dark:bg-[#1f1f1f]">
      <Logo />
      <div className="w-full flex justify-between items-center gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
