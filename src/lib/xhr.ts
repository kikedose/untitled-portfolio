import { headers } from 'next/headers';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const headersList = await headers();
  const host = headersList.get('host'); // Get the current host

  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}/api`;

  const res = await fetch(baseUrl, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json() as Promise<Project[]>;
};
