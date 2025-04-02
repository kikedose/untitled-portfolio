type ExternalLink = {
  text: string;
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
};
