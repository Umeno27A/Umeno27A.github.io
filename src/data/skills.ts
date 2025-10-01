import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: "フロントエンド",
    technologies: [
      { name: "Java", icon: "☕️", level: 2 },
      { name: "TypeScript", icon: "📘", level: 1 },
      { name: "Next.js", icon: "▲", level: 1 },
      { name: "Vue.js", icon: "💚", level: 2 },
      { name: "Tailwind CSS", icon: "🎨", level: 1 }
    ]
  },
  {
    category: "バックエンド",
    technologies: [
      { name: "Node.js", icon: "🟢", level: 1 },
      { name: "Python", icon: "🐍", level: 2 },
      { name: "Go", icon: "🐹", level: 1 },
      { name: "PostgreSQL", icon: "🐘", level: 1 },
      { name: "MongoDB", icon: "🍃", level: 1 }
    ]
  },
  {
    category: "インフラ・ツール",
    technologies: [
      { name: "AWS", icon: "☁️", level: 2 },
      { name: "Docker", icon: "🐳", level: 1 },
      { name: "Git", icon: "📚", level: 2 },
      { name: "Vercel", icon: "⚡", level: 1 },
      { name: "GitHub Actions", icon: "🔧", level: 2 }
    ]
  }
];