"use client";

import useSWR from "swr";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
}

const fetchContributors = (url: string) => {
  return fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }).then((res) => {
    if (!res.ok) {
      console.warn("Failed to fetch contributors", res);
      return [] as Contributor[];
    } else {
      return res.json() as Promise<Contributor[]>;
    }
  });
};

export const Contributors = () => {
  const { data, error } = useSWR(
    "https://api.github.com/repos/scriptor-dev/scriptor/contributors",
    fetchContributors
  );

  if (error) return null;
  if (!data) return null;

  return (
    <div className="w-full flex flex-wrap gap-2">
      {data.map((contributor) => (
        <a href={contributor.html_url} target="_blank" key={contributor.login}>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <Avatar className="border dark:bg-muted-foreground">
                  <AvatarImage src={contributor.avatar_url} />
                  <AvatarFallback>
                    {contributor.login.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {contributor.login} - {contributor.contributions}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      ))}
    </div>
  );
};
