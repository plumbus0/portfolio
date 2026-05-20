/*
[
    {
      "name": "cubeNxN",
      "description": " ",
      "url": "https://github.com/plumbus0/cubeNxN",
      "homepageUrl": "https://cubenxn.com/" | NULL,
      "repositoryTopics": ["css", "expressjs", "html","js"]
      }
    },
    {... other proj
*/

export type proj = {
  name: string,
  description: string,
  url: string,
  icon: string,
  svg: any,
  homepageUrl: string,
  repositoryTopics: string[]
}

export interface projectMini{
  projects: proj[]
};