import { SocialLink } from '../types';

export const profile = {
  name: "山田 太郎",
  role: "Full Stack Developer",
  catchphrase: "技術で価値を創造し、ユーザーの課題を解決する",
  bio: "3年間のWeb開発経験を持つフルスタックエンジニア。React/TypeScript、Node.js を中心とした モダンなWeb技術でスケーラブルなアプリケーション開発に従事。ユーザビリティとパフォーマンスを重視した開発を心がけています。",
  email: "contact@example.com",
  location: "東京, 日本"
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/example",
    icon: "Github"
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/example",
    icon: "Twitter"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/example",
    icon: "Linkedin"
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/example",
    icon: "BookOpen"
  }
];