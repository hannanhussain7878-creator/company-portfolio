export interface Service {
  id: string;
  title: string;
  description: string;
  eyebrow: string;
  icon: string;
  tags?: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  disciplines: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}