import { useState, useEffect } from 'react';
import { ZennArticle } from '../types';

export const useZennArticles = (username: string = 'example') => {
  const [articles, setArticles] = useState<ZennArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Zenn APIから記事を取得
        const response = await fetch(`https://zenn.dev/api/articles?username=${username}&order=latest`);
        
        if (!response.ok) {
          throw new Error('記事の取得に失敗しました');
        }
        
        const data = await response.json();
        
        // 最新10件に絞って設定
        setArticles(data.articles ? data.articles.slice(0, 10) : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
        // エラー時はダミーデータを表示
        setArticles([
          {
            id: 1,
            title: "React + TypeScriptで作るモダンなWebアプリ開発",
            slug: "modern-web-development-with-react-typescript",
            published_at: "2024-01-15T10:00:00Z",
            likes_count: 42,
            emoji: "⚛️",
            url: "https://zenn.dev/example/articles/modern-web-development",
            body_letters_count: 5000
          },
          {
            id: 2,
            title: "Next.js App Routerの基本と実践的な使い方",
            slug: "nextjs-app-router-guide",
            published_at: "2024-01-10T14:30:00Z",
            likes_count: 28,
            emoji: "🚀",
            url: "https://zenn.dev/example/articles/nextjs-app-router",
            body_letters_count: 4200
          },
          {
            id: 3,
            title: "Tailwind CSSでデザインシステムを構築する方法",
            slug: "design-system-with-tailwindcss",
            published_at: "2024-01-05T09:15:00Z",
            likes_count: 35,
            emoji: "🎨",
            url: "https://zenn.dev/example/articles/tailwind-design-system",
            body_letters_count: 3800
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [username]);

  return { articles, loading, error };
};