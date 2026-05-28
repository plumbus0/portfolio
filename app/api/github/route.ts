import { NextResponse } from 'next/server'
import { proj, projectMini } from '../../types';

const token = process.env.GITHUB_TOKEN;
export const username = "plumbus0";

async function getPinnedRepos() {
  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              openGraphImageUrl
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }

            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  return data.data.user.pinnedItems.nodes;
}

export async function GET() {
  const data = await getPinnedRepos();

  const allProj: projectMini = {
    projects: []
  };

  for (const project of data) {

    const tags: string[] = [];

    for (const tag of project.repositoryTopics.nodes) {
      tags.push(tag.topic.name);
    }
    if (project.name === "pulse") {
      allProj.projects.push({
        name: project.name,
        description: project.description,
        url: project.url,
        icon: `https://raw.githubusercontent.com/${username}/${project.name}/main/icon.svg`,
        homepageUrl: 'https://pulse-5xso.vercel.app/',
        repositoryTopics: ['react', 'ts', 'next-js','tailwind-css', 'supabase'],
      } as proj);
      continue;
    }
    allProj.projects.push({
      name: project.name,
      description: project.description,
      url: project.url,
      icon: `https://raw.githubusercontent.com/${username}/${project.name}/main/icon.svg`,
      homepageUrl: project.homepageUrl,
      repositoryTopics: tags
    } as proj);
  }

  return NextResponse.json(allProj);
}