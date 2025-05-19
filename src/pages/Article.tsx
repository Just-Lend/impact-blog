import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampaignArticleBySlug } from "../api/campaignArticle";

interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  slug: string;
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (slug) {
      getCampaignArticleBySlug(slug)
        .then((article) => setArticle(article))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [slug]);

  if (!article) return <div className="text-center py-8">Loading...</div>;

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover mb-6"
      />
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
};

export default ArticlePage;
