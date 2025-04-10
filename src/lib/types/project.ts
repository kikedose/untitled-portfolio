type ExternalLink = {
  text: string;
  url: string;
};

type Image = {
  alt: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  country: string;
  year: string;
  description: string;
  hidden: boolean;
  links: ExternalLink[];
  thumbnail: string;
  blur: string;
  images: Image[];
};
