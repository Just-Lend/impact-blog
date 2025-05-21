import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getCampaignArticles } from "../api/campaignArticleService";
import Spinner from "../components/Spinner";
import type { Article } from "../types";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const articles = await getCampaignArticles();
      setArticles(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <Spinner />;

  if (articles.length === 0) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Latest Articles
        </div>
        <div className="text-center text-gray-600">Articles not found</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        Latest Articles
      </div>
      {articles.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className=" my-6 text-center">Articles not found</div>
      )}
    </main>
  );
};

export default Home;
