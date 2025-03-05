export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
};