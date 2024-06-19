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

export async function fetchGithubContributors(
  orgName: string,
  repoName: string
): Promise<Contributor[]> {
  const url = `https://api.github.com/repos/${orgName}/${repoName}/contributors`;

  return await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  })
    .then((response) => {
      if (!response.ok) {
        console.warn("Failed to fetch GitHub contributors", response);
        return [] as Contributor[];
      }
      return response.json();
    })
    .catch((error) => {
      console.warn("Failed to fetch GitHub contributors", error);
      return [] as Contributor[];
    });
}
