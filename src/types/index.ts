export interface ZennArticle {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  likes_count: number;
  emoji: string;
  url: string;
  body_letters_count: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github_url: string;
  demo_url?: string;
  image?: string;
  show_github?: boolean;
  show_demo?: boolean;
}

export interface Skill {
  category: string;
  technologies: Array<{
    name: string;
    icon?: string;
    level?: number;
  }>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}