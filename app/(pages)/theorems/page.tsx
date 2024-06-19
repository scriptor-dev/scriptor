"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function TheoremsPage() {
  const [theoremGroup, setTheoremGroup] = useState("advent2024");

  const handleTheoremGroupChange = (value: string) => {
    setTheoremGroup(value);
    console.log(value);
  };

  return (
    <div className="flex flex-col items-start justify-start flex-1 px-6 pb-10 gap-y-5 md:w-[80%] md:mx-auto">
      <h2 className="text-2xl font-bold md:text-3xl">Theorems</h2>
      <Select
        onValueChange={handleTheoremGroupChange}
        defaultValue={theoremGroup}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Series" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="advent2024">Advent 2024</SelectItem>
          <SelectItem value="advent2023">Advent 2023</SelectItem>
          <SelectItem value="testseries">Test Series</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
