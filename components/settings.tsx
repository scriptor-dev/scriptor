"use client";

import { SettingsIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { Label } from "./ui/label";
import { Switch } from "@/components/ui/switch";

export const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <SettingsIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Set your preferred theme.
            </span>
          </div>
          <ThemeToggle />
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Analytics</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Can we collect anonymous data to improve the Theorem experience?
            </span>
          </div>
          <Switch />
        </div>
      </DialogContent>
    </Dialog>
  );
};
