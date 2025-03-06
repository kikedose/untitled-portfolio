import { headers } from 'next/headers';

export const fetchProjects = async () => {
  const headersList = await headers();
  const host = headersList.get('host'); // Get the current host

  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}/api`;

  const res = await fetch(baseUrl, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
};
