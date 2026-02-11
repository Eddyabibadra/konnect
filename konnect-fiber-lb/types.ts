
export interface BentoBlock {
  title: string;
  description: string;
  image_url: string;
  link: string;
  size: 'large' | 'tall' | 'wide' | 'normal';
}

export interface NavLink {
  label: string;
  url: string;
}
