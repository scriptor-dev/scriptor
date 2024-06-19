"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LeaderBoard } from "./_components/leader-board";
import { PersonalBoard } from "./_components/personal-board";

export default function LeaderboardPage() {
  // TODO: set ScrollArea height correctly so only content gets scrolled
  return (
    <div className="flex flex-col items-start justify-start flex-1 px-6 pb-10 gap-y-5 md:w-[80%] md:mx-auto">
      <h2 className="text-2xl font-bold md:text-3xl">Statistics</h2>

      <Tabs defaultValue="overall" className="w-full h-full">
        <TabsList className="w-full flex justify-start flex-wrap">
          <TabsTrigger value="overall">Leaderboard</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="theorem">Theorem</TabsTrigger>
        </TabsList>
        <ScrollArea className="w-full h-[70vh] flex flex-col items-start justify-start rounded pt-2">
          <TabsContent value="overall" className="flex">
            <LeaderBoard />
          </TabsContent>
          <TabsContent value="personal">
            <PersonalBoard />
          </TabsContent>
          <TabsContent value="theorem"></TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
