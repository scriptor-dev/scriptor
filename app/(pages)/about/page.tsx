import { SiGithub } from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { Contributors } from "../_components/contributors";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start flex-1 px-6 pb-10 gap-y-5 md:w-[80%] md:mx-auto">
      <h2 className="text-2xl font-bold md:text-3xl">About</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a Theorem?</AccordionTrigger>
          <AccordionContent>
            A theorem is a mathematical statement that has been proven true
            based on previously established statements, such as other theorems
            or axioms.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who is behind Scriptor?</AccordionTrigger>
          <AccordionContent>
            Scriptor was initiated by the DS22-t class of the Bachelor program
            Data Science at the University of Applied Sciences ZHAW.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I support Scriptor?</AccordionTrigger>
          <AccordionContent>
            The app was built and tested by volunteers. We would be delighted if
            you would simply use the app and give us some brief feedback.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h3 className="text-xl font-bold md:text-2xl">Contributors</h3>
      <p className="text-justify">
        Scriptor is an Open Source project and every contribution is welcome!
        Many thanks to all the contributors who are part of this project. Any
        idea for new features or improvements is welcome. Feel free to open an
        issue for discussion.
      </p>
      <Contributors />
      <Button variant="outline" size="default" asChild>
        <a href="https://github.com/scriptor-dev/scriptor" target="_blank">
          <SiGithub className="h-6 w-6 mr-2" />
          Scriptor GitHub
        </a>
      </Button>
    </div>
  );
}
