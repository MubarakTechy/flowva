
export interface NavItem {
  label: string;
  id: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Reward {
  id: number;
  title: string;
  provider: string;
  points: number;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
