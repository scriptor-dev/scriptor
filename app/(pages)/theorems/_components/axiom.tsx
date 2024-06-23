import { CircleCheck, CircleDot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";

export interface AxiomProps {
  id: number;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  axioms: Record<number, boolean>;
}

export const Axiom = ({
  id,
  title,
  description,
  date,
  tags,
  axioms
}: AxiomProps) => {
  return (
    <Card className="w-full" id={`axiom-${id}`}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{date.toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between gap-y-4 md:flex-row">
        <span className="text-sm text-justify md:w-2/3">{description}</span>
        <Button variant={"outline"} size="sm" asChild>
          <Link href={`/theorems/${id}`}>
            {Object.values(axioms).includes(false)
              ? "Start Proving"
              : "Show Result"}
          </Link>
        </Button>
      </CardContent>
      <CardFooter className="w-full flex flex-col items-start justify-between gap-y-4">
        <span className="flex gap-x-1">
          {Object.entries(axioms).map(([key, value]) =>
            value ? (
              <CircleCheck key={key} className="text-green-500" />
            ) : (
              <CircleDot key={key} className="text-blue-500" />
            )
          )}
        </span>
        <span className="flex gap-x-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </span>
      </CardFooter>
    </Card>
  );
};
