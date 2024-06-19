"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const data = [
  {
    name: "John Doe",
    score: 100
  },
  {
    name: "Jane Doe",
    score: 90
  },
  {
    name: "John Smith",
    score: 80
  },
  {
    name: "Jane Smith",
    score: 70
  },
  {
    name: "John Doe",
    score: 60
  },
  {
    name: "Jane Doe",
    score: 50
  },
  {
    name: "John Smith",
    score: 40
  },
  {
    name: "Jane Smith",
    score: 30
  }
];

export const LeaderBoard = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={index + 1}
            className={index + 1 > 3 ? "text-muted-foreground" : ""}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className="text-right">{item.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
