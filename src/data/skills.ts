import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: "フロントエンド",
    technologies: [
      { name: "React", icon: "⚛️", level: 5 },
      { name: "TypeScript", icon: "📘", level: 4 },
      { name: "Next.js", icon: "▲", level: 4 },
      { name: "Vue.js", icon: "💚", level: 3 },
      { name: "Tailwind CSS", icon: "🎨", level: 5 }
    ]
  },
  {
    category: "バックエンド",
    technologies: [
      { name: "Node.js", icon: "🟢", level: 4 },
      { name: "Python", icon: "🐍", level: 3 },
      { name: "Go", icon: "🐹", level: 3 },
      { name: "PostgreSQL", icon: "🐘", level: 4 },
      { name: "MongoDB", icon: "🍃", level: 3 }
    ]
  },
  {
    category: "インフラ・ツール",
    technologies: [
      { name: "AWS", icon: "☁️", level: 3 },
      { name: "Docker", icon: "🐳", level: 4 },
      { name: "Git", icon: "📚", level: 5 },
      { name: "Vercel", icon: "⚡", level: 4 },
      { name: "GitHub Actions", icon: "🔧", level: 3 }
    ]
  }
];