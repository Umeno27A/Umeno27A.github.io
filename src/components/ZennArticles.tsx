import React from 'react';
import { Calendar, Heart, ExternalLink, BookOpen } from 'lucide-react';
import { useZennArticles } from '../hooks/useZennArticles';

const ZennArticles: React.FC = () => {
  const { articles, loading, error } = useZennArticles();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="articles" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              技術記事
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            技術記事
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zennで公開している技術記事の一覧です。最新の技術トレンドや開発ノウハウをシェアしています
          </p>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-yellow-800 text-center">
              記事の取得中にエラーが発生しました。サンプル記事を表示しています。
            </p>
          </div>
        )}

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">記事が見つかりませんでした</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Emoji and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl flex-shrink-0">{article.emoji}</span>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <time>{formatDate(article.published_at)}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>{article.likes_count}</span>
                    </div>
                  </div>

                  {/* Reading time estimate */}
                  <div className="text-xs text-gray-400 mb-4">
                    約 {Math.ceil(article.body_letters_count / 400)} 分で読めます
                  </div>

                  {/* Read More Button */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    記事を読む
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://zenn.dev/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Zennで全ての記事を見る
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ZennArticles;