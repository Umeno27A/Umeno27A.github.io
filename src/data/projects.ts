import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "ポートフォリオ",
    description: "バイブコーディングでポートフォリオサイトを作成しました。",
    technologies: ["typescript", "HTML", "Shell", "javascript", "CSS"],
    github_url: "https://github.com/Umeno27A/Umeno27A.github.io",
    demo_url: "https://umeno0923.github.io/",
    show_github: true,
    show_demo: true
  },
  {
    id: 2,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://ecommerce-demo.vercel.app",
    demo_url: "https://ecommerce-demo.vercel.app",
    show_github: false,
    show_demo: true
  },
  {
    id: 3,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://chat-app-demo.vercel.app",
    demo_url: "https://chat-app-demo.vercel.app",
    show_github: true,
    show_demo: false
  },
  {
    id: 4,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://api-gateway-demo.vercel.app",
    demo_url: "https://api-gateway-demo.vercel.app",
    show_github: false,
    show_demo: false
  }
];