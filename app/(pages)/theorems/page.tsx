"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Axiom, AxiomProps } from "./_components/axiom";

const theoremGroupValues: AxiomProps[] = [
  {
    id: 1,
    title: "The start of a new Advent",
    description:
      "How does math work in the new Advent? During the advent time the math is different.",
    date: new Date("2024-12-01"),
    tags: ["math", "python"],
    axioms: {
      1: true,
      2: false,
      3: true
    }
  },
  {
    id: 2,
    title: "Elfs and their math",
    description: "How do the elven people use math?",
    date: new Date("2024-12-02"),
    tags: ["statistics", "python", "math"],
    axioms: {
      1: true,
      2: true,
      3: true
    }
  },
  {
    id: 3,
    title: "The math of the future",
    description: "What does the future hold for math?",
    date: new Date("2024-12-03"),
    tags: ["math", "python", "statistics", "future"],
    axioms: {
      1: false,
      2: true,
      3: true,
      4: false,
      5: true
    }
  }
];

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
      <div className="w-full flex flex-col items-start justify-start gap-y-4">
        {theoremGroupValues.map((theoremGroupValue) => (
          <Axiom key={theoremGroupValue.id} {...theoremGroupValue} />
        ))}
      </div>
    </div>
  );
}
