import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="relative mt-8 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
        <Image
          src="/hero.png"
          fill
          priority
          sizes="80%"
          className="object-contain dark:hidden"
          alt="Alexander the Great"
        />
        <Image
          src="/hero-dark.png"
          fill
          priority
          sizes="80%"
          className="object-contain hidden dark:block"
          alt="Alexander the Great"
        />
      </div>
    </div>
  );
};
