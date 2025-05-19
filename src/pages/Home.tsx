import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getCampaignArticles } from "../api/campaignArticle";

interface Article {
  id: number;
  title: string;
  preview: string;
  image_urls: string[];
  slug: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getCampaignArticles()
      .then((articles) => setArticles(articles))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        Latest Articles
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default Home;
