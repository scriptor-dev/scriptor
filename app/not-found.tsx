"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-full px-6 pb-10 flex flex-col items-center justify-even gap-y-8">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        404 - Page Not Found
      </h1>
      <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="relative mt-8 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px]">
          <Image
            src="/404.png"
            fill
            priority
            sizes="100%"
            className="object-contain dark:hidden"
            alt="Alexander the Great"
          />
          <Image
            src="/404-dark.png"
            fill
            priority
            sizes="100%"
            className="object-contain hidden dark:block"
            alt="Alexander the Great"
          />
        </div>
      </div>
      <Button variant="ghost" size="lg" className="mt-12" asChild>
        <Link href="/" className="text-xl underline md:text-xl">
          Go back Home
        </Link>
      </Button>
    </div>
  );
}
