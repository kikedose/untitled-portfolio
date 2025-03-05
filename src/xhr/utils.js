export const fetchProjects = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`, { cache: 'no-store' });
  const res = await fetch('https://untitled-portfolio.vercel.app/api', { cache: 'force-cache' });


  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
};