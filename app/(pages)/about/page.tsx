import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Contributors } from "../_components/contributors";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start flex-1 px-6 pb-10 gap-y-5 md:w-[80%] md:mx-auto">
      <h2 className="text-2xl font-bold md:text-3xl">About</h2>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3 className="text-xl font-bold md:text-2xl">Sponsors</h3>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3 className="text-xl font-bold md:text-2xl">Contributors</h3>
      <p className="text-justify">
        Theorem is an Open Source project and every contribution is welcome!
        Many thanks to all the contributors who are part of this project. Any
        idea for new features or improvements is welcome. Feel free to open an
        issue for discussion.
      </p>
      <Contributors />
      <Button variant="outline" size="default" asChild>
        <a href="https://github.com/theorem-dev/theorem" target="_blank">
          <SiGithub className="h-6 w-6 mr-2" />
          Theorem GitHub
        </a>
      </Button>
    </div>
  );
}
