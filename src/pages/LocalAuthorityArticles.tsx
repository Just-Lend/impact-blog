import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useParams, useLocation } from "react-router-dom";
import { getCampaignArticlesByLocalAuthorityId } from "../api/campaignArticleService";
import type { Article } from "../types";

const LocalAuthorityArticles: React.FC = () => {
  const { laId } = useParams<{ laId: string }>();
  const location = useLocation();
  const { laName } = location.state || {};
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (laId) {
      getCampaignArticlesByLocalAuthorityId(Number(laId))
        .then((articles) => setArticles(articles))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [laId]);

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        {laName} Local Authority - Articles
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

export default LocalAuthorityArticles;
