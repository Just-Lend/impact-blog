import React from "react";

interface Article {
  id: number;
  title: string;
  preview: string;
  image_urls: string[];
  slug: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={article.image_urls[0]}
      alt={article.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
      <p className="mt-2 text-gray-600">{article.preview}</p>
      <a
        href={`/articles/${article.slug}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Read more
      </a>
    </div>
  </div>
);

export default ArticleCard;
