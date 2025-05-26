import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useParams, useLocation } from "react-router-dom";
import { getCampaignArticlesByUNSDGs } from "../api/campaignArticleService";
import type { Article } from "../types";
import Spinner from "../components/Spinner";

const UNSDGArticles: React.FC = () => {
  const { unsdgNumber } = useParams<{ unsdgNumber: string }>();
  const location = useLocation();
  const { sdg } = location.state || {};
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchCampaignArticlesByUNSDGs = async (number: number) => {
    try {
      setLoading(true);
      const articles = await getCampaignArticlesByUNSDGs(number);
      setArticles(articles);
    } catch (error) {
      setHasError(true);
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (unsdgNumber) {
      fetchCampaignArticlesByUNSDGs(Number(unsdgNumber));
    }
  }, [unsdgNumber]);

  if (loading) return <Spinner />;

  if (hasError) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-center text-gray-600 mt-20">
          An error occurred, please try again later.
        </div>
      </main>
    );
  }

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
      <div className=" flex items-center gap-x-2">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Articles on:
        </div>
        <img className=" w-20 aspect-auto rounded-md" src={sdg?.icon_url} />
        <div className="text-lg font-bold text-gray-800 mb-4">
          {sdg?.short_title}
        </div>
      </div>
      {articles.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
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

export default UNSDGArticles;
